import React from "react";
import { View, StatusBar } from "react-native";

import Main from "./src/pages/Main";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Main />
    </>
  );
}
