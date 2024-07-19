import { StyleSheet, StatusBar, SafeAreaView, View, Text } from "react-native";
import { colors } from "./src/styles/variables";
import CurrentQuote from "./src/components/current-quote";
import Graphic from "./src/components/graphic";
import ListCards from "./src/components/list-cards";
import { useEffect, useState } from "react";
import { QuoteHistory } from "./src/@types/quote-history";

export default function App() {
  const [quoteHistory, setQuoteHistory] = useState<QuoteHistory[]>([]);

  async function getQuotes() {
    try {
      const response = await fetch(
        `https://api.coincap.io/v2/assets/bitcoin/history?interval=d1`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer c5ec3078-40a8-406a-b090-0db1071cf07e`,
          },
        }
      );
      const data = await response.json();
      const quotes = data.data.reverse();
      setQuoteHistory(quotes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getQuotes();
  }, []);

  const lastQuote = quoteHistory[0];

  if (quoteHistory.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <CurrentQuote lastQuote={lastQuote} />
      <Graphic />
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
