import React, { useEffect, useMemo, useState } from 'react';
import { MsgSend } from '@terra-money/terra.js';
import Icon from '../../Icon';
import { centsToDollars } from '../../../utils/centsToDollars';
import { CartContainerDetail, CheckoutHeader, CheckoutHeaderButtons, CheckoutHeaderContent } from './styles';
import {
  ICreateOrderRequest,
  ICreateOrderResponse,
  useKadoApi,
  getTerraTransactions,
  getSolanaTransactions,
} from '../../../utils/apiServices';
import config from '../../../utils/config';
import {
  useWallet,
  ConnectType
} from '@terra-money/wallet-provider';
import { Connection, PublicKey, TransactionInstruction, Transaction, clusterApiUrl } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';
import { Cluster, PaymentOptions, PhantomProvider } from './types';
import { useWalletOverride } from '../../../states/user/hooks';

declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean;
    }
  }
}

interface IProps {
  widgetId: number;
  ustBalance?: number;
  subtotal: number;
  shippingCost: number;
  tax: number;
  price: number
  taxTotal: number;
  checkoutDisabled: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setTaxTotal: React.Dispatch<React.SetStateAction<number>>;
  setTaxRate: React.Dispatch<React.SetStateAction<number>>;
  setOrderId: React.Dispatch<React.SetStateAction<string>>;
  createOrder: (order: ICreateOrderRequest) =>  Promise<ICreateOrderResponse>;
  handleClose: () => void;
  exchangeRate: number;
}

const CheckoutForm = ({
  widgetId,
  subtotal,
  shippingCost,
  price,
  tax,
  setLoading,
  setOrderId,
  taxTotal,
  checkoutDisabled,
  createOrder,
  exchangeRate,
  handleClose,
}: IProps) => {
  // Global
  const [checkoutLoading, setCheckoutLoading] = useState<boolean>(false);
  const [, setError]                     = useState<boolean>(false);
  const [, setErrorMessage]       = useState<string>('');
  const [step, setStep]                       = useState<number>(2);
  const [completedSteps, setCompletedSteps]   = useState<number[]>([]);

  // Select blockchain
  const [blockchain, setBlockchain] = useState<string>('');

  // Payment method
  const [paymentMethod, setPaymentMethod]   = useState<PaymentOptions>('wallet');
  const [selectedWallet, setSelectedWallet] = useState<string>('');
  const [widgetConfig, setWidgetConfig]     = useState<any>(null);

  // Terra wallet
  const [terraWalletAddress, setTerraWalletAddress] = useState<string>('');
  const [terraUstBalance, setTerraUstBalance]       = useState<number>(0);
  const [terraWalletLoading, setTerraWalletLoading] = useState<boolean>(false);
  const [transactionAddress, setTransactionAddress] = useState<string>('');

  // Solana wallet
  const [phantomWalletConnected, setPhantomWalletConnected]   = useState<boolean>(false);
  const [solflareWalletConnected, setSolflareWalletConnected] = useState<boolean>(false);
  const [solanaPublicKey, setSolanaPublicKey]                 = useState<any>(null);
  const [solanaWalletAddress, setSolanaWalletAddress]         = useState<string>('');
  const [solanaUsdcBalance, setSolanaUsdcBalance]             = useState<number>(0);
  const [solanaWalletLoading]                                 = useState<boolean>(false);

  const wallet = useWallet();
  const { terra, getTerraBalancesByAddress, resetUser } = useWalletOverride();

  const { createTransaction, getWidgetConfig } = useKadoApi()

  const solanaWalletConfig = useMemo(() => {
    if (widgetConfig) {
      const solanaWallet = widgetConfig.wallets.find((wallet) => wallet.origin === 'solana')
      if (solanaWallet) {
        const { address, network } = solanaWallet
        return {
          address,
          network
        }
      }
    }
    return undefined;
  }, [widgetConfig])

  const terraWalletConfig = useMemo(() => {
    if (widgetConfig) {
      const terraWallet = widgetConfig.wallets.find((wallet) => wallet.origin === 'terra')
      if (terraWallet) {
        const { address, network } = terraWallet
        return {
          address,
          network
        }
      }
    }
    return undefined;
  }, [widgetConfig])

  const getTerraBalance = async (walletAddress: string) => {
    if (walletAddress === '') return 0;

    setTerraWalletLoading(true);
    const balances = await getTerraBalancesByAddress(walletAddress);
    if (balances && balances.ust) {
      setTerraUstBalance(balances.ust);
    }
    setTerraWalletLoading(false);
  }

  useEffect(() => {
    (async () => {
      if (widgetId) {
        const response = await getWidgetConfig(widgetId);
        if (response.success) {
          const { data } = response;
          const { widgetConfig } = data;
          setWidgetConfig(widgetConfig)
        }
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widgetId])

  /* If Terra connected, check balance */
  useEffect(() => {
    if (wallet && wallet.status === 'WALLET_CONNECTED' && terraWalletAddress === '') {
      const terraWallet = wallet.wallets[0];
      setTerraWalletAddress(terraWallet.terraAddress);
      getTerraBalance(terraWallet.terraAddress);
    }

    // TODO: if Solana wallet connected, get balance
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet]);

  const onDisconnectWallet = () => {
    wallet.disconnect();
    resetUser();
    setTerraWalletAddress('');
    setTerraUstBalance(0);
    setSolanaWalletAddress('');
    setSolanaUsdcBalance(0);
  }

  const checkWallet = () => {
    return ((terraWalletAddress && terraWalletAddress !== '') || (solanaWalletAddress && solanaWalletAddress !== ''))
      ? true
      : false;
  };

  const checkTerraBalance = () => {
    // TODO: Check against cart price
    if (terraUstBalance === 0) {
      return false;
    }

    return true;
  };

  const checkSolanaBalance = () => {
    // TODO: Check against cart price
    if (solanaUsdcBalance === 0) {
      return false;
    }

    return true;
  };

  const queryForDeposit = async () => {
    let address = '';

    if (blockchain === 'terra' && terraWalletAddress === '') {
      setError(true);
      setErrorMessage('No Terra Wallet connection found. Please refresh and try again.');
      return;
    }

    if (blockchain === 'solana' && solanaWalletAddress === '') {
      setError(true);
      setErrorMessage('No Solana Wallet connection found. Please refresh and try again.');
      return;
    }

    let order: ICreateOrderRequest = {
      shippingFee: 0,
      taxFee: taxTotal,
      blockchain: {
        origin: blockchain,
        method: 'deposit',
      },
      exchangeRate: exchangeRate,
    };

    if (blockchain === 'terra') {
      order['purchaseMethod'] = 'terra';
      if (order.blockchain) {
        order.blockchain['network'] = config.lcdClient.url;
      }
      // address = config.lcdClient.ustAddress;
      address = terraWalletConfig?.address;
    } else if (blockchain === 'solana') {
      order['purchaseMethod'] = 'solana';
      if (order.blockchain) {
        // order.blockchain['network'] = config.solana.network;
        order.blockchain['network'] = solanaWalletConfig?.network;
      }

      const createTxResponse = await createTransaction('SOL');
      if (createTxResponse && createTxResponse.success) {
        address = createTxResponse.data.address;
        setTransactionAddress(address);
      }
    }

    setTimeout(() => {
      pollForDeposit(blockchain, address, terraWalletAddress, price, order);
    }, 1000);
  }

  /* Stepper function for moving between checkout steps */
  const completeStep = async (e, step: number) => {
    e.preventDefault();

    if (step === 3) {
      if (paymentMethod === 'deposit') {
        queryForDeposit();
      }
    }

    setStep(step + 1);
    let completed = completedSteps;
    completed.push(step);
    setCompletedSteps(completed);
  }

  const handleSetBlockchain = val => {
    setBlockchain(val);
    setSelectedWallet('');
  };

  const handleSetSelectedWallet = val => {
    setSelectedWallet(val);
    if (val === 'WALLETCONNECT') {
      connectTerraWallet(ConnectType.WALLETCONNECT);
    } else if (val === 'TERRA') {
      // TODO Pause this in the UI to show a loading state.
      // TODO Figure out why this is happening when the page loads without button click.
      connectTerraWallet(ConnectType.EXTENSION);
    } else if (val === 'PHANTOM') {
      connectSolanaWallet('phantom');
    } else if (val === 'solflare') {
      connectSolanaWallet('solflare');
    }
  }

  const connectTerraWallet = async (type: ConnectType) => {
    setTerraWalletLoading(true);
    await wallet.connect(type);
    setTerraWalletLoading(false);
  }

  const connectSolanaWallet  = async (type: string) => {
    if (type === 'phantom' && phantomWalletConnected) return true;
    if (type === 'solflare' && solflareWalletConnected) return true;

    const connection = getSolanaConnection();
    const provider = getProvider(type);

    provider.on('connect', async (publicKey: PublicKey) => {
      if (type === 'phantom') {
        setPhantomWalletConnected(true);
        setSolanaPublicKey(publicKey);
        setSolanaWalletAddress(publicKey.toBase58());
      } else if (type === 'solflare') {
        setSolflareWalletConnected(true);
        setSolanaPublicKey(publicKey);
        setSolanaWalletAddress(publicKey.toBase58());
      }

      try {
        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
          mint: new PublicKey(config.solana.usdcAddress)
        }, 'single'); 
        if (tokenAccounts && tokenAccounts.value && tokenAccounts.value.length > 0) {
          for (let i = 0; i < tokenAccounts.value.length; i += 1) {
            const account = tokenAccounts.value[i].account;
            const parsedInfo = account.data.parsed.info;
            if ((parsedInfo.mint === config.solana.usdcAddress) && parsedInfo.tokenAmount?.uiAmount) {
              setSolanaUsdcBalance(parsedInfo.tokenAmount.uiAmount)
            }
          }
        }
      } catch (err) {
        console.error('Could not fetch token accounts');
        console.error(err);
      }
    });

    try {
      await provider.connect();
    } catch (err) {
      console.error('Error: ' + JSON.stringify(err));
    }
  };

  const getProvider = (type: string) => {
    if (type === 'phantom') {
      if ('solana' in window) {
        const anyWindow: any = window;
        const provider: PhantomProvider = anyWindow.solana;
        if (provider.isPhantom) {
          return provider;
        }
      }
    } else if (type === 'solflare') {
      if ('solflare' in window) {
        const anyWindow: any = window;
        const provider = anyWindow.solflare;
        if (provider.isSolflare) {
          return provider;
        }
      }
    }
    return null;
  };

  const getSolanaConnection = () => {
    const connection = new Connection(
      // clusterApiUrl(config.solana.network as Cluster),
      clusterApiUrl(solanaWalletConfig?.network as Cluster),
      'confirmed',
    );
    return connection;
  };

  const handleEditStep = (e, step) => {
    if (e) {
      e.preventDefault();
    }

    setStep(step);
    let completed = completedSteps;
    const stepIndex = completedSteps.indexOf(step);
    completed.splice(stepIndex, 1);
    setCompletedSteps(completed);
  }

  const handleCheckoutSuccess = () => {
    // TODO
  }

  const handleCheckoutError = (msg?: string) => {
    // TODO
    console.log('handleCheckoutError', msg)
  }

  const handleSolanaCheckout = async() => {
    let convertPrice: number | string = centsToDollars(price);
    convertPrice = convertPrice.replace('.', '');
    if (convertPrice) {
      convertPrice = parseInt(convertPrice) * 10000;
    }

    const connection = getSolanaConnection();
    const provider = getProvider(selectedWallet.toLowerCase());
    const mintPublicKey = new PublicKey(config.solana.usdcAddress);    
    const mintToken = new Token(
      connection,
      mintPublicKey,
      TOKEN_PROGRAM_ID,
      provider
    );
          
    const fromTokenAccount = await mintToken.getOrCreateAssociatedAccountInfo(
      solanaPublicKey
    );
    
    // TODO: Needs to pull dynamic from organization
    // const address: string = '7fZt2UNqriqXBnuEUYh4WZP5bDdfP1QbT14nopD1AU1o';
    const address: string = solanaWalletConfig?.address;
    const destPublicKey = new PublicKey(address);

    // Get the derived address of the destination wallet which will hold the custom token
    const associatedDestinationTokenAddr = await Token.getAssociatedTokenAddress(
      mintToken.associatedProgramId,
      mintToken.programId,
      mintPublicKey,
      destPublicKey
    );
    const receiverAccount = await connection.getAccountInfo(associatedDestinationTokenAddr);
    const instructions: TransactionInstruction[] = [];  
    if (receiverAccount === null) {
      instructions.push(
        Token.createAssociatedTokenAccountInstruction(
          mintToken.associatedProgramId,
          mintToken.programId,
          mintPublicKey,
          associatedDestinationTokenAddr,
          destPublicKey,
          solanaPublicKey
        )
      )
    }
    instructions.push(
      Token.createTransferInstruction(
        TOKEN_PROGRAM_ID,
        fromTokenAccount.address,
        associatedDestinationTokenAddr,
        solanaPublicKey,
        [],
        convertPrice as number,
      )
    );

    // Solana transaction config
    const transaction = new Transaction().add(...instructions);
    transaction.feePayer = solanaPublicKey;
    const blockhashObj = await connection.getRecentBlockhash();
    transaction.recentBlockhash = blockhashObj.blockhash;

    if (transaction) {
      try {
        const orderData: ICreateOrderRequest = {
          shippingFee: 0,
          taxFee: taxTotal,
          solanaTx: transaction,
          purchaseMethod: 'solana',
          blockchain: {
            origin: blockchain,
            // network: config.solana.network,
            network: solanaWalletConfig?.network,
            method: 'wallet'
          },
          exchangeRate: exchangeRate,
        };

        const signed = await provider.signTransaction(transaction);
        const signature = await connection.sendRawTransaction(signed.serialize());
        await connection.confirmTransaction(signature);
        const orderResp = await createOrder(orderData);
        
        if (orderResp && orderResp.success) {
          setTimeout(async () => {
            if (orderResp.data && orderResp.data.orderId) {
              handleCheckoutSuccess();
            }
          }, 5000);
        } else {
          handleCheckoutError();
        }
      } catch (error) {
        console.log('error: ', error);
        handleCheckoutError();
      }
    }
    return true;
  }

  const checkTerraMainnetActive = () => {
    const activeNetwork = config.lcdClient.network || 'testnet';
    const networkValid = wallet && wallet.network && wallet.network.name === activeNetwork;
    return networkValid;
  };

  const dollarsToUstOrUsdc = (price: string): string => {
    let ustCoins = price.replace('.', '');
    if (ustCoins) {
      ustCoins = (parseInt(ustCoins) * 10000).toString();
      return ustCoins;
    }

    return '';
  }

  const handleTerraCheckout = async() => {
    if (checkTerraMainnetActive()) {
      console.log('wallet1: ', wallet);

      if (wallet && wallet.status !== 'WALLET_CONNECTED') {
        setError(true);
        setErrorMessage('No Terra Wallet connection found.');
      }

      console.log('wallet2: ', wallet);

      if (wallet) {
        const ustCoins = dollarsToUstOrUsdc(centsToDollars(price));
        const account = await terra.auth.accountInfo(terraWalletAddress);
        const stdTxMsgSend = new MsgSend(
          terraWalletAddress,
          // TODO: Update below to pull from Org init
          // config.lcdClient.ustAddress,
          terraWalletConfig?.address,
          { uusd: ustCoins }
        );
        const feeEstimate = await terra.tx.estimateFee(
          [{
            sequenceNumber: account.getSequenceNumber(),
            publicKey: account.getPublicKey()
          }],
          {
            msgs: [stdTxMsgSend],
            gasPrices: { uusd: 0.15 } // Hardcoded Columbus-5 from https://fcd.terra.dev/v1/txs/gas_prices
          },
        );
        const orderData: ICreateOrderRequest = {
          shippingFee: 0,
          taxFee: taxTotal,
          ustPriceTotal: ustCoins,
          purchaseMethod: 'terra',
          blockchain: {
            origin: blockchain,
            network: wallet.network.chainID,
            method: 'wallet'
          },
          exchangeRate: exchangeRate,
        };

        await wallet.post({
          msgs: [stdTxMsgSend],
          memo: config.lcdClient.ustMemo,
          fee: feeEstimate
        }).then(async (payload: any) => {
          const { success, error } = payload;
          if (error) {
            setError(true);
            setCheckoutLoading(false);

            if (error.code && error.code === 1) {
              setErrorMessage('Terra Station transaction declined.');
            } else {
              if (error.code && error.message) {
                setErrorMessage(error.message);
              }
            }

            return;
          }

          if (success) {
            const orderResp = await createOrder({ ...orderData, terraTx: payload });
            if (orderResp && orderResp.success) {
              setTimeout( async() => {
                await getTerraBalancesByAddress(terraWalletAddress);
                if (orderResp.data && orderResp.data.orderId) {
                  handleCheckoutSuccess();
                }
              }, 2500);
            } else {
              handleCheckoutError();
              console.error('Error generating order after successful transaction. order: ', JSON.stringify(orderResp));
            }
          }
        }).catch(error => {
          console.log('error: ', error);
          handleCheckoutError();
          const err = (typeof error === 'object') ? JSON.stringify(error) : error;
          let errParse = JSON.parse(err);
          if (errParse && errParse.name === 'UserDenied') {
            setErrorMessage('User Denied Request');
          } else {
            setErrorMessage(err);
          }
        });
      }
    } else {
      console.log('mainnet off: ');
      setError(true);
      setErrorMessage(`Invalid network selected, please change network to ${config.lcdClient.network} and try again.`);
      setLoading(false);
      setCheckoutLoading(false);
    }
  }

  const handleCheckout = async e => {
    e.preventDefault();
    setError(false);
    setErrorMessage('');
    setCheckoutLoading(true);

    console.log('blockchain: ', blockchain);

    if (blockchain === 'solana') {
      handleSolanaCheckout();
    }

    if (blockchain === 'terra') {
      handleTerraCheckout();
    }
  };

  const pollForDeposit = (blockchain, address, walletAddress, orderTotal, orderData) => {
    // Repeat with an interval of 10 seconds
    const timerId = setInterval(async () => {
      if (blockchain === 'terra') {
        const ustCoins = dollarsToUstOrUsdc(centsToDollars(orderTotal));
        const transactions = await getTerraTransactions(address);
        let previousAmountTxHashes: string[] = [];
        //
        // TODO: Implement way to ensure users' previous tx are not accounted for
        // when they make >= 2 deposit tx payments with us.
        // Possibly, update to create unique memo address on payment deposit generate
        // and then we only need to poll and match memo addresses (what we are displaying, and the users payment)
        //
        // if (auth && (auth as IAuth).userId) {
        //   const previousAmountTransactions = await getTransactionByAmount(auth.userId, orderTotal);
        //   if (previousAmountTransactions && previousAmountTransactions.data && previousAmountTransactions.data.previousAmountTxHashes ) {
        //     previousAmountTxHashes = previousAmountTransactions.data.previousAmountTxHashes;
        //   }
        // }
        
        if (transactions) {
          const { txs } = transactions;
          if (txs) {
            for (const t of txs) {
              const { txhash } = t;
              const { value } = t.tx;
              if (!value) return;
              const { msg } = value || [];
              for (const m of msg) {
                if (m.type === 'bank/MsgSend') {
                  const { amount, to_address, from_address } = m.value;
                  // TODO: to_address match must be to end-merchant, not static config
                  // if (from_address === walletAddress && to_address === config.lcdClient.ustAddress) {
                  if (from_address === walletAddress && to_address === terraWalletConfig?.address) {
                    for (const a of amount) {
                      const amt = a.amount;
                      if (amt === ustCoins && !previousAmountTxHashes.includes(txhash)) {
                        clearInterval(timerId);
                        const orderResp = await createOrder({
                          ...orderData,
                          terraTx: t,
                          ustPriceTotal: ustCoins
                        });
                        if (orderResp && orderResp.success) {
                          setTimeout( async() => {
                            if (orderResp.data && orderResp.data.orderId) {
                              setOrderId(orderResp.data.orderId);
                              handleCheckoutSuccess();
                            }
                          }, 5000);
                        } else {
                          setError(true);
                          setCheckoutLoading(false);
                          setErrorMessage('An error occurred generating your order. Please contact support if you require further assistance.');
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else if (blockchain === 'solana') {
        const convertPrice: any = dollarsToUstOrUsdc(centsToDollars(orderTotal));
        const transactions = await getSolanaTransactions(address);

        if (transactions && transactions.succcess) { // NOTE: for some reason, the solscan API returns `succcess` with 3 c's
          const { data } = transactions;
          if (data) {
            const { tx } = data;
            if (tx && tx.transactions && tx.transactions.length >= 1) {
              for (let t of tx.transactions) {
                if (t.status === 'Success' && t.change && t.change.symbol === 'USDC') {
                  const usdcAmount = t.change.changeAmount;

                  if (usdcAmount === convertPrice) {
                    // Clear interval
                    clearInterval(timerId);
                    const orderResp = await createOrder({ ...orderData, solanaTx: t });
                    if (orderResp && orderResp.success) {
                      setTimeout( async() => {
                        if (orderResp.data && orderResp.data.orderId) {
                          setOrderId(orderResp.data.orderId);
                          handleCheckoutSuccess();
                        }
                      }, 5000);
                    } else {
                      setError(true);
                      setCheckoutLoading(false);
                      setErrorMessage('An error occurred generating your order. Please contact support if you require further assistance.');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }, 10 * 1000);

    // Stop polling after 20 minutes
    setTimeout(() => { 
      clearInterval(timerId); 
    }, 20 * 60 * 1000);
  };

  return (
    <CartContainerDetail>
      {/* User Auth */}
      <CheckoutHeader>
        <CheckoutHeaderContent>
          <h2>Stable Pay</h2>
          <p>Complete your purchase with UST or USDC</p>
        </CheckoutHeaderContent>
        <CheckoutHeaderButtons>
          <button type='button' title='Close' onClick={handleClose}>
            <Icon name='ModalClose' />
          </button>
        </CheckoutHeaderButtons>
      </CheckoutHeader>

      {/* Price */}
      <StepOne 
        price={price}
        step={step}
        completedSteps={completedSteps}
      />
      
      {/* Blockchain + Wallet */}
      <StepTwo
        step={step}
        completedSteps={completedSteps} 
        completeStep={completeStep}
        blockchain={blockchain}
        handleSetBlockchain={handleSetBlockchain}
        handleEditStep={handleEditStep}
        /* Payment methods */
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        selectedWallet={selectedWallet}
        /* Terra */
        terraWalletAddress={terraWalletAddress}
        setTerraWalletAddress={setTerraWalletAddress}
        ustBalance={terraUstBalance}
        terraWalletLoading={terraWalletLoading}
        /* Solana */
        solanaUsdcBalance={solanaUsdcBalance}
        solanaWalletAddress={solanaWalletAddress}
        solanaWalletLoading={solanaWalletLoading}
        /* Check Balances */
        checkWallet={checkWallet}
        checkTerraBalance={checkTerraBalance}
        checkSolanaBalance={checkSolanaBalance}
        handleSetSelectedWallet={handleSetSelectedWallet}
        disconnectWallet={onDisconnectWallet}
      />

      {/* Checkout */}
      <StepThree
        step={step}
        blockchain={blockchain}
        paymentMethod={paymentMethod}
        checkoutLoading={checkoutLoading}
        price={price}
        subtotal={subtotal}
        shippingCost={shippingCost}
        tax={tax}
        transactionAddress={transactionAddress}
        handleCheckout={handleCheckout} 
        checkoutDisabled={checkoutDisabled}
      />
    
    </CartContainerDetail>
  );
}

export default CheckoutForm;
