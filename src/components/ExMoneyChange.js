import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppText from "./AppText";

function ExChangeMoney({ title, time, date, price, percent, flageImage }) {
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View style={styles.pageIcon}></View>
          <View style={styles.pageIcon}></View>
        </View>
        <Text style={styles.textPrice}>{price}</Text>
        <Image
          source={{
            uri: flageImage,
          }}
          style={styles.counteryFlage}
        />
      </View>
      <Text style={styles.textPicentaage}>{percent}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  cards: {
    height: 180,
    backgroundColor: "#FFFFFF",
    borderRadius: 1,
    marginVertical: 1,
    marginTop: 5,
  },
  title: {
    alignItems: "center",
    marginVertical: 10,
  },
  rowElements: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  pageIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "yellow",
    marginEnd: 10,
  },
  counteryFlage: {
    height: 80,
    width: 80,
    borderRadius: 15,
    backgroundColor: "red",
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
    paddingBottom: 20,
  },
});

export default ExChangeMoney;
