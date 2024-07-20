import { StyleSheet } from "react-native";
import { colors } from "../../styles/variables";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    marginHorizontal: "auto",
    position: "relative",
  },
  textPrimary: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  textSecundary: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  RankContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    position: "absolute",
    top: "30%",
    left: -50,
  },
  Rank: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.greenEmerald,
    textAlign: "center",
  },
  btnLink: {
    position: "absolute",
    top: 0,
    right: -30,
  },
});
