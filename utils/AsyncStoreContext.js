import React from "react"
import AsyncStorage from '@react-native-community/async-storage';

const TEN_WEEK_PROGRAM_KEY = 'user_progress-aa';   // tweak this for testing purposes

export const setStoredProgress = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(TEN_WEEK_PROGRAM_KEY, jsonValue);
  } catch (e) {
    console.warn('AsyncStorage store error- ', e)
  }
};

export const getStoredProgress = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(TEN_WEEK_PROGRAM_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn('AsyncStorage get error- ', e)
  }
};


export const AsyncStoreContext = React.createContext({
  progress: {},
  saveAndPersistProgress: () => {},
});