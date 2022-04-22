export const getCountryFromRetailer = (region: string) => {
  switch (region) {
    case 'amazon':
      return 'US';
    case 'amazon_ca':
      return 'CA';
    case 'amazon_uk': 
      return 'UK';
    case 'amazon_de': 
      return 'DE';
    case 'amazon_mx':
      return 'MX'
    default: 
      return 'US';
  }
}