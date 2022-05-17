import { useContext, Suspense, useState, useEffect } from 'react';
import { Provider } from 'react-redux';
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

interface Props {
  open: boolean;
  widgetId: number;

  subtotal?: number;
  tax?: number;
  shippingCost?: number;
  price?: number;

  onClose: () => void;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

const StablePayWidget: React.FC<Props> = ({
  open,
  widgetId,
  subtotal = 0,
  tax = 0,
  shippingCost = 0,
  price = 0,
  onClose,
}) => {
  const { locale } = useContext(LocaleContext);
  const [chainOptions, setChainOptions] = useState<
    WalletControllerChainOptions | undefined
  >(undefined);

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
    return (
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <LocaleProvider lang={locale}>
            {open && <CheckoutPage price={price} subtotal={subtotal} tax={tax} shippingCost={shippingCost} widgetId={widgetId} handleClose={onClose} />}
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

export default StablePayWidget;
