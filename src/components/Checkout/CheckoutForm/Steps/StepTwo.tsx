import Icon from '../../../Icon';
import { BlueButton } from '../../../Global/variables';
import {
  CartContainerDetailStep,
  CartContainerDetailStepInner,
  CartContainerDetailStepText,
  CartContainerDetailEditButton,
  CartContainerDetailStepButtonContainer,
  BlockchainContainer,
  BlockchainRadioContainer,
  BlockchainLogoContainer,
  BlockchainDetailContainer,
  BlockchainOptionsContainer,
  WalletOptionsContainer,
  WalletSelectedContainer,
  WalletSelectedContainerIcon,
  WalletSelectedContainerDetail,
  WalletSelectedContainerButtons
} from '../styles';
import ConnectButton from '../../../ConnectButton';
import { formatWalletAddress } from '../../../../utils/formatWalletAddress';
import { PaymentOptions } from '../types';

interface IStepTwoProps {
  step: number;
  completedSteps: number[];
  blockchain: string;
  handleSetBlockchain: (blockchain: string) => void;
  paymentMethod: string;
  selectedWallet: string;
  terraWalletAddress: string;
  setTerraWalletAddress: (address: string) => void;
  terraWalletLoading: boolean;
  ustBalance?: number;

  solanaWalletAddress?: string;
  solanaUsdcBalance: number;
  solanaWalletLoading: boolean;
  
  checkWallet: () => boolean;
  checkTerraBalance: () => boolean;
  checkSolanaBalance: () => boolean;
  handleSetSelectedWallet: (w: string) => void;
  setPaymentMethod: (v: PaymentOptions) => void;
  handleEditStep: (e: any, step: number) => void;
  completeStep: (e: any, step: number) => void;
  disconnectWallet: () => void;
}

const StepTwo = (props: IStepTwoProps) => {
  const {
    step,
    completedSteps,
    blockchain,
    handleSetBlockchain,
    selectedWallet,
    terraWalletAddress,
    setTerraWalletAddress,
    ustBalance,
    terraWalletLoading,

    solanaUsdcBalance,
    solanaWalletAddress,
    // solanaWalletLoading,
    
    checkWallet,
    checkTerraBalance,
    checkSolanaBalance,
    handleSetSelectedWallet,
    
    handleEditStep,
    completeStep,
    disconnectWallet
  } = props;
  const isPhantomInstalled = window['solana'] && window['solana'].isPhantom;
  const isSolflareInstalled = window['solflare'] && window['solflare'].isSolflare;

  return (
    <CartContainerDetailStep>
      <h2>Select Blockchain Wallet</h2>
      {step !== 2 && (
        <CartContainerDetailStepInner className='active'>
          <CartContainerDetailStepText className='price blockchain'>
            {blockchain === 'terra'
              ? <BlockchainLogoContainer>
                  <Icon name='TerraLogo' />
                  <span>Terra</span>
                </BlockchainLogoContainer>
              : blockchain === 'solana'
                ? <BlockchainLogoContainer>
                    <Icon name='SolanaLogo' />
                    <span>Solana</span>
                  </BlockchainLogoContainer>
                : null
            }
            {completedSteps.includes(2) && (
              <CartContainerDetailEditButton
                onClick={(e) => handleEditStep(e, 2)}
              >
                Edit
              </CartContainerDetailEditButton>
            )}
            {completedSteps.includes(2) && <Icon name='CheckmarkIcon' />}
          </CartContainerDetailStepText>
        </CartContainerDetailStepInner>
      )}
      {step === 2 && (
        <CartContainerDetailStepInner className={step === 2 ? 'active' : ''}>
          <CartContainerDetailStepText>
            {/* Terra/UST */}
            <BlockchainOptionsContainer className={blockchain === 'terra' ? 'active' : ''}>
              <BlockchainContainer>
                <BlockchainRadioContainer>
                  <input
                    type='radio'
                    name='blockchain'
                    checked={blockchain === 'terra'}
                    onChange={() => handleSetBlockchain('terra')}
                  />
                </BlockchainRadioContainer>
                <BlockchainLogoContainer>
                  <Icon name='TerraLogo' />
                  <span>Terra</span>
                </BlockchainLogoContainer>
              </BlockchainContainer>
              {blockchain === 'terra' && (
                <BlockchainDetailContainer>
                  <span>Pay with</span>
                  <Icon name='TerraUsdLogo' size='lg' />
                </BlockchainDetailContainer>
              )}
              {blockchain === 'terra' && (
                <WalletOptionsContainer>                  
                  {!checkWallet()
                    ? (
                        <div>
                          <h4>Connect your Terra Wallet</h4>
                          <div style={{ height: 16, display: 'block' }} />
                          <ConnectButton
                            onWalletDisconnect={() => disconnectWallet()}
                            handleSetSelectedWallet={handleSetSelectedWallet}
                            setTerraWalletAddress={setTerraWalletAddress}
                            walletList={['TERRA', 'WALLETCONNECT']}
                          />
                        </div>
                      )
                    : !terraWalletLoading
                      ? !checkTerraBalance()
                        ? <p>Uh oh. It looks like your balance of ${(ustBalance && ustBalance > 0) ? ustBalance?.toFixed(2) : 0} UST is too low to continue. Please add funds and try reloading this page.<br/><br/> <button onClick={disconnectWallet}>Disconnect</button></p>
                        : <WalletSelectedContainer>
                            <WalletSelectedContainerIcon>
                              <img src='https://assets.terra.money/icon/station-extension/icon.png' alt='Terra Station' />
                            </WalletSelectedContainerIcon>
                            <WalletSelectedContainerDetail>
                            {terraWalletAddress && terraWalletAddress !== ''
                              ? <h2>{formatWalletAddress(terraWalletAddress)}</h2>
                              : null
                            }
                            {ustBalance && ustBalance !== 0
                              ? <h3>Balance <span>${ustBalance?.toFixed(2)} UST</span></h3>
                              : null
                            }
                            </WalletSelectedContainerDetail>
                            <WalletSelectedContainerButtons>
                              <button type='reset' onClick={disconnectWallet} title='Disconnect Wallet'>
                                <Icon name='LinkOutIcon' />
                              </button>
                            </WalletSelectedContainerButtons>
                          </WalletSelectedContainer>
                      : <p>Loading..</p>
                    }
                </WalletOptionsContainer>
              )}
            </BlockchainOptionsContainer>

            {/* Solana/USDC */}
            <BlockchainOptionsContainer className={blockchain === 'solana' ? 'active' : ''}>
              <BlockchainContainer>
                <BlockchainRadioContainer>
                  <input
                    type='radio'
                    name='blockchain'
                    checked={blockchain === 'solana'}
                    onChange={() => handleSetBlockchain('solana')}
                  />
                </BlockchainRadioContainer>
                <BlockchainLogoContainer>
                  <Icon name='SolanaLogo' />
                  <span>Solana</span>
                </BlockchainLogoContainer>
              </BlockchainContainer>
              {blockchain === 'solana' &&
                <BlockchainDetailContainer>
                  <span>Pay with</span>
                  <Icon name='USDCIcon' />
                </BlockchainDetailContainer>
              }
              {blockchain === 'solana' &&
                <WalletOptionsContainer>
                  {selectedWallet === 'phantom' && !isPhantomInstalled
                    ? <label>Please install Phantom wallet.</label>
                    : null
                  }
                  {selectedWallet === 'solflare' && !isSolflareInstalled
                    ? <label>Please install Solflare wallet.</label>
                    : null
                  }
                  <div>
                    {!checkWallet()
                      ? <div>
                          <h4>Connect your Solana Wallet</h4>
                          <div style={{ height: 16, display: 'block' }} />
                          <ConnectButton
                            onWalletDisconnect={() => disconnectWallet()}
                            handleSetSelectedWallet={handleSetSelectedWallet}
                            walletList={['PHANTOM', 'SOLFLARE']}
                          />
                        </div>
                      : !checkSolanaBalance()
                        ? <p>Uh oh. It looks like your USDC balance is too low to make this order. Please add funds and try reloading this page.<br/><br/> <button onClick={disconnectWallet}>Disconnect</button></p>
                        : <WalletSelectedContainer>
                            <WalletSelectedContainerIcon>
                              <img src='https://avatars.githubusercontent.com/u/78782331' alt='Phantom Wallet' />
                            </WalletSelectedContainerIcon>
                            <WalletSelectedContainerDetail>
                            {solanaWalletAddress && solanaWalletAddress !== ''
                              ? <h2>{formatWalletAddress(solanaWalletAddress)}</h2>
                              : null
                            }
                            {solanaUsdcBalance && solanaUsdcBalance !== 0
                              ? <h3>Balance <span>${solanaUsdcBalance?.toFixed(2)} USDC</span></h3>
                              : null
                            }
                            </WalletSelectedContainerDetail>
                            <WalletSelectedContainerButtons>
                              <button type='reset' onClick={disconnectWallet} title='Disconnect Wallet'>
                                <Icon name='LinkOutIcon' />
                              </button>
                            </WalletSelectedContainerButtons>
                          </WalletSelectedContainer>
                      }
                  </div>
                </WalletOptionsContainer>
              }
            </BlockchainOptionsContainer>
          </CartContainerDetailStepText>
          <CartContainerDetailStepButtonContainer>
            <BlueButton
              disabled={!checkWallet()}
              onClick={(e) => completeStep(e, 2)}
            >
              Continue
            </BlueButton>
          </CartContainerDetailStepButtonContainer>
        </CartContainerDetailStepInner>
      )}
    </CartContainerDetailStep>
  );
};

export default StepTwo;
