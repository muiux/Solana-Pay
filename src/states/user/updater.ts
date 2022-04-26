import { useEffect } from "react";
import { useWallet } from "./hooks";

const Updater = () => {
  const { address, getTerraBalancesByAddress } = useWallet();

  useEffect(() => {
    if (address) {
      getTerraBalancesByAddress(address);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return null;
};

export default Updater;
