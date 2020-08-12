import React, { useState, useEffect, useCallback, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AsyncStoreContext } from "./../utils/AsyncStoreContext";
import StdButton from "./StdButton";

export default function BreathingIntro({navigation}) {
  const ctx = useContext(AsyncStoreContext);
  console.log("in breathing intro ", ctx);

  const beginButtonHandler = (x) => {
    ctx.saveAndPersistProgress({begun: true, 1: {}})
  }

  // Do not navigate to this screen via tab press if pre-requisites not met
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      if ( ctx.progress['begun'] === false ) 
        e.preventDefault();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={[styles.txt, styles.heading]}>
        Welcome to the 10-week Breathing Program
      </Text>
      <Text style={[styles.txt]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
        rhoncus quam, eu convallis nulla. Ut convallis posuere lorem in
        elementum. Nulla sagittis, tellus eget porttitor auctor, dui dui auctor
        risus, ut pharetra purus eros et orci.
      </Text>
      <Text style={[styles.txt]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
        rhoncus quam, eu convallis nulla. Ut convallis posuere lorem in
        elementum. Nulla sagittis, tellus eget porttitor auctor, dui dui auctor
        risus, ut pharetra purus eros et orci.
      </Text>
      <Text style={[styles.txt]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
        rhoncus quam, eu convallis nulla. Ut convallis posuere lorem in
        elementum.
      </Text>
      <View style={styles.buttons}>
        <StdButton bkgdColor="#6C49FF" txtColor="#fff" clickHandler={beginButtonHandler}>
          BEGIN PROGRAM
        </StdButton>
        <StdButton>ORDER ON AMAZON</StdButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161524",
    padding: 20,
  },
  txt: {
    color: "#fff",
    marginBottom: 10,
  },
  heading: {
    fontWeight: "600",
    fontSize: 17,
  },
  buttons: {
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: "center",
    height: 140,
  },
});
