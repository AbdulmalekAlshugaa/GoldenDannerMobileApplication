import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Dimensions, Text } from "react-native";

import AppText from "../components/AppText";
import ExChangeMoney from "../components/ExMoneyChange";
import listingCards from "../api/listingCards";
import Screen from "../components/Screen";
import AppButton from "../components/AppButtons";
import useApi from "../hooks/useApi";
const WIDTH = Dimensions.get("window").width;

let whichApi = "";

function MoneyExChange({ route }) {
  // reuse able hooks whihc will take care in all the networking request
  const moneyExChangeListingApi = useApi(listingCards.getCardListings);
  const [refreshing, setRefreshing] = useState(false);

  // whichApi = route.params.API;
  useEffect(() => {
    console.log(moneyExChangeListingApi.data);
    moneyExChangeListingApi.request();
  }, []);
  const renderItem = ({ item }) => (
    <ExChangeMoney
      title={item.title}
      time={item.time}
      date={item.date}
      price={item.price}
      percent={"(" + item.percent + ")"}
      flageImage={item.image}
    />
  );
  return (
    <Screen style={styles.container}>
      {moneyExChangeListingApi.error && (
        <>
          <AppText>Could't retrive the data</AppText>
          <Text>Could't retrive the data</Text>
          <AppButton title="Retry" onPress={moneyExChangeListingApi.request} />
        </>
      )}
      <FlatList
        contentContainerStyle={{ paddingBottom: 80 }}
        data={moneyExChangeListingApi.data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        refreshing={refreshing}
        onRefresh={moneyExChangeListingApi.data}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
    shadowColor: "#000",
  },
  title: {
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
});

export default MoneyExChange;
