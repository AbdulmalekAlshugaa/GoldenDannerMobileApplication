import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  SafeAreaView,
} from "react-native";
import AppText from "../components/AppText";
import ExChangeMoney from "../components/ExMoneyChange";
import listingCards from "../api/listingCards";
const WIDTH = Dimensions.get("window").width;

function MoneyExChange({ navigation }) {
  const [exChangeListings, setExChangeListings] = useState([]);

  const loadExchnageMoney = async () => {
    const response = await listingCards.getCardListings();
    console.log(response.data);
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
      percent={item.percent}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.title}>
          <AppText passText="Ex Money" />
        </View>
      </View>
      <FlatList
        data={exChangeListings}
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

  title: {
    height: 120,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
});

export default MoneyExChange;
