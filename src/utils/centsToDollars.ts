export const centsToDollars = (sum: number) => {
  let priceSum = sum.toString();
  const cents = priceSum.substring(priceSum.length - 2, priceSum.length);
  const dollars = priceSum.substring(0, priceSum.length - 2);

  return `${dollars ? dollars : '0'}.${('0' + cents).slice(-2)}`;
}