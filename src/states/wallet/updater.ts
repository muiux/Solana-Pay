import { useEffect } from 'react';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { useWalletOverride } from './hooks';
import { WalletType } from './types';
import { useOrgConfig } from '../org/hooks';
import config from '../../utils/config';

const Updater = () => {
  const { address, walletType, provider, updateBalance, updateAddress } = useWalletOverride();
  const { getClusterByNetworkName } = useOrgConfig()

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

  useEffect(() => {
    if (!walletType) {
      updateAddress(undefined)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletType])

  useEffect(() => {
    if (!provider) {
      return () => {}
    }

    provider.on('connect', async (publicKey: PublicKey) => {
      const address = publicKey.toBase58()
      updateAddress(address)
    })
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider])

  useEffect(() => {
    if (!address) {
      updateBalance({})
      return () => {}
    }
    (async() => {
      switch (walletType) {
        case WalletType.Phantom:
          const connection = getSolanaConnection();
          const publicKey = new PublicKey(address);

          const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
            mint: new PublicKey(config.solana.usdcAddress)
          }, 'single'); 
          if (tokenAccounts && tokenAccounts.value && tokenAccounts.value.length > 0) {
            for (let i = 0; i < tokenAccounts.value.length; i += 1) {
              const account = tokenAccounts.value[i].account;
              const parsedInfo = account.data.parsed.info;
              if ((parsedInfo.mint === config.solana.usdcAddress) && parsedInfo.tokenAmount?.uiAmount) {
                updateBalance({
                  usdc: parsedInfo.tokenAmount.uiAmount
                })
              }
            }
          }
          break
        default:
          break
      }
    })()

    return () => {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, walletType])

  return null;
};

export default Updater;
