import React from "react";

import { AsyncStoreProvider } from "./utils/AsyncStoreContext";
import { NavigationContainer } from "@react-navigation/native";
import AppContainer from './components/AppContainer';

export default function App() {
  return (
    <AsyncStoreProvider>
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    </AsyncStoreProvider>
  );
}

