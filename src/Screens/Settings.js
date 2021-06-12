import { StatusBar } from "expo-status-bar";

import React, { useState } from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import Card from "../components/Card";
import categories from "../constants/categories";
const WIDTH = Dimensions.get("window").width;

function Settings({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Setting Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Settings;
