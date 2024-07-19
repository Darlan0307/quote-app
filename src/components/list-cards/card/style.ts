import { StyleSheet } from "react-native";
import { colors } from "../../../styles/variables";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {},
  price: {
    color: colors.greenEmerald,
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 13,
    color: "#333",
  },
});
