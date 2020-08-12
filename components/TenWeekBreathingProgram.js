import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import BreathingIntro from './BreathingIntro';
import TopSection from './TopSection';


const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen(props) {
  console.log('props ?? ', props);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#161524',
      }}
    >
      <Text>Settings!</Text>
    </View>
  );
}


export default function TenWeekBreathingProgram( props ) {
  console.log('initial tab should be ', props.initialTab)

  return (
    <View style={styles.bkgd}>
      <TopSection />

      <View style={styles.contentBox}>
        <Tab.Navigator
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: '#161524', // seems to get rid of right white vertical line in tab area
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
            // scrollEnabled: true,
          }}
        >
          <Tab.Screen name="Intro" component={BreathingIntro} />
          <Tab.Screen name="Week1" component={SettingsScreen} />
          <Tab.Screen name="Week2" component={HomeScreen} />
          <Tab.Screen name="Week3" component={SettingsScreen} />
          <Tab.Screen name="Week4" component={HomeScreen} />
          <Tab.Screen name="Week5" component={SettingsScreen} />
          <Tab.Screen name="Week6" component={HomeScreen} />
          <Tab.Screen name="Week7" component={SettingsScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});