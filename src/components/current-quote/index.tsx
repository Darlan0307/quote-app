import { Text, View } from "react-native";
import { styles } from "./style";
import { QuoteHistory } from "../../@types/quote-history";
import { formatPriceQuote } from "../../utils/format-price-quote";

type CurrentQuoteProps = {
  lastQuote: QuoteHistory;
};

const CurrentQuote = ({ lastQuote }: CurrentQuoteProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textPrimary}>
        {formatPriceQuote(lastQuote.priceUsd)}
      </Text>
      <Text style={styles.textSecundary}>Cotação Atual</Text>
    </View>
  );
};

export default CurrentQuote;
