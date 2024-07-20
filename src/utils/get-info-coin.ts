import { CoinData } from "../@types/coin-data";

export const getInfoCoin = (coinId: string, coinsData: CoinData[]) => {
  const coin = coinsData.find((coin) => coin.id === coinId);

  return coin;
};
