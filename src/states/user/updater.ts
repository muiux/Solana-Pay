import { useEffect } from 'react';
import { useWalletOverride } from './hooks';

const Updater = () => {
  const { address, getTerraBalancesByAddress } = useWalletOverride();

  useEffect(() => {
    if (address) {
      getTerraBalancesByAddress(address);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return null;
};

export default Updater;
