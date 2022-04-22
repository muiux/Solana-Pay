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

interface IStepTwoProps {
  step: number;
  completedSteps: number[];
  selectedBlockchain: string;
  handleSetSelectedBlockchain: (b: string) => void;
  paymentMethod: string;
  selectedWallet: string;
  walletAddress?: string;
  userUstBalance?: number;
  phantomUSDCBalance: number;
  phantomWalletAddress: string;
  solflareUSDCBalance: number;
  solflareWalletAddress: string;
  userTerraWalletAddress: string;
  terraWalletLoading: boolean;
  errors: any;
  checkWallet: () => boolean;
  checkTerraBalance: () => boolean;
  checkSolanaBalance: () => boolean;
  handleSetSelectedWallet: (w: string) => void;
  setPaymentMethod: (v: string) => void;
  setUserTerraWalletAddress: (v: string) => void;
  handleEditStep: (e: any, step: number) => void;
  getClassNameForField: (f: string) => string;
  completeStep: (e: any, step: number) => void;
  disconnectWallet: () => void;
}

const StepTwo = (props: IStepTwoProps) => {
  const {
    step,
    completedSteps,
    selectedBlockchain,
    handleSetSelectedBlockchain,
    selectedWallet,
    walletAddress,
    userUstBalance,
    phantomUSDCBalance,
    phantomWalletAddress,
    solflareUSDCBalance,
    solflareWalletAddress,
    terraWalletLoading,
    checkWallet,
    checkTerraBalance,
    checkSolanaBalance,
    handleSetSelectedWallet,
    setUserTerraWalletAddress,
    handleEditStep,
    completeStep,
    disconnectWallet
  } = props;
  const isPhantomInstalled = window['solana'] && window['solana'].isPhantom;
  const isSolflareInstalled = window['solflare'] && window['solflare'].isSolflare;

  return (
    <CartContainerDetailStep>
      <h2>Select blockchain wallet</h2>
      {step !== 2 && (
        <CartContainerDetailStepInner className='active'>
          <CartContainerDetailStepText className='price blockchain'>
            {selectedBlockchain === 'terra'
              ? <BlockchainLogoContainer>
                  <Icon name='TerraLogo' />
                  <span>Terra</span>
                </BlockchainLogoContainer>
              : selectedBlockchain === 'solana'
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
            <BlockchainOptionsContainer className={selectedBlockchain === 'terra' ? 'active' : ''}>
              <BlockchainContainer>
                <BlockchainRadioContainer>
                  <input
                    type='radio'
                    name='blockchain'
                    checked={selectedBlockchain === 'terra'}
                    onChange={(e) => handleSetSelectedBlockchain('terra')}
                  />
                </BlockchainRadioContainer>
                <BlockchainLogoContainer>
                  <Icon name='TerraLogo' />
                  <span>Terra</span>
                </BlockchainLogoContainer>
              </BlockchainContainer>
              {selectedBlockchain === 'terra' && (
                <BlockchainDetailContainer>
                  <span>Pay with</span>
                  <Icon name='TerraUsdLogo' size='lg' />
                </BlockchainDetailContainer>
              )}
              {selectedBlockchain === 'terra' && (
                <WalletOptionsContainer>                  
                  {!checkWallet()
                    ? (
                        <div>
                          <h4>Connect your Terra wallet</h4>
                          <div style={{ height: 16, display: 'block' }} />
                          <ConnectButton
                            onWalletDisconnect={() => disconnectWallet()}
                            handleSetSelectedWallet={handleSetSelectedWallet}
                            walletList={['TERRA', 'WALLETCONNECT']}
                          />
                        </div>
                      )
                    : !checkTerraBalance()
                      ? <p>Uh oh. It looks like your balance of ${(userUstBalance && userUstBalance > 0) ? userUstBalance?.toFixed(2) : 0} UST is too low to continue. Please add funds and try reloading this page.<br/><br/> <button onClick={disconnectWallet}>Disconnect</button></p>
                      : <WalletSelectedContainer>
                          <WalletSelectedContainerIcon>
                            <img src='https://assets.terra.money/icon/station-extension/icon.png' />
                          </WalletSelectedContainerIcon>
                          <WalletSelectedContainerDetail>
                          {walletAddress && walletAddress !== ''
                            ? <h2>{formatWalletAddress(walletAddress)}</h2>
                            : null
                          }
                          {userUstBalance && userUstBalance !== 0
                            ? <h3>Balance <span>${userUstBalance?.toFixed(2)} UST</span></h3>
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
                </WalletOptionsContainer>
              )}
            </BlockchainOptionsContainer>

            {/* Solana/USDC */}
            <BlockchainOptionsContainer className={selectedBlockchain === 'solana' ? 'active' : ''}>
              <BlockchainContainer>
                <BlockchainRadioContainer>
                  <input
                    type='radio'
                    name='blockchain'
                    checked={selectedBlockchain === 'solana'}
                    onChange={(e) => handleSetSelectedBlockchain('solana')}
                  />
                </BlockchainRadioContainer>
                <BlockchainLogoContainer>
                  <Icon name='SolanaLogo' />
                  <span>Solana</span>
                </BlockchainLogoContainer>
              </BlockchainContainer>
              {selectedBlockchain === 'solana' &&
                <BlockchainDetailContainer>
                  <span>Pay with</span>
                  <Icon name='USDCIcon' />
                </BlockchainDetailContainer>
              }
              {selectedBlockchain === 'solana' &&
                <WalletOptionsContainer>
                  {selectedWallet === 'phantom' ? (
                    <>
                      {phantomUSDCBalance && phantomUSDCBalance !== 0
                        ? <p>${phantomUSDCBalance} USDC</p>
                        : 'N/A'
                      }
                      {phantomWalletAddress && phantomWalletAddress !== ''
                        ? <p>{phantomWalletAddress}</p>
                        : null
                      }
                      {!isPhantomInstalled
                        ? <label>Please install Phantom wallet.</label>
                        : null
                      }
                    </>
                  ) : selectedWallet === 'solflare' ? (
                    <>
                      {solflareUSDCBalance && solflareUSDCBalance !== 0
                        ? <p>${solflareUSDCBalance} USDC</p>
                        : 'N/A'
                      }
                      {solflareWalletAddress && solflareWalletAddress !== ''
                        ? <p>{solflareWalletAddress}</p>
                        : null
                      }
                      {!isSolflareInstalled
                        ? <label>Please install Solflare wallet.</label>
                        : null
                      }
                    </>
                  ) : null}
                  <div>
                    {!checkWallet()
                      ? (
                          <div>
                            <h4>Connect your Solana wallet</h4>
                            <div style={{ height: 16, display: 'block' }} />
                            <ConnectButton
                              onWalletDisconnect={() => disconnectWallet()}
                              handleSetSelectedWallet={handleSetSelectedWallet}
                              walletList={['PHANTOM', 'SOLFLARE']}
                            />
                          </div>
                        )
                      : !checkSolanaBalance()
                        ? <p>Uh oh. It looks like your USDC balance is too low to make this order. Please add funds and try reloading this page.<br/><br/> <button onClick={disconnectWallet}>Disconnect</button></p>
                        : <p>Note: You may disconnect and reconnect Terra Station to change your source of payment. Please refresh the page if doing so.<br/><br/> <button onClick={disconnectWallet}>Disconnect</button></p>
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
