import { lazy, useContext, Suspense, useState, useEffect } from 'react';
import { render } from 'react-dom';
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

// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';
// import { CaptureConsole } from '@sentry/integrations';

// Lazy Loaded Pages
const CheckoutPage = lazy(() => import('./pages/Checkout'));

const Services = () => (
  <>
    <UserService />
  </>
);

export default function App() {
  const { locale } = useContext(LocaleContext);
  const [chainOptions, setChainOptions] = useState<
    WalletControllerChainOptions | undefined
  >(undefined);

  useEffect(() => {
    getChainOptions().then((options) => setChainOptions(options));
  }, []);

  function Main() {
    return (
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <LocaleProvider lang={locale}>
            <Layout>
              <CheckoutPage />
            </Layout>
          </LocaleProvider>
        </Suspense>
        <Services />
      </Provider>
    );
  }

  return chainOptions ? (
    <WalletProvider {...chainOptions} children={<Main />} />
  ) : null;
}

// TODO: -- Get Sentry DSN
// Sentry.init({
//   dsn: process.env.REACT_APP_SENTRY_DSN,
//   environment: config.global.environment,
//   integrations: [
//     new Integrations.BrowserTracing(),
//     new CaptureConsole({ levels: ['error'] })
//   ],

//   // We recommend adjusting this value in production, or using tracesSampler
//   // for finer control
//   tracesSampleRate: 1.0,
// });

const rootElement = document.getElementById('root');
render(<App />, rootElement);
