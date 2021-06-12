import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Dimensions, Text } from "react-native";

import AppText from "../components/AppText";
import ExChangeMoney from "../components/ExMoneyChange";
import listingCards from "../api/listingCards";
import Screen from "../components/Screen";
import AppButton from "../components/AppButtons";
import useApi from "../hooks/useApi";
import helperParam from "../constants/helperParam";
const WIDTH = Dimensions.get("window").width;

let whichApi = "";
let listingData = [];

function MoneyExChange({ route }) {
  // reuse able hooks whihc will take care in all the networking request
  whichApi = route.params.API;

  if (whichApi == helperParam.TripGolden) {
    listingData = useApi(listingCards.tripGolden);
  } else if (whichApi == helperParam.TripExAPI) {
    listingData = useApi(listingCards.listingTripExMoney);
  } else if (whichApi == helperParam.BenExMoney) {
    listingData = useApi(listingCards.benExChangeMoney);
  } else if (whichApi == helperParam.BenGolden) {
    listingData = useApi(listingCards.benGolden);
  } else if (whichApi == helperParam.BenTransfer) {
    listingData = useApi(listingCards.benTransfer);
  } else if (whichApi == helperParam.ExGloable) {
    listingData = useApi(listingCards.getCardListings);
  } else if (whichApi == helperParam.globalGolden) {
    listingData = useApi(listingCards.gloableGolden);
  } else {
    console.log("Error");
  }

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    listingData.request();
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
      {listingData.error && (
        <>
          <AppText>Could't retrive the data</AppText>
          <Text>Could't retrive the data</Text>
          <AppButton title="Retry" onPress={listingData.request} />
        </>
      )}
      <FlatList
        contentContainerStyle={{ paddingBottom: 80 }}
        data={listingData.data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        refreshing={refreshing}
        onRefresh={listingData.request}
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
