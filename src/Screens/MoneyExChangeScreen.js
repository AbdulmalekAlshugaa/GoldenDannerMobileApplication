import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "../components/AppText";
import ExChangeMoney from "../components/ExMoneyChange";
import listingCards from "../api/listingCards";
import Screen from "../components/Screen";
const WIDTH = Dimensions.get("window").width;

function MoneyExChange({ route }) {
  const [exChangeListings, setExChangeListings] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const loadExchnageMoney = async () => {
    const response = await listingCards.getCardListings();

    setExChangeListings(response.data.result);
  };
  useEffect(() => {
    loadExchnageMoney();
  }, []);
  const renderItem = ({ item }) => (
    <ExChangeMoney
      title={item.title}
      time={item.time}
      date={item.date}
      price={item.price}
      percent={"(" + item.percent + ")"}
      flageImage={item.Image}
    />
  );
  return (
    <Screen style={styles.container}>
      <View>
        <View style={styles.title}>
          <AppText passText="Ex Money" />
        </View>
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 80 }}
        data={exChangeListings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={loadExchnageMoney}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  title: {
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
});

export default MoneyExChange;
