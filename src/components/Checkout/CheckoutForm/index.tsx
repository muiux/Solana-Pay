import React, { useEffect, useState } from 'react';
import {
  MsgSend,
  LCDClient
} from '@terra-money/terra.js';
import Icon from '../../Icon';
import { convertCentsToDollarsPrice } from '../../../utils/centsToDollars';
import { IUser, IAuth } from '../../../stores/UserStore';
import { GrayButton } from '../../Global/variables';
import { CartContainerDetail, CheckoutHeader, CheckoutHeaderButtons, CheckoutHeaderContent } from './styles';
import {
  ICreateOrderRequest,
  ICreateOrderResponse,
  createTransaction,
  getTerraTransactions,
  getSolanaTransactions,
  getTransactionByAmount
} from '../../../utils/apiServices';
import config from '../../../utils/config';
import {
  useWallet,
  ConnectType
} from '@terra-money/wallet-provider';
import * as web3 from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useStores } from '../../../hooks/useStores';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';
import Loader from '../../Loader';
import { useHistory } from 'react-router';
import { localStore } from '../../../utils';

type Cluster = 'devnet' | 'testnet' | 'mainnet-beta';

declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean;
    }
  }
}

interface IProps {
  user: IUser | null;
  auth: IAuth | null;
  walletAddress?: string;
  userUstBalance?: number;
  zincPriceTotal: number;
  taxTotal: number;
  cartPriceTotal: number;
  cart: any[];
  checkoutDisabled: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  onSetState: React.Dispatch<React.SetStateAction<string>>;
  setTaxTotal: React.Dispatch<React.SetStateAction<number>>;
  setTaxRate: React.Dispatch<React.SetStateAction<number>>;
  setOrderId: React.Dispatch<React.SetStateAction<string>>;
  setCheckoutSuccessModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  createOrder: (order: ICreateOrderRequest) =>  Promise<ICreateOrderResponse>;
  setCheckoutSuccessTitle: React.Dispatch<React.SetStateAction<string>>;
  setCheckoutSuccessIcon: React.Dispatch<React.SetStateAction<any>>;
  setCheckoutSuccessChild: React.Dispatch<React.SetStateAction<any>>;
  setCheckoutSuccessSubtitle: React.Dispatch<React.SetStateAction<string>>;
  exchangeRate: number;
}

const CheckoutForm = ({
  user,
  auth,
  walletAddress,
  userUstBalance,
  setLoading,
  setOrderId,
  setCheckoutSuccessModalActive,
  setCheckoutSuccessTitle,
  setCheckoutSuccessIcon,
  setCheckoutSuccessChild,
  setCheckoutSuccessSubtitle,
  zincPriceTotal,
  cartPriceTotal,
  taxTotal,
  cart,
  checkoutDisabled,
  createOrder,
  exchangeRate,
}: IProps) => {
  const history = useHistory();
  const [checkoutLoading, setCheckoutLoading] = useState<boolean>(false);
  const [error, setError]                     = useState<boolean>(false);
  const [errorMessage, setErrorMessage]       = useState<string>('');
  const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);

  const [step, setStep]                       = useState<number>(2);
  const [completedSteps, setCompletedSteps]   = useState<number[]>([]);

  // Select blockchain
  const [selectedBlockchain, setSelectedBlockchain] = useState<string>('');

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState<string>('wallet');
  const [selectedWallet, setSelectedWallet] = useState<string>('');

  const [errors, setErrors] = useState<any>({});

  const [saveShipping, setSaveShipping] = useState<boolean>(false);

  // Solana wallet properties
  const [phantomWalletConnected, setPhantomWalletConnected] = useState<boolean>(false);
  const [phantomWalletAddress, setPhantomWalletAddress] = useState<string>('');
  const [phantomUSDCBalance, setPhantomUSDCBalance] = useState<number>(0);

  const [solflareWalletConnected, setSolflareWalletConnected] = useState<boolean>(false);
  const [solflareWalletAddress, setSolflareWalletAddress] = useState<string>('');
  const [solflareUSDCBalance, setSolflareUSDCBalance] = useState<number>(0);

  // Terra wallet properties
  const [userTerraWalletAddress, setUserTerraWalletAddress] = useState<string>('');
  const [terraWalletLoading, setTerraWalletLoading] = useState<boolean>(false);
  const [transactionAddress, setTransactionAddress] = useState<string>('');

  const wallet = useWallet();
  // const connectedWallet = useConnectedWallet();
  const { userStore } = useStores();
  const { terra }: { terra: LCDClient } = userStore;

  const onDisconnectWallet = () => {
    wallet.disconnect();
    userStore.resetUser();
  }

  useEffect(() => {
    if (wallet && wallet.status === 'WALLET_CONNECTED' && wallet.wallets[0]) {
      userStore.setUserWalletAddress(wallet.wallets[0].terraAddress);
    }

  }, [wallet]);

  const getClassNameForField = field => {
    return `${errors[field] ? 'error' : ''}`;
  };

  const checkWallet = () => {
    return !!(walletAddress && walletAddress !== '');
  };

  const checkTerraBalance = () => {
    // Todo update to account for price of purchase
    return !!(userUstBalance && userUstBalance !== 0);
  };

  const checkSolanaBalance = () => {
    if (selectedWallet === 'phantom') {
      return phantomUSDCBalance && phantomUSDCBalance !== 0 && (phantomUSDCBalance * 100) >= cartPriceTotal ? true : false;
    } else if (selectedWallet === 'solflare') {
      return solflareUSDCBalance && solflareUSDCBalance !== 0 && (solflareUSDCBalance * 100) >= cartPriceTotal ? true : false;
    }
    return false;
  };

  const completeStep = async (e, step: number) => {
    e.preventDefault();
    const newErrors: any = {};

    if (step === 0) {
      
    } else if (step === 1) {
      
    } else if (step === 3) {
      if (paymentMethod === 'wallet' && 
        (!selectedWallet || (selectedWallet === 'terra' && (!checkWallet() || !checkTerraBalance()))) ||
        ((selectedWallet === 'phantom' || selectedWallet === 'solflare') && (!checkSolanaBalance()))) {
        newErrors.wallet = true;
      }

      if (paymentMethod === 'deposit') {
        let address = '';
        if (selectedBlockchain === 'terra' && !userTerraWalletAddress) {
          newErrors.deposit = true;
        }

        let orderData: ICreateOrderRequest;
        if (selectedBlockchain === 'terra') {
          orderData = {
            userId: auth?.userId || '',
            retailer: userStore.getRetailer(),
            products: cart,
            shippingFee: 0,
            shippingDetail: {},
            taxFee: taxTotal,
            platformFee: 0,
            ustFeeTotal: 100,
            zincPriceItemTotal: zincPriceTotal,
            saveShipping: saveShipping,
            purchaseMethod: 'terra',
            blockchain: {
              origin: selectedBlockchain,
              network: config.lcdClient.url,
              method: 'deposit',
            },
            exchangeRate: exchangeRate,
          };
          address = config.lcdClient.ustAddress;
        } else if (selectedBlockchain === 'solana') {
          orderData = {
            userId: auth?.userId || '',
            retailer: userStore.getRetailer(),
            products: cart,
            shippingFee: 0,
            shippingDetail: {},
            taxFee: taxTotal,
            platformFee: 0,
            zincPriceItemTotal: zincPriceTotal,
            saveShipping: saveShipping,
            purchaseMethod: 'solana',
            blockchain: {
              origin: selectedBlockchain,
              network: config.solana.network,
              method: 'deposit',
            },
            exchangeRate: exchangeRate,
          };
          const createTxResponse = await createTransaction('SOL');
          if (createTxResponse && createTxResponse.success) {
            address = createTxResponse.data.address;
            setTransactionAddress(address);
          }
        }

        // Start polling for deposit.
        setTimeout(() => {
          pollForDeposit(selectedBlockchain, address, userTerraWalletAddress, cartPriceTotal, orderData);
        }, 1000);
      }
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return false;
    }

    setStep(step + 1);
    let completed = completedSteps;
    completed.push(step);
    setCompletedSteps(completed);
  }

  const handleSetSelectedBlockchain = val => {
    setSelectedBlockchain(val);
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

    provider.on('connect', async () => {
      if (type === 'phantom') {
        setPhantomWalletConnected(true);
        setPhantomWalletAddress(provider.publicKey?.toBase58());
      } else if (type === 'solflare') {
        setSolflareWalletConnected(true);
        setSolflareWalletAddress(provider.publicKey?.toBase58());
      }

      try {
        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(provider.publicKey, {
          mint: new web3.PublicKey(config.solana.usdcAddress)
        }, 'single'); 
        if (tokenAccounts && tokenAccounts.value && tokenAccounts.value.length > 0) {
          for (let i = 0; i < tokenAccounts.value.length; i += 1) {
            const account = tokenAccounts.value[i].account;
            const parsedInfo = account.data.parsed.info;
            if (parsedInfo.mint === config.solana.usdcAddress) {
              type === 'phantom' ? 
                setPhantomUSDCBalance(parsedInfo.tokenAmount.uiAmount) : 
                setSolflareUSDCBalance(parsedInfo.tokenAmount.uiAmount);
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

  const checkMainnetActive = () => {
    const activeNetwork = config.lcdClient.network || 'mainnet';
    return wallet && wallet.network && wallet.network.name === activeNetwork;
  };

  const getProvider = (type: string) => {
    if (type === 'phantom') {
      if ('solana' in window) {
        const anyWindow: any = window;
        const provider = anyWindow.solana;
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
    const connection = new web3.Connection(
      web3.clusterApiUrl(config.solana.network as Cluster),
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

  const handleCheckoutSuccess = (orderId: string) => {
    setOrderId(orderId);
    setCheckoutSuccessModalActive(true);
    setCheckoutLoading(false);
    setError(false);
    setErrorMessage('');
    setIsErrorModalOpen(false);
    setCheckoutSuccessTitle('Order received!')
    setCheckoutSuccessIcon(<Icon name='GiftCardSuccessIcon' size='lg' />)
    setCheckoutSuccessSubtitle(`We have received your order #${orderId}. You can view your order details below or access them from your Order History later on.`)
    setCheckoutSuccessChild(
      <GrayButton onClick={e => {
        e.preventDefault();
        setCheckoutSuccessModalActive(false)
        history.push(`/order/${orderId}`);
        
      }}>
        View Order
      </GrayButton>
    )
  }

  const handleCheckoutError = (msg?: string) => {
    setCheckoutSuccessModalActive(false);
    setError(true);
    setCheckoutLoading(false);
    setIsErrorModalOpen(true);

    if (msg) {
      setErrorMessage(msg);
    } else {
      setErrorMessage('An error occurred with this order. Please contact support if you require further assistance.')
    }
  }

  const handleCheckout = async e => {
    e.preventDefault();
    setError(false);
    setErrorMessage('');
    setCheckoutSuccessTitle('Confirming Transaction')
    setCheckoutSuccessChild(<Loader/>)
    setCheckoutSuccessSubtitle(`We’re checking in with ${selectedBlockchain && selectedBlockchain.toUpperCase()} to confirm.`);
    setCheckoutSuccessModalActive(true);
    setIsErrorModalOpen(false);
    setCheckoutLoading(true);

    if (auth) {
      if (cartPriceTotal <= 0) {
        const data: ICreateOrderRequest = {
          userId: auth.userId,
          retailer: userStore.getRetailer(),
          products: cart,
          shippingFee: 0,
          shippingDetail: {},
          taxFee: taxTotal,
          platformFee: 0,
          zincPriceItemTotal: zincPriceTotal,
          saveShipping: saveShipping,
          purchaseMethod: 'giftcard',
          exchangeRate: exchangeRate,
        };

        const orderResp = await createOrder(data);
        if (orderResp && orderResp.success && orderResp.data && orderResp.data.orderId) {
          handleCheckoutSuccess(orderResp.data.orderId);
        } else {
          handleCheckoutError();
        }

        return true;
      }

      if (selectedBlockchain === 'solana') {
        let convertPrice: any = convertCentsToDollarsPrice(cartPriceTotal);
        convertPrice = convertPrice.replace('.', '');

        if (convertPrice) {
          convertPrice = (parseInt(convertPrice) * 10000);
        }

        const connection = getSolanaConnection();
        const provider = getProvider(selectedWallet);
    
        const mintPublicKey = new web3.PublicKey(config.solana.usdcAddress);    
        const mintToken = new Token(
          connection,
          mintPublicKey,
          TOKEN_PROGRAM_ID,
          provider
        );
              
        const fromTokenAccount = await mintToken.getOrCreateAssociatedAccountInfo(
          provider.publicKey
        );
        
        let address: string = '';
        // TODO: Turn on when USDC SOL addresses can generate
        // const createTxResponse = await createTransaction('SOL');
        // if (createTxResponse && createTxResponse.success) {
        //   address = createTxResponse.data.address;
        // }
        // TODO: Remove
        address = '7fZt2UNqriqXBnuEUYh4WZP5bDdfP1QbT14nopD1AU1o';
        const destPublicKey = new web3.PublicKey(address);

        // Get the derived address of the destination wallet which will hold the custom token
        const associatedDestinationTokenAddr = await Token.getAssociatedTokenAddress(
          mintToken.associatedProgramId,
          mintToken.programId,
          mintPublicKey,
          destPublicKey
        );
        const receiverAccount = await connection.getAccountInfo(associatedDestinationTokenAddr);

        const instructions: web3.TransactionInstruction[] = [];  
        if (receiverAccount === null) {
          instructions.push(
            Token.createAssociatedTokenAccountInstruction(
              mintToken.associatedProgramId,
              mintToken.programId,
              mintPublicKey,
              associatedDestinationTokenAddr,
              destPublicKey,
              provider.publicKey
            )
          )
        }
        instructions.push(
          Token.createTransferInstruction(
            TOKEN_PROGRAM_ID,
            fromTokenAccount.address,
            associatedDestinationTokenAddr,
            provider.publicKey,
            [],
            convertPrice,
          )
        );

        const transaction = new web3.Transaction().add(...instructions);
    
        // Setting the variables for the transaction.
        transaction.feePayer = provider.publicKey;
        const blockhashObj = await connection.getRecentBlockhash();
        transaction.recentBlockhash = blockhashObj.blockhash;
    
        if (transaction) {
          try {
            const orderData: ICreateOrderRequest = {
              userId: auth.userId,
              retailer: userStore.getRetailer(),
              products: cart,
              shippingFee: 0,
              shippingDetail: {},
              taxFee: taxTotal,
              platformFee: 0,
              zincPriceItemTotal: zincPriceTotal,
              solanaTx: transaction,
              saveShipping: saveShipping,
              purchaseMethod: 'solana',
              blockchain: {
                origin: selectedBlockchain,
                network: config.solana.network,
                method: 'wallet'
              },
              exchangeRate: exchangeRate,
            };
            
            const cachedOrderInfo = {
              kadoAddress: address,
              selectedBlockchain,
              userWalletAddress: userTerraWalletAddress,
              orderTotal: cartPriceTotal,
              orderData
            };
            localStore.setEncrypted(config.localStoreKey.pendingPayment, cachedOrderInfo);
            const signed = await provider.signTransaction(transaction);
            const signature = await connection.sendRawTransaction(signed.serialize());
            await connection.confirmTransaction(signature);

            const orderResp = await createOrder(orderData);
            localStore.deleteItem(config.localStoreKey.pendingPayment);
            
            if (orderResp && orderResp.success) {
              setTimeout(async () => {
                if (orderResp.data && orderResp.data.orderId) {
                  handleCheckoutSuccess(orderResp.data.orderId);
                }
              }, 5000);
            } else {
              handleCheckoutError();
            }
          } catch (err) {
            console.error('Error: ' + JSON.stringify(err));
            localStore.deleteItem(config.localStoreKey.pendingPayment);
            handleCheckoutError();
          }
        }
        return true;
      }

      if (selectedBlockchain === 'terra') {
        if (!user) {
          setCheckoutLoading(false);
          setCheckoutSuccessModalActive(false);
          setError(true);
          setErrorMessage('Please connect to Terra Station or WalletConnect and try again.');
          setIsErrorModalOpen(true);
          return;
        }

        // Check if the mainnet status is active
        // before launching the ext.sign
        if (checkMainnetActive()) {
          setTimeout(async () => {
            if (wallet) {
              let convertPriceToUst = convertCentsToDollarsPrice(cartPriceTotal);
              convertPriceToUst = convertPriceToUst.replace('.', '');
              if (convertPriceToUst) {
                convertPriceToUst = (parseInt(convertPriceToUst) * 10000).toString();
              }

              if (!user.address) {
                return;
              }

              const stdTxMsgSend = new MsgSend(
                user.address,
                config.lcdClient.ustAddress,
                { uusd: convertPriceToUst }
              );

              const stdFeeEstimate = await terra.tx.estimateFee(
                // TODO Edit this
                [{ sequenceNumber: 123 }],
                {
                  msgs: [stdTxMsgSend],
                  // fee: 
                },
                
              );

              // TODO: Delete
              if (wallet.status) {
                const ustFees = 100;
                const orderData: ICreateOrderRequest = {
                  userId: auth.userId,
                  retailer: userStore.getRetailer(),
                  products: cart,
                  shippingFee: 0,
                  shippingDetail: {},
                  taxFee: taxTotal,
                  platformFee: 0,
                  ustPriceTotal: convertPriceToUst,
                  ustFeeTotal: ustFees,
                  zincPriceItemTotal: zincPriceTotal,
                  saveShipping: saveShipping,
                  purchaseMethod: 'terra',
                  blockchain: {
                    origin: selectedBlockchain,
                    network: wallet.network.chainID,
                    method: 'wallet'
                  },
                  exchangeRate: exchangeRate,
                };
                
                const cachedOrderInfo = {
                  kadoAddress: config.lcdClient.ustAddress,
                  selectedBlockchain,
                  userWalletAddress: user.address,
                  orderTotal: cartPriceTotal,
                  orderData
                };
                localStore.setEncrypted(config.localStoreKey.pendingPayment, cachedOrderInfo);
                await wallet.post({
                  // @ts-ignore
                  msgs: [stdTxMsgSend],
                  memo: config.lcdClient.ustMemo,
                  // @ts-ignore
                  fee: stdFeeEstimate,
                }).then(async (payload: any) => {
                  const { success, error } = payload;
                  if (error) {
                    setCheckoutSuccessModalActive(false);
                    setError(true);
                    setErrorMessage('Error creating this order.');
                    setIsErrorModalOpen(true);
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
                    const orderResp = await createOrder({ ...orderData, terraStationTx: payload });
                    if (orderResp && orderResp.success) {
                      setTimeout( async() => {
                        await userStore.getUserBalances(wallet.wallets[0].terraAddress);
                        if (orderResp.data && orderResp.data.orderId) {
                          handleCheckoutSuccess(orderResp.data.orderId);
                        }
                      }, 5000);
                    } else {
                      handleCheckoutError();
                      console.error('Error generating order after successful transaction. order: ', JSON.stringify(orderResp));
                    }
                  }
                }).catch(error => {
                  console.error('error', error);
                  handleCheckoutError();
                  const err = (typeof error === 'object') ? JSON.stringify(error) : error;
                  let errParse = JSON.parse(err);
                  if (errParse && errParse.name === 'UserDenied') {
                    setErrorMessage('User Denied Request');
                  } else {
                    setErrorMessage(err);
                  }
                  setIsErrorModalOpen(true);
                }).then(() => {
                  localStore.deleteItem(config.localStoreKey.pendingPayment);
                });
              } else {
                // Error getting extension available
                setCheckoutSuccessModalActive(false);
                setError(true);
                setCheckoutLoading(false);
                setErrorMessage('Could not connect to Terra Station Wallet.');
                setIsErrorModalOpen(true);
              }
            }
          }, 1000);
        } else {
          setCheckoutSuccessModalActive(false);
          setError(true);
          setErrorMessage(`Invalid network selected, please change to ${config.lcdClient.network} and try again`);
          setIsErrorModalOpen(true);
          setLoading(false);
          setCheckoutLoading(false);
        }
      }
    }
  };

  const pollForDeposit = (selectedBlockchain, address, userWalletAddress, orderTotal, orderData) => {
    // Repeat with an interval of 10 seconds.
    const timerId = setInterval(async () => {

      if (selectedBlockchain === 'terra') {
        let convertPriceToUst: any = convertCentsToDollarsPrice(orderTotal);
        convertPriceToUst = convertPriceToUst.replace('.', '');
        if (convertPriceToUst) {
          convertPriceToUst = parseInt(convertPriceToUst) * 10000;
        }

        const transactions = await getTerraTransactions(address);
        let previousAmountTxHashes: string[] = [];
        if (auth && (auth as IAuth).userId) {
          const previousAmountTransactions = await getTransactionByAmount(auth.userId, orderTotal);
          if (previousAmountTransactions && previousAmountTransactions.data && previousAmountTransactions.data.previousAmountTxHashes ) {
            previousAmountTxHashes = previousAmountTransactions.data.previousAmountTxHashes;
          }
        }
        
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
                  if (from_address === userWalletAddress && to_address === config.lcdClient.ustAddress) {
                    for (const a of amount) {
                      const amt = parseInt(a.amount);
                      if (amt === convertPriceToUst && !previousAmountTxHashes.includes(txhash)) {
                        // Clear interval.
                        clearInterval(timerId);
                        const orderResp = await createOrder({
                          ...orderData,
                          terraStationTx: t,
                          ustPriceTotal: convertPriceToUst
                        });
                        if (orderResp && orderResp.success) {
                          setTimeout( async() => {
                            if (orderResp.data && orderResp.data.orderId) {
                              setOrderId(orderResp.data.orderId);
                              handleCheckoutSuccess(orderResp.data.orderId);
                            }
                          }, 5000);
                        } else {
                          setCheckoutSuccessModalActive(false);
                          setError(true);
                          setCheckoutLoading(false);
                          setErrorMessage('An error occurred generating your order. Please contact support if you require further assistance.');
                          setIsErrorModalOpen(true);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else if (selectedBlockchain === 'solana') {
        let convertPrice: any = convertCentsToDollarsPrice(orderTotal);
        convertPrice = convertPrice.replace('.', '');

        if (convertPrice) {
          convertPrice = parseInt(convertPrice) * 10000;
        }

        const transactions = await getSolanaTransactions(address);
        // NOTE: for some reason, the solscan API returns `succcess` with 3 c's
        if (transactions && transactions.succcess) {
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
                          handleCheckoutSuccess(orderResp.data.orderId);
                        }
                      }, 5000);
                    } else {
                      setCheckoutSuccessModalActive(false);
                      setError(true);
                      setCheckoutLoading(false);
                      setErrorMessage('An error occurred generating your order. Please contact support if you require further assistance.');
                      setIsErrorModalOpen(true);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }, 10 * 1000);

    // Stop polling after 20 minutes.
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
          <button type='button' title='Close'>
            <Icon name='ModalClose' />
          </button>
        </CheckoutHeaderButtons>
      </CheckoutHeader>

      {/* Price */}
      <StepOne 
        cartPriceTotal={cartPriceTotal}
        step={step}
        completedSteps={completedSteps}
      />
      
      {/* Blockchain + Wallet */}
      <StepTwo
        step={step} 
        completedSteps={completedSteps} 
        selectedBlockchain={selectedBlockchain} 
        handleSetSelectedBlockchain={handleSetSelectedBlockchain} 
        handleEditStep={handleEditStep} 
        completeStep={completeStep}
        paymentMethod={paymentMethod}
        selectedWallet={selectedWallet}
        walletAddress={walletAddress}
        userUstBalance={userUstBalance}
        phantomUSDCBalance={phantomUSDCBalance}
        phantomWalletAddress={phantomWalletAddress}
        solflareUSDCBalance={solflareUSDCBalance}
        solflareWalletAddress={solflareWalletAddress}
        userTerraWalletAddress={userTerraWalletAddress}
        errors={errors}
        checkWallet={checkWallet}
        checkTerraBalance={checkTerraBalance}
        checkSolanaBalance={checkSolanaBalance}
        handleSetSelectedWallet={handleSetSelectedWallet}
        setPaymentMethod={setPaymentMethod}
        setUserTerraWalletAddress={setUserTerraWalletAddress}
        terraWalletLoading={terraWalletLoading}
        getClassNameForField={getClassNameForField}
        disconnectWallet={onDisconnectWallet}
      />

      {/* Checkout */}
      <StepThree
        step={step}
        selectedBlockchain={selectedBlockchain}
        paymentMethod={paymentMethod}
        checkoutLoading={checkoutLoading}
        cartPriceTotal={cartPriceTotal}
        transactionAddress={transactionAddress}
        config={config}
        convertCentsToDollarsPrice={convertCentsToDollarsPrice}
        handleCheckout={handleCheckout} 
        checkoutDisabled={checkoutDisabled}
      />
    
    </CartContainerDetail>
  );
}

export default CheckoutForm;
