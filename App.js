import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import ExChangeMoney from "./src/Screens/MoneyExChangeScreen";
import "react-native-gesture-handler";
import cardListing from "./src/api/listingCards";
import listingCards from "./src/api/listingCards";

export default function App() {
  const [cardListing, setCardListing] = useState([]);
  const loadCards = async () => {
    const response = await listingCards.getCardListings();
    console.log(response.data);
    setCardListing(response.data.result);
  };
  useEffect(() => {
    loadCards();
  }, []);
  return <ExChangeMoney />;
}

const styles = StyleSheet.create({});
