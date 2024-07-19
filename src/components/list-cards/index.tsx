import { FlatList, Text, View } from "react-native";
import { styles } from "./style";
import Card from "./card";
import { QuoteHistory } from "../../@types/quote-history";

type ListCardsProps = {
  quoteHistory: QuoteHistory[];
};

const ListCards = ({ quoteHistory }: ListCardsProps) => {
  let slicedQuoteHistory = [...quoteHistory];

  if (quoteHistory.length > 10) {
    slicedQuoteHistory = slicedQuoteHistory.slice(0, 10);
  }

  return (
    <>
      <Text style={styles.subtitle}> Cotações dos últimos 10 dias</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.container}
        data={slicedQuoteHistory}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.date}
      />
    </>
  );
};

export default ListCards;
