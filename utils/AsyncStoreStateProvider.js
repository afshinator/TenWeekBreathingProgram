import React, { userReducer } from 'react';
import StateProvider from "./StateProvider"

const reducer = (state, action) => {
  switch (action.type) {
      case 'add':
          return { ...state, points: state.points + 1 }
      default:
          return state;
  }
};

export const AsyncStoreStateProvider = ({children}) => {
  <StateProvider initialState={{}} reducer={reducer}>
    {children}
  </StateProvider>
}