import { useContext, Suspense, useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { LocaleContext, LocaleProvider } from './context/LocaleContext';
import {
  WalletProvider,
  getChainOptions,
  WalletControllerChainOptions,
} from '@terra-money/wallet-provider';
import Layout from './pages/Layout';
import Loader from './components/Loader';
import store from './states';

import UserService from './states/user/updater';

import CheckoutPage from './pages/Checkout'

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

const App: React.FC<Props> = ({ open, onClose }) => {
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
      </>
    );
  }

  function Main() {
    return (
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <LocaleProvider lang={locale}>
            <Layout>{open && <CheckoutPage handleClose={onClose} />}</Layout>
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

export default App;
