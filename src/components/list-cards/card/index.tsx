import { Text, View } from "react-native";
import { styles } from "./style";
import { FontAwesome5 } from "@expo/vector-icons";
import { QuoteHistory } from "../../../@types/quote-history";
import { formatPriceQuote } from "../../../utils/format-price-quote";
import { formatDateQuote } from "../../../utils/format-date-quote";

type CardProps = {
  item: QuoteHistory;
};

const Card = ({ item }: CardProps) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="coins" size={24} color="black" />
      <Text style={styles.price}>{formatPriceQuote(item.priceUsd)}</Text>
      <Text style={styles.date}>{formatDateQuote(item.time)}</Text>
    </View>
  );
};

export default Card;
