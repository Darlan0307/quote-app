import { Text, View, Linking, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { QuoteHistory } from "../../@types/quote-history";
import { formatPriceQuote } from "../../utils/format-price-quote";
import { CoinData } from "../../@types/coin-data";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "../../styles/variables";

type CurrentQuoteProps = {
  lastQuote: QuoteHistory;
  coinInfo: CoinData | undefined;
};

const CurrentQuote = ({ lastQuote, coinInfo }: CurrentQuoteProps) => {
  if (!coinInfo) {
    return <View />;
  }

  const hanleClick = () => {
    Linking.openURL(coinInfo.explorer);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textPrimary}>
        {formatPriceQuote(lastQuote.priceUsd)}
      </Text>
      <View style={{ position: "relative" }}>
        <Text style={styles.textSecundary}>Cotação do {coinInfo.name}</Text>
        <TouchableOpacity style={styles.btnLink} onPress={hanleClick}>
          <FontAwesome6 name="link" size={20} color={colors.blueLight} />
        </TouchableOpacity>
      </View>
      <View style={styles.RankContainer}>
        <FontAwesome6
          name="ranking-star"
          size={18}
          color={colors.greenEmerald}
        />
        <Text style={styles.Rank}>{coinInfo.rank}</Text>
      </View>
    </View>
  );
};

export default CurrentQuote;
