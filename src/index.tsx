import { render } from 'react-dom';
import App from './App';

// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';
// import { CaptureConsole } from '@sentry/integrations';

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

const rootElement = document.getElementById('kado-stable-pay-widget');
rootElement && render(<App open={true} onClose={() => {}} />, rootElement);

export default App;
