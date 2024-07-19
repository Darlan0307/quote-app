export const formatDateQuote = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp);
  return date.toLocaleDateString();
};
