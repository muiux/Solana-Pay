export const getCurrencySign = (region: string) => {
  switch (region) {
    case 'USD':
      return '$';
    case 'CAD':
      return 'CAD$';
    case 'GBP': 
      return '£';
    case 'EUR': 
      return '€';
    case 'MXN':
      return 'MEX$'
    default: 
      return '$';
  }
}