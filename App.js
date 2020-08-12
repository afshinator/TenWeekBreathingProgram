import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  AsyncStoreContext,
  getStoredProgress,
  setStoredProgress,
} from "./utils/AsyncStoreContext";
import { NavigationContainer } from "@react-navigation/native";
import TenWeekBreathingProgram from './components/TenWeekBreathingProgram';
import { initProgress } from './utils/initProgress';

// const findFurthestProgress = (p) => {  // used to set which tab to initially open
//   for (let i=10; i > 0; i--) {
//     if ( p[i] ) return `Week${i}`
//   }
//   return 'Intro'
// }

export default function App() {
  const [progress, setProgress] = useState({}); // progress will hold the users progress through the program(s)

  const saveAndPersistProgress = async (val) => {
    // used to synch value of progress & its AsyncStorage version
    await setStoredProgress({ ...progress, ...val });
    setProgress({ ...progress, ...val });
  };

  const start = async () => { // Upon app mount, get progress from AsyncStorage
    let val = await getStoredProgress();
    console.log("val ", val);

    if (val === null) { // Nothing in AsyncStorage, then its first launch
      val = initProgress();
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
        <NavigationContainer>
          <TenWeekBreathingProgram progress={progress} initialTab={progress.max}/>
        </NavigationContainer>
        <StatusBar hidden="true" style="auto" />
      </View>
    </AsyncStoreContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161524",

  },
});
