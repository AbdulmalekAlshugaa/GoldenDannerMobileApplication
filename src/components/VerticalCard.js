import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";

function VerticalCards({ title, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cards}>
        <Image style={styles.imageStyle} source={image} />
        <Text style={styles.titleText}>{title} </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cards: {
    marginBottom: 5,
    height: 120,
    backgroundColor: "#DAA520",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.white,
    alignSelf: "center",
  },
  imageStyle: {
    height: 60,
    width: 60,
    margin: 10,
    alignSelf: "center",
  },
});

export default VerticalCards;
