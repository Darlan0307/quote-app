import { View, Text } from "react-native";
import { styles } from "./style";
import { formatDateQuote } from "../../utils/format-date-quote";
import { Picker } from "@react-native-picker/picker";
import { colors } from "../../styles/variables";
import { CoinData } from "../../@types/coin-data";

type SelectCoinsProps = {
  lastUpdate: number;
  coinId: string;
  setCoinId: (coinId: string) => void;
  coinsData: CoinData[];
};

const SelectCoins = ({
  lastUpdate,
  coinId,
  setCoinId,
  coinsData,
}: SelectCoinsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.lastupdate}>
        <Text style={styles.lastupdateLabel}>Ultima atualização:</Text>
        <Text style={styles.lastupdateDate}>{formatDateQuote(lastUpdate)}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Picker
          selectedValue={coinId}
          onValueChange={(itemValue) => setCoinId(itemValue)}
          style={styles.picker}
        >
          {coinsData.map((coin) => (
            <Picker.Item
              key={coin.id}
              label={coin.name}
              value={coin.id}
              color={colors.blueDark}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default SelectCoins;
