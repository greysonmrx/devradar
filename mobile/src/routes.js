import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { setNavigator } from "./services/navigate";

import Main from "./pages/Main";

const RootStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer ref={setNavigator}>
      <RootStack.Navigator>
        <RootStack.Screen name="DevRadar" component={Main} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
