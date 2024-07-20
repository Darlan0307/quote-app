import { StyleSheet } from "react-native";
import { colors } from "../../styles/variables";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lastupdate: {},
  lastupdateLabel: {
    fontSize: 14,
    color: "#fff",
  },
  lastupdateDate: {
    fontSize: 14,
    color: colors.greenEmerald,
  },
  picker: {
    width: "80%",
    backgroundColor: "#fff",
  },
});
