import { Cluster } from "@solana/web3.js"

export type NetworkType = 'solana' | 'terra'

export interface OrgState {
  orgName: string | undefined
  wallets: {
    address: string
    network: Cluster
    chainId?: string
    origin: NetworkType
  }[]
  apiPublicKey: string | undefined
}
