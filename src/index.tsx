import React, { lazy, useContext, Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { CaptureConsole } from '@sentry/integrations';
import { LocaleContext, LocaleProvider } from './context/LocaleContext';
import {
  WalletProvider,
  getChainOptions,
} from '@terra-money/wallet-provider';
import Layout from "./pages/Layout"
import Loader from './components/Loader';

// Lazy Loaded Pages
const CheckoutPage = lazy(() => import('./pages/Checkout'));

const LoadingScreen = ({ locale }) => (
  <LocaleProvider lang={locale}>
    <Layout>
      <Loader />
    </Layout>
  </LocaleProvider>
)


function App() {
  const { locale } = useContext(LocaleContext);
  
  const AppContents = () => (
    <Router>
      <Suspense fallback={<LoadingScreen locale={locale} />}>
        <Switch>
          <Route path='/'>
            <CheckoutPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
  

  return (
    <AppContents />
  );
}

// TODO -- Get Sentry DSN
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
  render(
    <WalletProvider
      {...chainOptions}
      children={<App />}
    />
  , rootElement);
});
