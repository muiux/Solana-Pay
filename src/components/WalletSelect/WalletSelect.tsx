import React, { useState } from 'react';
import { WalletSelectType } from '../../pages/Checkout-v2/types';
import {
  WalletSelectWrapper,
  WalletTitle,
  Logo,
  WalletHeader,
  WalletBody,
  WalletName,
  SubmitButton,
  Address,
  BalanceInfo,
} from './styles';

import LoadingImg from '../../assets/img/loading.svg';
import { useWalletOverride } from '../../states/wallet/hooks';
import { WalletType } from '../../states/wallet/types';
import { formatWalletAddress } from '../../utils/formatWalletAddress';
import { formatCurrency } from '../../utils/format';

interface Props extends WalletSelectType {
  payWith: {
    logo: string
    denom: string
  } | undefined
}

const WalletSelect: React.FC<Props> = ({
  type,
  provider,
  name,
  logo,
  isInstalled,
  payWith,
}): JSX.Element => {
  const [connecting, setConnecting] = useState(false);
  const { address, connectProvider, updateWalletType, getBalanceByToken } = useWalletOverride();
  
  async function handleConnect() {
    updateWalletType(type as WalletType);

    setConnecting(true);
    try {
      await connectProvider(provider)
    } catch (e) {
      console.error('connecting to wallet', e)
    } finally {
      setConnecting(false);
    }
  }

  function handleChange() {
    updateWalletType(undefined)
  }

  return (
    <WalletSelectWrapper>
      <WalletHeader>
        <WalletTitle>
          <Logo src={logo} alt='' />
          <WalletName>{name}</WalletName>
        </WalletTitle>
        {!address && connecting && (
          <SubmitButton isActive={isInstalled}>
            <img src={LoadingImg} alt='' />
          </SubmitButton>
        )}
        {!address && !connecting && isInstalled && (
          <SubmitButton onClick={handleConnect} isActive={isInstalled}>
            Connect
          </SubmitButton>
        )}
        {!address && !connecting && !isInstalled && (
          <SubmitButton isActive={isInstalled}>
            Install
          </SubmitButton>
        )}
        {address && (
          <SubmitButton onClick={handleChange} isActive={false}>
            Change
          </SubmitButton>
        )}
      </WalletHeader>
      {address && (
        <WalletBody>
          <Address>
            {formatWalletAddress(address)}
          </Address>
          {payWith && (
            <BalanceInfo>
              <span className='balance'>Balance</span>
              <img className='icon' src={payWith.logo} alt="" />
              <span className='amount'>{formatCurrency(getBalanceByToken(payWith.denom))} {payWith.denom.toUpperCase()}</span>
            </BalanceInfo>
          )}
        </WalletBody>
      )}
    </WalletSelectWrapper>
  );
};

export default WalletSelect;
