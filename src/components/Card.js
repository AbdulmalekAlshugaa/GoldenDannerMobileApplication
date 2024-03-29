import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";

function Card({ title, image, onPress }) {
  return (
    <TouchableOpacity style={styles.cards} onPress={onPress}>
      <View>
        <Image style={styles.imageStyle} source={image} />
        <Text style={styles.titleText}>{title} </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cards: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    height: 180,
    flex: 1,
    backgroundColor: "#DAA520",
    borderRadius: 30,
    margin: 10,
  },
  titleText: {
    fontWeight: "bold",
    lineHeight: 22,
    fontSize: 20,
    color: COLORS.white,
    alignSelf: "center",
  },
  imageStyle: {
    height: 90,
    width: 90,
    marginVertical: 20,
  },
});

export default Card;
