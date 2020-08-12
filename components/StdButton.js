import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useLinkProps } from '@react-navigation/native';


export default function StdButton({bkgdColor, txtColor, children, clickHandler}) {
  const containerBkgd = bkgdColor ? { backgroundColor: bkgdColor } : { backgroundColor: '#fff'}
  const textColor = txtColor ? { color: txtColor } : { color: '#000' }

  return (
    <TouchableOpacity style={[styles.container, containerBkgd]} onPress={clickHandler}>
      <Text style={[styles.txt, textColor]} >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: 250,
    borderRadius: 30,
    alignItems: 'center',
  },
  txt: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  }
});
