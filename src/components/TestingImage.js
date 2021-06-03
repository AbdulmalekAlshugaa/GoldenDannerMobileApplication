import React from "react";
import { StyleSheet, View, Image } from "react-native";

function TestingImage({ flagImage }) {
  return (
    <View>
      <Image
        source={{
          uri: flagImage,
        }}
        style={styles.counteryFlage}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  counteryFlage: {
    height: 100,
    width: "100%",
    backgroundColor: "red",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 100,
  },
});

export default TestingImage;
