import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { colors } from "../../../styles/variables";
import { QuoteHistory } from "../../../@types/quote-history";
import { formatDateQuote } from "../../../utils/format-date-quote";
import { formatPriceQuote } from "../../../utils/format-price-quote";

type GraphicLineChartProps = {
  quoteHistory: QuoteHistory[];
};

const GraphicLineChart = ({ quoteHistory }: GraphicLineChartProps) => {
  let slicedQuoteHistory = [...quoteHistory];

  if (quoteHistory.length > 10) {
    slicedQuoteHistory = slicedQuoteHistory.slice(0, 7);
  }

  return (
    <View>
      <LineChart
        data={{
          labels: slicedQuoteHistory
            .reverse()
            .map((quote) => "D" + formatDateQuote(quote.time).substring(0, 2)),
          datasets: [
            {
              data: slicedQuoteHistory.map((quote) => {
                if (
                  Number(quote.priceUsd) > 1000 &&
                  Number(quote.priceUsd) < 10000
                ) {
                  return Number(quote.priceUsd.substring(0, 1));
                } else if (Number(quote.priceUsd) > 10000) {
                  return Number(quote.priceUsd.substring(0, 2));
                }
                return Number(quote.priceUsd);
              }),
            },
          ],
        }}
        width={Dimensions.get("window").width - 20} // from react-native
        height={200}
        yAxisLabel="$"
        yAxisSuffix={Number(slicedQuoteHistory[0].priceUsd) > 1000 ? "k" : ""}
        withVerticalLines={false}
        chartConfig={{
          backgroundColor: colors.blueLight,
          backgroundGradientFrom: colors.blueDark,
          backgroundGradientTo: colors.blueLight,
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: colors.greenEmerald,
          },
        }}
        bezier
      />
    </View>
  );
};

export default GraphicLineChart;
