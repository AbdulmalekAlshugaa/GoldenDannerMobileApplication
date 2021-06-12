import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import ExChangeMoney from "./src/Screens/MoneyExChangeScreen";
import TestingImage from "./src/components/TestingImage";
import StackNav from "./src/Screens/StackAndNiv";
import Main from "./src/Screens/Main";
import AppIntroSlider from "react-native-app-intro-slider";
import Screen from "./src/components/Screen";
import COLORS from "./src/constants/colors";
import AppText from "./src/components/AppText";

const slides = [
  {
    key: 1,
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("./assets/screen1.png"),
  },
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    image: require("./assets/screen2.png"),
  },
  {
    key: 3,
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("./assets/dollars.jpg"),
  },
];

// build a function to render the slider on the UI
function renderItem({ item }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: item.backgroundColor,
        alignItems: "center",
        justifyContent: "space-around",
        paddingBottom: 100,
      }}
    >
      <Text style={styles.introTitleStyle}>{item.title}</Text>
      <Image style={styles.introImageStyle} source={item.image} />
      <Text style={styles.introTextStyle}>{item.text}</Text>
    </View>
  );
}
function nextButton() {
  return (
    <View style={styles.introTitleStyle}>
      <AppText>Next</AppText>
    </View>
  );
}
function doneButton() {
  return (
    <View style={styles.introTitleStyle}>
      <AppText>Done</AppText>
    </View>
  );
}

export default function Slider() {
  const [showRealApp, setShowRealApp] = useState(false);

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      renderNextButton={nextButton}
      renderDoneButton={doneButton}
      onDone={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
    color: "red",
  },
  introImageStyle: {
    width: "100%",
    height: 300,
  },
  introTextStyle: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "black",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
});
