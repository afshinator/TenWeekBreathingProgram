import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BreathingIntro() {
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161524',
    padding: 20,
  },
  txt: {
    color: '#fff',
    marginBottom: 10,
  },
  heading: {
    fontWeight: '600',
    fontSize: 17,
  }
});
