import { lazy, useContext, Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LocaleContext, LocaleProvider } from './context/LocaleContext';
import { WalletProvider, getChainOptions } from '@terra-money/wallet-provider';
import Layout from './pages/Layout';
import Loader from './components/Loader';
import store from './states';

import UserService from './states/user/updater';

// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';
// import { CaptureConsole } from '@sentry/integrations';

// Lazy Loaded Pages
const CheckoutPage = lazy(() => import('./pages/Checkout'));

const LoadingScreen = ({ locale }) => (
  <LocaleProvider lang={locale}>
    <Layout>
      <Loader />
    </Layout>
  </LocaleProvider>
);

const Services = () => (
  <>
    <UserService />
  </>
);

function App() {
  const { locale } = useContext(LocaleContext);

  const Main = () => (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<LoadingScreen locale={locale} />}>
          <Switch>
            <Route path='/'>
              <CheckoutPage />
            </Route>
          </Switch>
        </Suspense>
      </Router>
      <Services />
    </Provider>
  );

  return <Main />;
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
getChainOptions().then((chainOptions) => {
  render(<WalletProvider {...chainOptions} children={<App />} />, rootElement);
});
