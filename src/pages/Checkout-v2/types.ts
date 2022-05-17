import { PublicKey, Transaction } from '@solana/web3.js'

type DisplayEncoding = 'utf8' | 'hex'
type PhantomEvent = 'disconnect' | 'connect' | 'accountChanged';
type PhantomRequestMethod =
  | 'connect'
  | 'disconnect'
  | 'signTransaction'
  | 'signAllTransactions'
  | 'signMessage';
  
interface ConnectOpts {
    onlyIfTrusted: boolean;
  }

export interface WalletSelectType {
  type: string
  name: string
  logo: string
  isInstalled: boolean
  provider: any
}

export interface BlockchainType {
  [blockchain: string]: {
    name: string
    logo: string
    payWith: {
      logo: string
      denom: string
    }
    wallets: {
      [wallet: string]: WalletSelectType
    }
  }
}

export interface PhantomProvider {
  isPhantom: boolean;
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}
