import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { colors } from "./src/styles/variables";
import CurrentQuote from "./src/components/current-quote";
import Graphic from "./src/components/graphic";
import ListCards from "./src/components/list-cards";
import { useEffect, useState } from "react";
import { QuoteHistory } from "./src/@types/quote-history";
import SelectCoins from "./src/components/select-coins";
import Loading from "./src/components/loading";
import { CoinData } from "./src/@types/coin-data";
import { getInfoCoin } from "./src/utils/get-info-coin";

export default function App() {
  const [quoteHistory, setQuoteHistory] = useState<QuoteHistory[]>([]);
  const [coinId, setCoinId] = useState("bitcoin");
  const [lastUpdate, setLastUpdate] = useState(0);
  const [coinsData, setCoinsData] = useState<CoinData[]>([]);

  async function getCoinsData() {
    try {
      const response = await fetch(`https://api.coincap.io/v2/assets`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
        },
      });
      const data = await response.json();
      const quotes = data.data;

      setCoinsData(quotes);
    } catch (error) {
      console.log(error);
    }
  }

  async function getQuotes() {
    try {
      const response = await fetch(
        `https://api.coincap.io/v2/assets/${coinId}/history?interval=d1`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
          },
        }
      );
      const data = await response.json();
      const quotes = data.data.reverse();

      setQuoteHistory(quotes);
      setLastUpdate(data.timestamp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCoinsData();
  }, []);

  useEffect(() => {
    getQuotes();
  }, [coinId]);

  const lastQuote = quoteHistory[0];

  if (quoteHistory.length === 0 || coinsData.length === 0) {
    return <Loading />;
  }

  const coinInfo = getInfoCoin(coinId, coinsData);

  return (
    <SafeAreaView style={styles.container}>
      <SelectCoins
        lastUpdate={lastUpdate}
        coinId={coinId}
        setCoinId={setCoinId}
        coinsData={coinsData}
      />
      <CurrentQuote lastQuote={lastQuote} coinInfo={coinInfo} />
      <Graphic quoteHistory={quoteHistory} />
      <ListCards quoteHistory={quoteHistory} />
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blueDark,
  },
});
