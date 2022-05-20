import { useEffect, useMemo, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Layout from '../Layout';
import Loader from '../../components/Loader';
import Icon from '../../components/Icon';
import { ContainerWrapper } from '../../components/Global/variables';
import { useKadoApi } from '../../utils/apiServices';

import {
  CartLoader,
  CartContainerWrapper,
  CartContainer,
  CloseButton,
  CheckoutHeaderContent,
  CheckoutLabel,
  WalletsContainer,
  CheckoutButton,
} from './styles';
import { Alert } from '../../components/Alert';
import { CheckoutPrice } from '../../components/CheckoutPrice';
import { BlockchainSelect } from '../../components/BlockchainSelect';
import { WalletSelect } from '../../components/WalletSelect';
import { BlockchainType, WalletSelectType } from './types';
import { useWalletOverride } from '../../states/wallet/hooks';
import { useOrgConfig } from '../../states/org/hooks';
import { centsToDollars } from '../../utils/centsToDollars';
import { clusterApiUrl, Connection, PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import config from '../../utils/config';
import { WalletType } from '../../states/wallet/types';

interface Props {
  widgetId: number
  price: number
  tax: number
  shippingCost: number
  subtotal: number
  handleClose: () => void
}

const CheckoutPage: React.FC<Props> = ({ widgetId, price, tax, shippingCost, subtotal, handleClose }) => {
  const [loading, setLoading]                   = useState<boolean>(true);
  const [widgetConfigError, setWidgetConfigError] = useState<any>(false);
  const { getWidgetConfig }                     = useKadoApi()
  const [blockchain, setBlockchain]             = useState<string | undefined>(undefined)
  const { address, walletType, provider, balances, updateWalletType, getBalanceByToken } = useWalletOverride()
  const { updateConfig, getClusterByNetworkName, getToAddressByNetworkName } = useOrgConfig()

  const Blockchains: BlockchainType = useMemo(() =>({
    solana: {
      name: "Solana",
      logo: require("../../assets/img/solana.svg").default,
      payWith: {
        logo: require("../../assets/img/usdc-coin.svg").default,
        denom: "usdc",
      },
      wallets: {
        phantom: {
          type: "phantom",
          name: "Phantom",
          logo: require("../../assets/img/phantom.svg").default,
          isInstalled: !!window['solana'] && !!window['solana'].isPhantom,
          provider: window['solana'],
        },
        solflare: {
          type: "solflare",
          name: "Solflare",
          logo: require("../../assets/img/solflare.svg").default,
          isInstalled: !!window['solflare'] && !!window['solflare'].isSolflare,
          provider: window['solflare'],
        },
      }
    }
  }), [])

  const payWith = useMemo(() => {
    if (!blockchain) {
      return undefined
    }

    if (!Blockchains[blockchain.toLowerCase()]) {
      return undefined
    }

    return Blockchains[blockchain.toLowerCase()].payWith
  }, [Blockchains, blockchain])

  const payWithBalance = useMemo(() => {
    if (payWith) {
      return getBalanceByToken(payWith.denom)
    } else {
      return 0
    }
  }, [payWith, getBalanceByToken])

  const solBalance = useMemo(() => {
    try {
      return getBalanceByToken("sol")
    } catch(e) {
      console.error('Sol balance:', e)
      return 0;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balances])

  const canProcess = useMemo(() => {
    return payWithBalance > 0 && solBalance > 0
  }, [payWithBalance, solBalance])

  const wallets: { [key: string]: WalletSelectType } = useMemo(() => {
    if (!blockchain) {
      return {}
    }

    if (!Blockchains[blockchain.toLowerCase()]) {
      return {}
    }

    return Blockchains[blockchain.toLowerCase()].wallets
  }, [Blockchains, blockchain])

  useEffect(() => {
    if (!blockchain) {
      updateWalletType(undefined)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockchain])
  
  useEffect(() => {
    (async () => {
      if (widgetId) {
        try {
          const response = await getWidgetConfig(widgetId);
          if (response.success) {
            const { data } = response;
            const { widgetConfig } = data;

            updateConfig(widgetConfig)
            setLoading(false)
          } else {
            // eslint-disable-next-line no-throw-literal
            throw 'failed response'              
          }
        } catch (e) {
          console.error('getWidgetConfig from api', e)
          setWidgetConfigError(true)
          setLoading(false)
        }
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widgetId])

  const getSolanaConnection = () => {
    const cluster = getClusterByNetworkName('solana')
    console.log('getSolanaConnection', cluster)
    const connection = new Connection(
      // clusterApiUrl(config.solana.network as Cluster),
      clusterApiUrl(cluster),
      'confirmed',
    );
    return connection;
  };

  function handleBlockchainSelect(bc) {
    if (blockchain) {
      setBlockchain(undefined)
    } else {
      setBlockchain(bc)
    }
  }

  async function handleCheckout() {
    if (!address) {
      return;
    }

    let convertPrice: number | string = centsToDollars(price);
    convertPrice = convertPrice.replace('.', '');
    if (convertPrice) {
      convertPrice = parseInt(convertPrice) * 10000;
    }

    switch (walletType) {
      case WalletType.Phantom:
        {
          const connection = getSolanaConnection();
          const mintPublicKey = new PublicKey(config.solana.usdcAddress);    
          const mintToken = new Token(
            connection,
            mintPublicKey,
            TOKEN_PROGRAM_ID,
            provider
          );

          const solanaPublicKey = new PublicKey(address)

          const fromTokenAccount = await mintToken.getOrCreateAssociatedAccountInfo(
            solanaPublicKey
          );
          const destAddress = getToAddressByNetworkName('solana')
          if (!destAddress) {
            break;
          }
          const destPublicKey = new PublicKey(destAddress)
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

          const transaction = new Transaction().add(...instructions);
          transaction.feePayer = solanaPublicKey;
          const blockhashObj = await connection.getRecentBlockhash();
          transaction.recentBlockhash = blockhashObj.blockhash;

          if (transaction) {
            try {
              const signed = await provider.signTransaction(transaction);
              const signature = await connection.sendRawTransaction(signed.serialize());
              await connection.confirmTransaction(signature);
              
            } catch (error) {
              console.error('error: ', error);
            }
          }
        }
        break;
      default:
        break;
    }
  }

  function renderCloseButton() {
    return (
      <CloseButton type='button' title='Close' onClick={handleClose}>
        <Icon name='ModalClose' />
      </CloseButton>
    )
  }

  function renderHeader() {
    return (
      <CheckoutHeaderContent>
        <h2>Stable Pay</h2>
        <p>Complete purchase with USDC.</p>
      </CheckoutHeaderContent>
    )
  }

  function renderForms () {
    return (
      <>
        <CheckoutPrice price={price} />
        <>
          <CheckoutLabel>Select Blockchain</CheckoutLabel>
          {Object.values(Blockchains).map((bc) => (
            <BlockchainSelect key={bc.name} {...bc} selected={blockchain === bc.name} handleSelect={() => handleBlockchainSelect(bc.name)} />
          ))}
        </>
        {
          blockchain && wallets && (
            <>
                <CheckoutLabel>Connect your {blockchain} Wallet</CheckoutLabel>
                {!address && (
                  <WalletsContainer>
                    {Object.values(wallets).map((wallet) => (
                      <WalletSelect key={wallet.type} {...wallet} payWith={payWith} />
                    ))}
                  </WalletsContainer>
                )}
                {address && (
                  <WalletsContainer>
                    {Object.values(wallets).filter((wallet) => wallet.type === walletType).map((wallet) => (
                      <WalletSelect key={wallet.type} {...wallet} payWith={payWith} />
                    ))}
                  </WalletsContainer>
                )}
            </>
          )
        }
        {address && <CheckoutButton onClick={handleCheckout} disabled={!canProcess}>Proceed payment</CheckoutButton>}
      </>
    )
  }

  return (
    <Layout>
      <CartContainerWrapper>
        <ContainerWrapper>
          
          {loading &&
            <Fade delay={150}>
              <CartContainer>
                <CartLoader>
                  <Loader />
                  <p>Checkout Loading..</p>
                </CartLoader>
              </CartContainer>
            </Fade>
          }

          {!loading &&
            <CartContainer>
              {renderCloseButton()}
              {widgetId && !widgetConfigError && renderHeader()}
              {widgetId && !widgetConfigError && renderForms()}
              {widgetId && widgetConfigError && <Alert />}
            </CartContainer>
          }
        </ContainerWrapper>
      </CartContainerWrapper>
    </Layout>
  )
};

export default CheckoutPage;
