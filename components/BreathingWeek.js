import React, { useState, useEffect, useCallback, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AsyncStoreContext } from "./../utils/AsyncStoreContext";
import StdButton from "./StdButton";
import { CheckBox } from "react-native";
// import CheckBox from '@react-native-community/checkbox';  // Doesnt work!
import { content } from "./../utils/breathing_content";
import { initProgress } from "./../utils/initProgress";

export default function BreathingWeek({ navigation, route }) {
  const ctx = useContext(AsyncStoreContext);
  const week = Number(route.name.match(/\d+/).join()); // extract digit from string
  const enableUnlock =  [...ctx.progress[week]].reduce((a, c) => a && c); // if all checkboxes are checked in this week
  // const buttonText =
  //   week < ctx.progress.max ? "RESET PROGRAM" : `UNLOCK WEEK ${week + 1}`;

  // console.log("in BreathingWeek  ",week, ctx, enableUnlock);

  const resetProgramHandler = () => {
    // const newProgress = initProgress();
    // ctx.saveAndPersistProgress();
    // TODO:
  };

  const unlockHandler = () => {
    ctx.dispatch({ type: "UPDATE", payload: { max: week + 1 } });
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

      <View style={{marginTop: 15, marginBottom: 40}}>
        {content[week].checkoffs.map((lineOfText, i) => {
          const chk = ctx.progress[week][i];
          const o = {};
          o[week] = ctx.progress[week];

          return (
            <View key={i} style={styles.checkoffsContainer}>
              <CheckBox
                value={chk}
                onValueChange={() => {
                  o[week][i] = !o[week][i];
                  // ctx.saveAndPersistProgress(o);
                  ctx.dispatch({ type: "UPDATE", payload: o });
                }}
                style={styles.checkbox}
              />
              <Text
                key={i}
                style={[
                  styles.txt,
                  styles.chktxt,
                  o[week][i] ? styles.txtChecked : styles.txtUnchecked,
                ]}
              >
                {content[week].checkoffs[i]}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={styles.buttons}>
        <StdButton
          bkgdColor={enableUnlock ? "#6C49FF" : "#979797"}
          txtColor="#fff"
          clickHandler={
            week < ctx.progress.max ? resetProgramHandler : unlockHandler
          }
          disabled={!enableUnlock}
        >
          {`UNLOCK WEEK ${week}`}
        </StdButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161524",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  txt: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
  },
  chktxt: {
    marginLeft: 10,
    marginTop: -5,
  },
  txtChecked: {
    color: "#777",
  },
  txtUnchecked: {
    color: "#fff",
  },
  heading: {
    fontWeight: "600",
    fontSize: 17,
  },
  buttons: {
    display: 'fixed',
    bottom: 20,
    alignItems: "center",
  },
  checkoffsContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  checkbox: {},
});
