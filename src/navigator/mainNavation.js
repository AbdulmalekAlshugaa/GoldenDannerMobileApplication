import React from "react";
import { StyleSheet } from "react-native";
import Main from "../Screens/Main";
import ExChnageMoneyScreen from "../Screens/MoneyExChangeScreen";
import "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cards from "../Screens/Cards";
import News from "../Screens/News";
import LoadingApiPage from "../Screens/LoadingApiPage";
import TripoilExChange from "../Screens/Tripoli";
import BenghazeMainScreen from "../Screens/BenGhazed";
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={Main}
      options={{ headerMode: "none", headerShown: false }}
    />
    <Stack.Screen
      name="MoneyExChangeScreen"
      component={ExChnageMoneyScreen}
      options={({ route }) => ({ title: route.params.API })}
    />
    <Stack.Screen name="Cards" component={Cards} options={{ title: "Cards" }} />
    <Stack.Screen name="News" component={News} options={{ title: "News" }} />
    <Stack.Screen
      name="LoadingApiPage"
      component={LoadingApiPage}
      options={{ title: "News" }}
    />
    <Stack.Screen
      name="Tripoli"
      component={TripoilExChange}
      options={{ title: "Tripoli Ex change money" }}
    />
    <Stack.Screen name="Benghazi" component={BenghazeMainScreen} />
  </Stack.Navigator>
);

export default function MainNav() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
