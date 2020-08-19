import React  from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TenWeekBreathingProgram from './TenWeekBreathingProgram';
import { AsyncStoreContext } from './../utils/AsyncStoreContext';

const UPDATE = 'UPDATE'

export default function AppContainer() {
  // const initialTab = progress.max ? `Week${progress.max}` : "Intro"; // TODO: use setTimeout to do this manually
  const ctxState = React.useContext(AsyncStoreContext);
  // console.log('in AppContainer, storedState: ', ctxState)

  // if (Object.keys(ctxState.progress).length < 1) return null;
  
  // React.useEffect( () => {
  //   const launches = ctxState.progress.launches + 1;
  //   ctxState.dispatch(ctxState, {type: UPDATE, payload: { launches }})
  // },[])

  return (
    <View style={styles.container}>
      <TenWeekBreathingProgram  />
      <StatusBar hidden="true" style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
});
