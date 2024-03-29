import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Card from "../components/Card";
import categories from "../constants/categories";
const WIDTH = Dimensions.get("window").width;

function SecondaryDashboard({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);

  const whichAPiShouldLoad = (cardId) => {
    if (cardId == 1) {
      console.log("I am number one ");
    } else if (cardId == 2) {
      console.log("Hi  Id " + cardId);
    }
    return cardId;
  };

  const renderItem = ({ item }) => (
    <Card
      title={item.title}
      image={item.image}
      onPress={() => whichAPiShouldLoad(item.id)}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.headerText}>Golden Danner</Text>
          <View style={styles.iconsContaner}>
            <View style={styles.blackIcon}></View>
            <View style={styles.blackIcon}></View>
            <View style={styles.blackIcon}></View>
          </View>
        </View>
        <View style={styles.appIcon}></View>
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    margin: 20,
  },
  header: {
    width: "100%",
    height: 120,
    marginTop: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontWeight: "bold",
    lineHeight: 22,
    fontSize: 20,
    marginLeft: 10,
    alignItems: "center",
    alignSelf: "center",
  },
  appIcon: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginStart: 10,
    marginEnd: 20,
  },
  blackIcon: {
    height: 20,
    width: 40,
    borderRadius: 10,
    backgroundColor: "black",
    flexDirection: "row",
    marginEnd: 5,
    marginVertical: 10,
  },
  iconsContaner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SecondaryDashboard;
