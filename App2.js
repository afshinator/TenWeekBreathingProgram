import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AsyncStoreStateProvider } from "./utils/AsyncStoreStateProvider";
import { NavigationContainer } from "@react-navigation/native";
import TenWeekBreathingProgram from './components/TenWeekBreathingProgram';

export default function App() {
  const start = async () => {
    
  };

  useEffect(() => {
    start(); // Do this stuff once on component mount
  }, []);

  const initialTab = progress.max ? `Week${progress.max}` : "Intro"; // TODO: use setTimeout to do this manually

  return (
    <AsyncStoreStateProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <TenWeekBreathingProgram
            progress={progress}
            initialTab={initialTab}
          />
          <StatusBar hidden="true" style="auto" />
        </View>
      </NavigationContainer>
    </AsyncStoreStateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
});
