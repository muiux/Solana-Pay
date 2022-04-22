import config from './config';
import { UserStore } from "../stores/UserStore";

const kadoApiRequest = async (
  endpoint: string,
  method: string,
  body: object | null = null,
  needsAuth = true,
  contentType: string | null = 'application/json',
) => {
  let headers: HeadersInit = {
    'strict-transport-security': 'max-age=63072000; includeSubdomains; preload',
    'content-security-policy':  "default-src 'none'; img-src 'self'; script-src 'self'; style-src 'self'; object-src 'none'; frame-ancestors 'none'; ancestors 'self ';",
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'DENY',
    'x-xss-protection': '1; mode=block',
  };
  if (needsAuth) {
    const userStore = new UserStore();
    const auth = userStore.getAuth();
    const refreshBuffer = 10; // seconds
    
    // If we're within the buffer time of expiring, refresh to account for any latency that could occur on the backend
    if (auth && auth.exp < (Date.now() / 1000 + refreshBuffer)) {
      try {
        const refreshed = await refreshToken(auth.userId, auth.token.refreshToken, auth.apiKey);
        if (refreshed.success) {
          userStore.setAuth(refreshed.data.token);
          userStore.setIsLoggedIn(true);
        } else {
          userStore.setIsLoggedIn(false);
        }
      } catch (e) {
        userStore.setIsLoggedIn(false);
      }
    }
    
    headers = {
      ...headers,
      'Authorization': `Bearer ${userStore.getJwt()}`,
    };
  }
  if (contentType) {
    headers = {
      ...headers,
      'Content-Type': contentType
    }
  }
  
  const apiResponse = await fetch(`${config.kadoClient.url}${endpoint}`, {
    method,
    body: body && JSON.stringify(body),
    headers
  });
  
  return await apiResponse.json();
}

const getCountry = async () => {
  const countryRes = await fetch('https://get.geojs.io/v1/ip/country.json');
  const country = await countryRes.json();
  return country;
}

const getUusdGas = async () => {
  const apiResponse = await fetch(`https://fcd.terra.dev/v1/txs/gas_prices`, {
    method: 'GET'
  });
  let gas = 2500000;
  const gasPrices = await apiResponse.json();
  if (gasPrices && gasPrices.uusd) {
    gas = parseFloat(gasPrices.uusd) * 2500000;
  }
  return gas;
}

const createUser = async (name: string, email: string, password: string, reCaptchaToken: string) => (
  await kadoApiRequest('/v1/user', 'POST', { name, email, password: btoa(password), reCaptchaToken }, false)
);

export const refreshToken = async (userId: string, refreshToken: string, apiKey: string) => (
  await kadoApiRequest('/v1/user/auth/refresh', 'POST', { userId, refreshToken, apiKey }, false)
);


const submitKycDetails = async (userId: string, requestBody: any) => (
  await kadoApiRequest(`/v1/user/${userId}/kyc/details`, 'POST', requestBody)
)

const submitKycDocuments = async (userId: string, contactId: string, frontIdDocument: File, backIdDocument: File) => {
  const formData = new FormData();
  formData.append('frontIdDocument', frontIdDocument);
  formData.append('backIdDocument', backIdDocument);
  formData.append('contactId', contactId);

  return kadoApiRequest(
    `/v1/user/${userId}/kyc/documents`,
    'POST',
    formData,
    true,
    null
  );
};

const getKycDocumentChecks = async (userId: string) => {
  const resp = await kadoApiRequest(`/v1/user/${userId}/kyc/document-checks`, 'GET');
  if (resp && resp.data && resp.data.length > 0) {
    return resp.data;
  }
  return null;
};

const updateEmail = async (oldEmail: string, newEmail: string) => (
  await kadoApiRequest('/v1/user/email', 'POST', { oldEmail, newEmail})
)

const updatePassword = async (prevPassword: string, newPassword: string, token: string) => (
  await kadoApiRequest(`/v1/user/password`, 'POST', { prevPassword, newPassword, token })
);

const confirmEmail = async (userId: string, emailVerificationHash: string) => (
  await kadoApiRequest('/v1/user/confirmEmail', 'POST', { userId, emailVerificationHash }, false)
)

const resendEmailConfirmation = async (userId: string) => (
  await kadoApiRequest('/v1/user/resendEmailVerification', 'POST', { userId })
)

const getPositionInWaitlist = async (userId: string): Promise<IWaitlistResponse> => (
  await kadoApiRequest(`/v1/waitlist/${userId}`, 'GET')
);

const getTransactionByAmount = async (userId: string, amount: number) => (
  await kadoApiRequest(`/v1/user/${userId}/order/${amount}`, 'GET')
);

interface IWaitlistResponse {
  success: boolean;
  message: string;
  data?: {
    position?: number;
    count?: number;
  };
}

export interface ICreateOrderRequest {
  userId: string;
  retailer: string;
  products: {
    product_id: string;
    quantity: string;
  }[],
  shippingFee: number;
  shippingDetail: {};
  taxFee: number;
  platformFee: number;
  ustPriceTotal?: string;
  ustFeeTotal?: number;
  zincPriceItemTotal: number;
  terraStationTx?: any;
  solanaTx?: any;
  saveShipping: boolean;
  purchaseMethod: string;
  blockchain?: {
    network: string;
    method: string;
    origin: string;
  },
  giftCard?: {
    id: string
  }
  exchangeRate: number;
}

export interface ICreateOrderResponse {
  success: boolean;
  message: string;
  data?: {
    orderId?: string;
    hostedUrl?: string;
  }
}

interface IOrdersResponse {
  success: boolean;
  message: string;
  data?: {
    limit?: number;
    orders?: any;
    sum?: string;
    count?: number;
  }
}

const getWaitlistTotal = async (): Promise<IWaitlistResponse> => (
  await kadoApiRequest('/v1/waitlist', 'GET')
);

const bumpWaitlist = async (userId: string): Promise<IWaitlistResponse> => (
  await kadoApiRequest('/v1/waitlist', 'POST', { userId } )
);

const registerForWaitlist = async (userId: string): Promise<IWaitlistResponse> => (
  await kadoApiRequest(`/v1/waitlist/${userId}`, 'PUT')
);

const getUserSpending24Hours = async (userId: string): Promise<IOrdersResponse> => (
  await kadoApiRequest(`/v1/user/${userId}/order-limit`, 'GET')
);

const getStakingStatus = async (userId: string, walletAddress) => (
  await kadoApiRequest('/v1/user/staking-status', 'POST', { userId, walletAddress })
);

const searchProducts = async (query: string, domain: string) => (
  await kadoApiRequest('/v1/product/search', 'POST', { query, domain }, false)
)

const getProductOffers = async (domain: string) => (
  await kadoApiRequest(`/v1/product/${domain}/offers`, 'POST')
);

const getProductCategories = async () => (
  await kadoApiRequest('/v1/product/categories', 'GET')
);

const getProductCategoryResults = async (categoryId: string) => (
  await kadoApiRequest(`/v1/product/categories/${categoryId}/results`, 'GET')
);

interface IAddToCartData {
  title: string;
  product_id: string;
  image: string;
  price: number;
  region: string;
  retailer: string;
  domain: string;
}

const getCart = async (userId: string) => (
  await kadoApiRequest(`/v1/cart/${userId}`, 'GET')
);

const getCartLength = async (userId: string) => (
  await kadoApiRequest(`/v1/cart/${userId}/count`, 'GET')
);

const getCartOutOfStock = async (userId: string) => (
  await kadoApiRequest(`/v1/cart/${userId}/check-stock`, 'GET')
)

const addToCart = async (userId: string, item: IAddToCartData) => (
  await kadoApiRequest('/v1/cart/add', 'POST', { userId, item })
);

const removeCartItem = async (userId: string, itemId: string) => (
  await kadoApiRequest('/v1/cart/delete', 'POST', { userId, itemId })
);

const updateCartItemQuantity = async (userId: string, itemId: string, quantity: number) => (
  await kadoApiRequest('/v1/cart/update', 'POST', { userId, itemId, quantity })
);

const createTransaction = async (blockchain: string) => (
  await kadoApiRequest('/v1/cart/create-tx', 'POST', { blockchain })
);

const checkTransactionStatus = async (address: string) => (
  await kadoApiRequest(`/v1/cart/tx-status?address=${address}`, 'GET')
);

const getProductDetails = async (query: string, domain: string, retailer: string) => (
  await kadoApiRequest(`/v1/product/domain/${domain}/retailer/${retailer}/details/${query}`, 'GET', null, false)
);

const getOrderDetails = async (userId: string, orderId: string) => (
  await kadoApiRequest(`/v1/order/${userId}/details/${orderId}`, 'GET')
);

const getShippingDetails = async (userId: string) => (
  await kadoApiRequest(`/v1/user/${userId}/shipping`, 'GET')
);

const getGiftcardOrdersWithPagination = async (userId: string, skip: number): Promise<IOrdersResponse> => (
  await kadoApiRequest(`/v1/user/${userId}/orders/giftcard/${skip}`, 'GET')
);

const getProductOrdersWithPagination = async (userId: string, skip: number) => (
  await kadoApiRequest(`/v1/user/${userId}/orders/product/${skip}`, 'POST')
);

const createOrder = async (data: ICreateOrderRequest): Promise<ICreateOrderResponse> => (
  await kadoApiRequest(`/v1/order`, 'POST', data)
);

const getTerraTransactions = async (account: string) => {
  const mantleUrl = config.lcdClient.url;
  const apiResponse = await fetch(`${mantleUrl}/v1/txs?offset=0&limit=100&account=${account}`, {
    method: 'GET'
  });
  const transactions = await apiResponse.json();
  return transactions;
};

const getSolanaTransactions = async (address: string) => {
  const mantleUrl = config.solana.url;
  const apiResponse = await fetch(`${mantleUrl}/account/token/txs?address=${address}`, {
    method: 'GET'
  });
  const transactions = await apiResponse.json();
  return transactions;
};

const currencyConversion = async (amount: number, fromCurrency: string, toCurrency: string): Promise<any> => {
  let query = fromCurrency + '_' + toCurrency;
  const apiResponse = await fetch(`https://api.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=${config.conversion.currencyApiKey}`, {
    method: 'GET'
  });
  const conversion = await apiResponse.json();
  
  if (conversion) {
    let convertedAmount = conversion[query] * amount;
    convertedAmount = Math.round((convertedAmount * 100) / 100);
    return { amount: convertedAmount, rate: conversion[query].toFixed(4)  };
  } 
}

const getPrizeList = async (): Promise<ICreateOrderResponse> => (
  await kadoApiRequest(`/v1/user/prize-list`, 'GET')
);

const getPrizeHistory = async (userId: string): Promise<ICreateOrderResponse> => (
  await kadoApiRequest(`/v1/user/${userId}/prize-history`, 'GET')
);

const getNewPrize = async (userId: string): Promise<ICreateOrderResponse> => (
  await kadoApiRequest(`/v1/user/${userId}/new-prize`, 'GET')
);

const getCurrentPrize = async (userId: string): Promise<ICreateOrderResponse> => (
  await kadoApiRequest(`/v1/user/${userId}/active-prize`, 'GET')
);

const issuePrize = async (prizeId: number, userId: string): Promise<ICreateOrderResponse> => (
  await kadoApiRequest(`/v1/user/${userId}/issue-prize`, 'POST', { userId, prizeId })
);

const getTwitterOAuthRequestToken = async () => (
  await kadoApiRequest('/v1/user/oauth/twitter/request-token', 'POST', { }, false)
);

const getGiftCard = async ( giftcard: string ) => (
  await kadoApiRequest(`/v1/giftcard/${giftcard}`, 'GET')
);

const querySalesTax = async (code: string) => (
  await kadoApiRequest(`/v1/cart/sales-tax?zipcode=${code}`, 'GET')
);

export {
  // PrimeTrust
  getCountry,
  createUser,
  submitKycDetails,
  submitKycDocuments,
  getKycDocumentChecks,

  // Internal
  updatePassword,
  updateEmail,
  confirmEmail,
  resendEmailConfirmation,
  getPositionInWaitlist,
  getWaitlistTotal,
  bumpWaitlist,
  registerForWaitlist,
  getUserSpending24Hours,
  getStakingStatus,
  searchProducts,
  getProductOffers,
  getProductCategories,
  getProductCategoryResults,

  getCart,
  addToCart,
  getProductDetails,
  removeCartItem,
  updateCartItemQuantity,
  createTransaction,
  checkTransactionStatus,
  querySalesTax,

  getOrderDetails,

  getShippingDetails,
  getGiftcardOrdersWithPagination,
  getProductOrdersWithPagination,

  createOrder,
  getUusdGas,
  getCartLength,
  getCartOutOfStock,

  getTransactionByAmount,
  getTerraTransactions,
  getSolanaTransactions,

  getPrizeList,
  getPrizeHistory,
  getNewPrize,
  getCurrentPrize,
  issuePrize,

  // Twitter OAuth
  getTwitterOAuthRequestToken,

  //Giftcards
  getGiftCard,
  currencyConversion,
};
