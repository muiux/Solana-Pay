import { querySalesTax } from './apiServices';

export const getSalesTax = async (country: string, props?: { code?: string, province?: string } ) => {
  if (country === 'US' && props && props.code && props.code !== '') {
    const taxJson = await querySalesTax(props.code);

    if (
      taxJson.data &&
      taxJson.data.salesTax &&
      taxJson.data.salesTax.results &&
      taxJson.data.salesTax.results.length > 0
    ) {
      const usaTax = taxJson.data.salesTax.results[0].taxSales;
      return usaTax;
    }
  } else if (country === 'CA') {
    const reqUrl = 'https://raw.githubusercontent.com/valeriansaliou/node-sales-tax/master/res/sales_tax_rates.json';
    let taxRates = await fetch(reqUrl);
    const taxJson = await taxRates.json();

    if (taxJson['CA']) {
      let canadaTax = taxJson['CA'],
          canadaTaxRate = 0;
      canadaTaxRate = canadaTax.rate;

      if (props && props.province && props.province !== '') {
        const province = canadaTax.states[props.province];
        if (province && province.rate) {
          canadaTaxRate += province.rate;
        }
      }

      return canadaTaxRate;
    }
  } else if (country === 'MX') {
    // 16% Mexico Sales Tax Rate
    return 0.16;
  } else if (country === 'UK') {
    // 20% UK Sales Tax Rate
    return 0.2;
  } else if (country === 'DE') {
    // 19% Germany Sales Tax
    return 0.19;
  }
}
