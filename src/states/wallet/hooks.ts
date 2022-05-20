import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '..'
import { updateAddressAction, updateBalanceAction, updateProviderAction, updateWalletTypeAction } from './actions'
import { WalletState, WalletType } from './types'

export function useWalletOverride() {
  const dispatch = useDispatch()
  const walletState: WalletState = useSelector((state: AppState) => state.wallet)
  const { address, walletType, balances, network, provider } = walletState

  function updateAddress(address: string | undefined) {
    dispatch(updateAddressAction(address))
  }

  function updateWalletType(walletType: WalletType | undefined) {
    dispatch(updateWalletTypeAction(walletType))
  }

  function updateBalance(balance) {
    dispatch(updateBalanceAction(balance))
  }

  function updateProvider(provider) {
    dispatch(updateProviderAction(provider))
  }

  async function connectProvider(provider) {
    updateProvider(provider)
    await provider.connect();
  }

  const getBalanceByToken = useCallback((denom: string) => {
    try {
      if (!balances[denom.toLowerCase()]) {
        // eslint-disable-next-line no-throw-literal
        throw 'no token amount'
      }
      return balances[denom.toLowerCase()]
    } catch(e) {
      console.error('getBalanceByToken', e)
      return 0
    }
  }, [balances])

  return {
    address,
    walletType,
    balances,
    network,
    provider,
    updateAddress,
    updateWalletType,
    updateBalance,
    updateProvider,
    connectProvider,
    getBalanceByToken,
  }
}
