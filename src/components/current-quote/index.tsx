import { Text, View } from "react-native";
import { styles } from "./style";

const CurrentQuote = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textPrimary}>$123.45</Text>
      <Text style={styles.textSecundary}>Cotação Atual</Text>
    </View>
  );
};

export default CurrentQuote;
