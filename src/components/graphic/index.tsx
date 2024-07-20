import { View } from "react-native";
import { styles } from "./style";
import GraphicLineChart from "./line";
import { QuoteHistory } from "../../@types/quote-history";

type GraphicProps = {
  quoteHistory: QuoteHistory[];
};

const Graphic = ({ quoteHistory }: GraphicProps) => {
  return (
    <View style={styles.container}>
      <GraphicLineChart quoteHistory={quoteHistory} />
    </View>
  );
};

export default Graphic;
