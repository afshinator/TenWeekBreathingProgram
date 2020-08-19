import React, { Component, createContext, useReducer, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { initProgress } from "./initProgress";

const TEN_WEEK_PROGRAM_KEY = "user_progress-ad"; // tweak this for testing purposes

const SAVE_COMPLETE = "SAVE_COMPLETE";
const LOADING_COMPLETE = "LOADING_COMPLETE";
const LOADING = "LOADING";
const SAVING = "SAVING";
const ERROR = "ERROR";
const UPDATE = "UPDATE";

export const AsyncStoreContext = createContext();

const initialState = {
  progress: {},
  dispatch: null,
};

const getStoredProgress = (dispatch) => {
  // this dispatch fx passed in is from React.useReducer()
  dispatch({ type: LOADING });

  AsyncStorage.getItem(TEN_WEEK_PROGRAM_KEY)
    .then((response) => {
      return JSON.parse(response);
    })
    .then((response) => {
      let newState = response;
 
      if (response) {
        newState.launches = Number(response.launches) + 1;
      } else {
        newState = initProgress();
      }
      dispatch({
        type: UPDATE,
        payload: newState,
      });
    })
    .catch((err) => dispatch({ type: ERROR, payload: { err } }));
};

const setStoredProgress = (state) => {
  // TODO: can't dispatch this fx; just fire and forget for now
  AsyncStorage.setItem(TEN_WEEK_PROGRAM_KEY, JSON.stringify(state))
    .then((response) => {})
    .catch((err) => {
      console.warn("Trouble persisting state to AsyncStorage");
      // dispatch({ type: ERROR, payload: { err } });
    });
};

const reducer = (state, action) => {
  let newState = null;
  if (action.type === LOADING) {
    return state;
  }
  if (action.type === SAVING) {
    return state;
  }
  if (action.type === SAVE_COMPLETE) {
  }
  if (action.type === LOADING_COMPLETE) {
    if (action.payload.progress)
      return { ...state, ...{ ...state.progress, ...action.payload } };
  }
  if (action.type === UPDATE) {
    window.xyz1 = state; window.xyz2= action.payload;

    newState = { ...state, ...{ progress: {...state.progress, ...action.payload} } };
    setStoredProgress(newState.progress);
    return newState;
  }
  if (action.type === ERROR) {
    console.warn("reducer: ERROR ", action.payload.err);
    return state;
  }
  return state;
};

const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const enhancedDispatch = React.useCallback((action) => {
    if (typeof action === "function") {
      action(dispatch, state);
    } else {
      dispatch(action);
    }
  });

  state.dispatch = enhancedDispatch; // so context consumers can dispatch

  return [state, enhancedDispatch];
};

export const AsyncStoreProvider = ({ children }) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  useEffect(() => {
    const val = dispatch(getStoredProgress);
  }, []);

  return (
    <AsyncStoreContext.Provider value={state}>
      {children}
    </AsyncStoreContext.Provider>
  );
};
