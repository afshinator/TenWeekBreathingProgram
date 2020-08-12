import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import TopSection from './TopSection';
import BreathingIntro from './BreathingIntro';
import BreathingWeek from './BreathingWeek';

const Tab = createMaterialTopTabNavigator();

export default function TenWeekBreathingProgram( props ) {
  return (
    <View style={styles.bkgd}>
      <TopSection />

      <View style={styles.contentBox}>
        <Tab.Navigator
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            // backgroundColor: '#161524', // seems to get rid of right white vertical line in tab area
          }}
          initialRouteName={props.initialTab}
          tabBarOptions={{
            tabStyle: {
              width: 60,
            },
            indicatorStyle: {
              backgroundColor: '#00FFFF',
            },
            style: {
              backgroundColor: '#161524', // sets bkgd of tab bar
            },
            labelStyle: {
              textTransform: 'none',
            },
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            // scrollEnabled: true,   // TODO:
          }}
        >
          <Tab.Screen name="Intro" component={BreathingIntro} />
          <Tab.Screen name="Week1" component={BreathingWeek} />
          <Tab.Screen name="Week2" component={BreathingWeek} />
          <Tab.Screen name="Week3" component={BreathingWeek} />
          <Tab.Screen name="Week4" component={BreathingWeek} />
          <Tab.Screen name="Week5" component={BreathingWeek} />
          <Tab.Screen name="Week6" component={BreathingWeek} />
          <Tab.Screen name="Week7" component={BreathingWeek} />
          <Tab.Screen name="Week8" component={BreathingWeek} />
          <Tab.Screen name="Week9" component={BreathingWeek} />
          <Tab.Screen name="Week10" component={BreathingWeek} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bkgd: {
    flex: 1,
    height: '100%'
  },
  contentBox: {
    backgroundColor: '#161524',
    paddingTop: 40,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -30,
    flexBasis: '100%'
  }
});
