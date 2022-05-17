import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '..'
import { updateConfigAction } from './actions'
import { OrgState } from './types'

export function useOrgConfig() {
  const dispatch = useDispatch()
  const orgState: OrgState = useSelector((state: AppState) => state.org)
  const { wallets, orgName, apiPublicKey } = orgState

  function updateConfig(data: OrgState) {
    dispatch(updateConfigAction(data))
  }

  function getToAddressByNetworkName (origin: string) {
    if (wallets.length <= 0) {
      return undefined
    }
    const find = wallets.find((wallet) => wallet.origin === origin)
    if (!find) {
      return undefined
    }
    return find.address
  }

  function getClusterByNetworkName (origin: string) {
    if (wallets.length <= 0) {
      return undefined
    }
    const find = wallets.find((wallet) => wallet.origin === origin)
    if (!find) {
      return undefined
    }
    return find.network
  }

  return {
    orgName,
    apiPublicKey,
    getToAddressByNetworkName,
    getClusterByNetworkName,
    updateConfig,
  }
}
