import React, { useState, useEffect, useCallback, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AsyncStoreContext } from "./../utils/AsyncStoreContext";
import StdButton from "./StdButton";
import { CheckBox } from "react-native";
// import CheckBox from '@react-native-community/checkbox';  // Doesnt work!
import { content } from "./../utils/breathing_content";

export default function BreathingWeek({ navigation, route }) {
  const ctx = useContext(AsyncStoreContext);
  const week = Number(route.name.match(/\d+/).join()); // extract digit from string

  // console.log("in BreathingWeek  ", week, ctx, route);

  const unlockHandler = (x) => {
    const o = {};
    o[week+1] = {};
    console.log('about to pers ', o)
    ctx.saveAndPersistProgress(o);
  };

  // Do not navigate to this screen via tab press if pre-requisites not met
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      if (ctx.progress.max < week) e.preventDefault(); // prevent propogation of the event, so dont switch to this tab
    });
    return unsubscribe;
  }, [navigation, ctx.progress]);

  return (
    <View style={styles.container}>
      {content[week].text.map((lineOfText, i) => (
        <Text key={i} style={[styles.txt]}>
          {content[week].text[i]}
        </Text>
      ))}

      {content[week].checkoffs.map((lineOfText, i) => {
        // const chk = ctx.progress[week][i];
        // console.log(ctx.progress[week])
        return (
        <View   key={i} style={styles.checkoffsContainer}>
          <CheckBox
            // value={!!ctx.progress[week][i]}
            // onValueChange={ctx.saveAndPersistProgress({})}
            style={styles.checkbox}
          />
          <Text key={i} style={[styles.txt]}>
            {content[week].checkoffs[i]}
          </Text>
        </View>
      )}
      )}

      <View style={styles.buttons}>
        <StdButton
          bkgdColor="#6C49FF"
          txtColor="#fff"
          clickHandler={unlockHandler}
        >
          UNLOCK WEEK {week+1}
        </StdButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#161524",
    padding: 20,
  },
  txt: {
    color: "#fff",
    fontSize: 14,
  },
  heading: {
    fontWeight: "600",
    fontSize: 17,
  },
  buttons: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: 140,
  },
  checkoffsContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },
  checkbox: {
    // alignSelf: "center",
  },
});
