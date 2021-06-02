import React from "react";
import { StyleSheet, Text, View } from "react-native";

function AppText({ passText }) {
  return (
    <View>
      <Text style={styles.text}>{passText}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    lineHeight: 22,
    fontSize: 20,
  },
});

export default AppText;
