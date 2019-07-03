import { Platform, StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...Platform.select({
      ios: {
        paddingTop: 20 + metrics.baseMargin * 2
      },
      android: {
        paddingTop: metrics.baseMargin * 2
      }
    })
  },
  buttonHistory: {
    marginHorizontal: metrics.baseMargin * 2
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white
  },
  buttonShoppingCart: {
    marginHorizontal: metrics.baseMargin * 2,
    borderRadius: metrics.baseRadius * 10,
    padding: metrics.basePadding * 1.2,
    backgroundColor: colors.secondary
  },
  icon: {
    color: colors.white
  }
});

export default styles;
