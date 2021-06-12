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
import Card from "../components/Card";
import categories from "../constants/categories";
import helperParam from "../constants/helperParam";
const WIDTH = Dimensions.get("window").width;

function Main({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);

  const whichAPiShouldLoad = (cardId) => {
    if (cardId == 1) {
      navigation.navigate("Cards", { id: cardId });
    } else if (cardId == 2) {
      navigation.navigate("News", { id: cardId });
    } else if (cardId == 3) {
      navigation.navigate("Tripoli", { id: cardId });
    } else if (cardId == 4) {
      navigation.navigate("Benghazi", { id: cardId });
    } else if (cardId == 5) {
      navigation.navigate(helperParam.MoneyExChangeScreen, {
        API: helperParam.globalGolden,
      });
    } else if (cardId == 6) {
      navigation.navigate(helperParam.MoneyExChangeScreen, {
        API: helperParam.ExGloable,
      });
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
        numColumns={2}
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

export default Main;
