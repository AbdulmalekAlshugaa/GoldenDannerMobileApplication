// Tripoil main page
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import Card from "../components/VerticalCard";
import categories from "../constants/BenghaziCategories";
import helperParam from "../constants/helperParam";
const WIDTH = Dimensions.get("window").width;

function Tripoli({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);

  const whichAPiShouldLoad = (cardId) => {
    if (cardId == 1) {
      navigation.navigate(helperParam.MoneyExChangeScreen, {
        API: helperParam.BenExMoney,
      });
    } else if (cardId == 2) {
      navigation.navigate(helperParam.MoneyExChangeScreen, {
        API: helperParam.BenGolden,
      });
    } else if (cardId == 3) {
      navigation.navigate(helperParam.MoneyExChangeScreen, {
        API: helperParam.BenTransfer,
      });
    } else if (cardId == 4) {
      console.log("under developmet");
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
          <Text style={styles.headerText}>الدينار الذهبي</Text>
          <View style={styles.iconsContaner}>
            <View style={styles.blackIcon}></View>
            <View style={styles.blackIcon}></View>
            <View style={styles.blackIcon}></View>
          </View>
        </View>

        <Image
          style={styles.appIcon}
          source={require("../../assets/icon1.jpeg")}
        />
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
    marginEnd: 5,
    marginStart: 5,
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

export default Tripoli;
