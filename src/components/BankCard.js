import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

function Card({ title, image, onPress }) {
  return (
    <TouchableOpacity style={styles.cards} onPress={onPress}>
      <View>
        <Text>{title} </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cards: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 180,
    width: "100%",
    backgroundColor: "#DAA520",
    borderRadius: 30,
    margin: 10,
  },
});

export default Card;
