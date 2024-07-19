import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type Props = {
  text: string;
};

const ItemButtonFilter = ({ text }: Props) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ItemButtonFilter;
