import { useEffect, useState } from 'react'
import { formatWalletAddress } from '../../utils/formatWalletAddress'
import {
  ConnectButtonContainer,
  ConnectButtonList,
  ConnectButtonItem,
  ConnectButtonItemInner,
  TerraConnectMenu,
  TerraConnectMenuListViewOnExplorerBtn,
  TerraConnectMenuListDisconnectBtn,
} from './styles'
// import useTranslation from '../../hooks/useTranslation';
// import { strings } from '../../translations/strings';
import { useConnectedWallet } from '@terra-money/wallet-provider'
import config from '../../utils/config'
import { isMobileOrTablet } from '../../utils/deviceDetect'
import { useWalletOverride } from '../../states/user/hooks'

interface Props {
  walletList: string[]
  handleSetSelectedWallet: (w: string) => void
  onWalletDisconnect: () => void
  setTerraWalletAddress?: (v: string) => void
  children?: any
}

const ConnectButton: React.FC<Props> = (props: Props) => {
  const {
    walletList,
    handleSetSelectedWallet,
    onWalletDisconnect,
    setTerraWalletAddress,
  } = props
  const connectedWallet = useConnectedWallet()
  const [menuActive, setMenuActive] = useState(false)

  const { address, balances, resetUser } = useWalletOverride()

  const isTerraInstalled =
    window['terraWallets'] &&
    window['terraWallets'].length > 0 &&
    window['terraWallets'].find(
      (wallet) => wallet.name === 'Terra Station Wallet'
    )
      ? true
      : false

  // TODO: TRANSLATIONS
  // const { t } = useTranslation('MAIN', strings);

  useEffect(() => {
    if (!connectedWallet) {
      setMenuActive(false)
      resetUser()
    } else {
      console.log('Connected!')
      setMenuActive(false)

      if (setTerraWalletAddress)
        setTerraWalletAddress(connectedWallet.terraAddress)
    }

    // eslint-disable-next-line
  }, [connectedWallet])

  const onDisconnect = () => {
    resetUser()
    onWalletDisconnect()
    setMenuActive(false)
  }

  return (
    <ConnectButtonContainer>
      {/* Wallet Connected */}
      {address && (
        <div>
          <span>{formatWalletAddress(address)}</span>
          <span>
            {balances &&
              balances.ust &&
              balances.ust.toFixed(2).toString() + ` UST`}
          </span>
        </div>
      )}

      {/* Need to Connect Wallet */}
      {!address && (
        <ConnectButtonList>
          {/* Terra Wallets */}
          {walletList.includes('TERRA') && (
            <ConnectButtonItem
              onClick={(e) => {
                e.preventDefault()
                handleSetSelectedWallet('TERRA')
              }}
            >
              <ConnectButtonItemInner>
                <img
                  src='https://assets.terra.money/icon/station-extension/icon.png'
                  alt=''
                />
                <span>
                  <h5>Terra Station</h5>
                  <h6>
                    Extension
                    {isTerraInstalled ? (
                      <span>
                        <span>found</span>
                      </span>
                    ) : null}
                  </h6>
                </span>
              </ConnectButtonItemInner>
            </ConnectButtonItem>
          )}
          {walletList.includes('WALLETCONNECT') && (
            <ConnectButtonItem
              onClick={(e) => {
                e.preventDefault()
                handleSetSelectedWallet('WALLETCONNECT')
              }}
            >
              <ConnectButtonItemInner>
                <img
                  alt='Wallet Connect Logo'
                  src='https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/svg/original/walletconnect-logo.svg'
                />
                <span>
                  <h5>Wallet&nbsp;Connect</h5>
                  <h6>
                    Mobile
                    {isMobileOrTablet() ? (
                      <span>
                        - <span>💚</span>
                      </span>
                    ) : null}
                  </h6>
                </span>
              </ConnectButtonItemInner>
            </ConnectButtonItem>
          )}
          {/* Solana Wallets */}
          {walletList.includes('PHANTOM') && (
            <ConnectButtonItem
              onClick={(e) => {
                e.preventDefault()
                handleSetSelectedWallet('PHANTOM')
              }}
            >
              <ConnectButtonItemInner>
                <img
                  alt='Phantom Wallet'
                  src='https://avatars.githubusercontent.com/u/78782331'
                />
                <span>
                  <h5>Phantom Wallet</h5>
                  <h6>Desktop + Mobile</h6>
                </span>
              </ConnectButtonItemInner>
            </ConnectButtonItem>
          )}
          {/* TODO: ADD SOLFLARE */}
          {/* TODO: ADD SOLANA PAY QR CODE https://docs.solanapay.com/core/merchant-integration */}
        </ConnectButtonList>
      )}

      {menuActive && (
        <ConnectButtonMenu
          // @ts-ignore
          address={address}
          onDisconnect={() => onDisconnect()}
        />
      )}
    </ConnectButtonContainer>
  )
}

function ConnectButtonMenu({ address, onDisconnect }) {
  return (
    <TerraConnectMenu className='connected'>
      <TerraConnectMenuListViewOnExplorerBtn
        target='_blank'
        href={`https://finder.terra.money/${config.lcdClient.chainId}/account/${address}`}
      >
        View Wallet
      </TerraConnectMenuListViewOnExplorerBtn>
      <TerraConnectMenuListDisconnectBtn onClick={() => onDisconnect()}>
        Disconnect Wallet
      </TerraConnectMenuListDisconnectBtn>
    </TerraConnectMenu>
  )
}

export default ConnectButton
