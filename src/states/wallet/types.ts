import { Cluster } from "@solana/web3.js"

export enum WalletType {
  Phantom = 'phantom'
}

export interface WalletState {
  address: string | undefined
  walletType: WalletType | undefined
  balances: {
    [denom: string]: number
  }
  network: Cluster | undefined
  provider: any
}
