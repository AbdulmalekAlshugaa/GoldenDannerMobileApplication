import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppText from "./AppText";

function ExChangeMoney({ title, time, date, price, percent, image }) {
  return (
    <View style={styles.cards}>
      <View style={styles.title}>
        <AppText passText={title} />
      </View>
      <View style={styles.rowElements}>
        <Text>{time}</Text>
        <Text>{date}</Text>
      </View>
      <View style={styles.rowElements}>
        <View>
          <View style={styles.pageIcon}></View>
          <View style={styles.pageIcon}></View>
        </View>
        <Text style={styles.textPrice}>{price}</Text>
        <View style={styles.counteryFlage}></View>
      </View>
      <Text style={styles.textPicentaage}>{percent}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  cards: {
    height: 180,
    backgroundColor: "#DAA520",
    borderRadius: 5,
    margin: 10,
    padding: 10,
    marginVertical: 10,
  },
  title: {
    alignItems: "center",
  },
  rowElements: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  pageIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "yellow",
    marginStart: 10,
    marginEnd: 20,
  },
  counteryFlage: {
    height: 80,
    width: 80,
    borderRadius: 15,
    backgroundColor: "yellow",
    marginStart: 10,
    marginEnd: 20,
  },
  textPrice: {
    lineHeight: 22,
    fontSize: 20,
    alignSelf: "center",
  },
  textPicentaage: {
    lineHeight: 22,

    alignSelf: "center",
  },
});

export default ExChangeMoney;
