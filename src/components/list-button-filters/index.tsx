import { View } from "react-native";
import { styles } from "./style";
import ItemButtonFilter from "./item-button-filter";

const items = [
  { text: "Atual" },
  { text: "Média" },
  { text: "Semanal" },
  { text: "Mensal" },
  { text: "Anual" },
];

const ListButtonFilters = () => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <ItemButtonFilter key={index} text={item.text} />
      ))}
    </View>
  );
};

export default ListButtonFilters;
