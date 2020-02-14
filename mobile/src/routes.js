import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { setNavigator } from "./services/navigate";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const RootStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer ref={setNavigator}>
      <RootStack.Navigator screenOptions={screenOptions}>
        <RootStack.Screen name="DevRadar" component={Main} />
        <RootStack.Screen
          name="Profile"
          options={{ headerTitle: "Perfil" }}
          component={Profile}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: "#7D40E7",
  },
  headerTitleAlign: "center",
  headerTintColor: "#ffffff",
};
