export function formatWalletAddress(address: string) {
  const addressStart = address.substring(0, 10);
  const addressEnd = address.substring(address.length - 4);
  return addressStart + '....' + addressEnd;
}