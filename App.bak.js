import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  AsyncStoreContext,
  getStoredProgress,
  setStoredProgress,
} from "./utils/AsyncStoreContext";
import { NavigationContainer } from "@react-navigation/native";
import TenWeekBreathingProgram from "./components/TenWeekBreathingProgram";
import { initProgress } from "./utils/initProgress";

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
    // console.log("val ", val);

    if (val === null) {
      // Nothing in AsyncStorage, then its first launch
      val = initProgress();
      // console.log("initial progress val set ", val);
    } else {
      val["launches"]++;
    }

    saveAndPersistProgress(val);
  };

  useEffect(() => {
    start(); // Do this stuff once on component mount
  }, []);

  const initialTab = progress.max ? `Week${progress.max}` : "Intro"; // TODO: use setTimeout to do this manually

  return (
    <AsyncStoreContext.Provider value={{ progress, saveAndPersistProgress }}>
      <NavigationContainer>
        <View data-id="me" style={styles.container}>
          <TenWeekBreathingProgram
            progress={progress}
            initialTab={initialTab}
          />
          <StatusBar hidden="true" style="auto" />
        </View>
      </NavigationContainer>
    </AsyncStoreContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
});
