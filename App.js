import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  AsyncStoreContext,
  getStoredProgress,
  setStoredProgress,
} from "./utils/AsyncStoreContext";
import AsyncStorage from "@react-native-community/async-storage";

export default function App() {
  const [progress, setProgress] = useState({}); // progress will hold the users progress through the program(s)

  const saveAndPersistProgress = async (val) => {
    // used to synch value of progress & its AsyncStorage version
    await setStoredProgress({ ...progress, ...val });
    setProgress({ ...progress, ...val });
  };

  const start = async () => {
    // Upon app mount, get progress from AsyncStorage
    let val = await getStoredProgress();
    console.log("val ", val);

    if (val === null) {
      // Nothing in AsyncStorage, then its first launch
      val = {
        begun: false, // Will be set to true once user presses "BEGIN PROGRAM" on intro screen
        launches: 1, // How many times the app has been launched
      };
    } else {
      val["launches"]++;
    }

    saveAndPersistProgress(val);
  };

  useEffect(() => {
    // Do this stuff once on component mount
    start();
  }, []);

  return (
    <AsyncStoreContext.Provider value={{ progress, saveAndPersistProgress }}>
      <View style={styles.container}>
        <Text>
          Open up App.js to start working on your app! {progress.launches}
        </Text>
        <StatusBar hidden="true" style="auto" />
      </View>
    </AsyncStoreContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161524",
    alignItems: "center",
    justifyContent: "center",
  },
});
