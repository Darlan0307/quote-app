import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { colors } from "./src/styles/variables";
import CurrentQuote from "./src/components/current-quote";
import Graphic from "./src/components/graphic";
import ListButtonFilters from "./src/components/list-button-filters";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CurrentQuote />
      <Graphic />
      <ListButtonFilters />
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
