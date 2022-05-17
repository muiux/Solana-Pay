import { useContext, Suspense, useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { LocaleContext, LocaleProvider } from './context/LocaleContext';
import {
  WalletProvider,
  getChainOptions,
  WalletControllerChainOptions,
} from '@terra-money/wallet-provider';
import Loader from './components/Loader';
import store from './states';

import UserService from './states/user/updater';
import WalletService from './states/wallet/updater';

import CheckoutPage from './pages/Checkout-v2';
const PayButton = styled.button``;

interface Props {
  widgetId: number;
  label?: string;
  subtotal?: number;
  tax?: number;
  shippingCost?: number;
  price?: number;
  onClose?: () => void;
  onSuccess?: (data: any) => void;
}

const StablePayButton: React.FC<Props> = ({
  widgetId,
  label = 'Stable Pay',
  subtotal = 0,
  price = 0,
  tax = 0,
  shippingCost = 0,
  onClose,
  // onSuccess,
}) => {
  const { locale } = useContext(LocaleContext);
  const [chainOptions, setChainOptions] = useState<
    WalletControllerChainOptions | undefined
  >(undefined);
  const [openWidget, setOpenWidget] = useState<boolean>(false);

  useEffect(() => {
    getChainOptions().then((options) => setChainOptions(options));
  }, []);

  function Services() {
    return (
      <>
        <UserService />
        <WalletService />
      </>
    );
  }

  function Main() {
    const handleClose = () => {
      setOpenWidget(false);
      onClose && onClose();
    };
    return (
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <LocaleProvider lang={locale}>
            <PayButton onClick={() => setOpenWidget(true)}>{label}</PayButton>
            {openWidget && <CheckoutPage widgetId={widgetId} price={price} subtotal={subtotal} tax={tax} shippingCost={shippingCost} handleClose={handleClose} />}
          </LocaleProvider>
        </Suspense>
        <Services />
      </Provider>
    );
  }

  return chainOptions ? (
    <WalletProvider {...chainOptions} children={<Main />} />
  ) : null;
};

export default StablePayButton;
