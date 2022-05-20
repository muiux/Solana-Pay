const config = {
  localStoreKey: {
    user: 'kado.user',
    locale: 'kado.locale',
    auth: 'kado.auth',
    jwt: 'kado.jwt',
    logInStatus: 'kado.login',
    search: 'kado.search',
    results: 'kado.results',
    retailer: 'kado.retailer',
    domain: 'kado.domain',
    region: 'kado.region',
    pendingPayment: 'kado.pendingPayment'
  },
  lcdClient: {
    url: process.env.REACT_APP_LCD_CLIENT_URL || 'https://bombay-fcd.terra.dev',
    ustAddress: 'terra1nfu6k4slynz46jsfy8cgdhg2pj23wwqvssns54',
    ustMemo: '40168AA36004DF894B6C',
    chainId: process.env.REACT_APP_LCD_CLIENT_CHAIN_ID || 'bombay-12',
    network: process.env.REACT_APP_TERRA_NETWORK || 'testnet'
  },
  kadoClient: {
    url: process.env.REACT_APP_KADO_API_URL || 'http://localhost:8090',
    aes: process.env.REACT_APP_KADO_API_AES || 'terra-is-the-answer'
  },
  primeTrustApi: {
    url: process.env.REACT_APP_PRIME_TRUST_URL || 'https://sandbox.primetrust.com'
  },
  landing: {
    url: process.env.REACT_APP_LANDING_URL || 'http://localhost:3001'
  },
  protect: {
    password: process.env.PROTECT_PASSWORD || '55AB7EF6410F2B33BE7225AF93742DCCAE71FF13B9A00ADE5AF6FEA7F2FFEF9FFFCAA28FEAE6F8DF6EF84265E18821DE46F21BCC3728AF58694D3D3469204B64'
  },
  solana: {
    url: process.env.REACT_APP_SOLANA_CLIENT_URL || 'https://api.solscan.io',
    // usdcAddress: process.env.REACT_APP_SOLANA_USDC_ADDRESS || 'CpMah17kQEL2wqyMKt3mZBdTnZbkbfx4nqmQMFDP5vwp', // Testnet USDC
    usdcAddress: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', // Mainnet USDC
    // network: process.env.REACT_APP_SOLANA_NETWORK || 'testnet' // Set to 'mainnet-beta' for production, 'testnet' for test env
    network: 'mainnet-beta'
  },
  conversion: {
    currencyApiKey: process.env.REACT_APP_CURR_CONV_API_KEY || '58ef5a696dc945898e25ae47040212b5'
  },
  global: {
    environment: process.env.REACT_APP_ENV || 'local'
  }
};

export default config;
