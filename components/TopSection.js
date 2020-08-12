// The TopSection resides at the top of the device screen, has a fixed height,
// covers the area with a background image, and displays the EXIT button.

import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default function TopSection(props) {
  return (
    <ImageBackground
      source={require("../assets/top-bkgd.png")}
      style={styles.bkgdImage}
    >
      <TouchableOpacity style={styles.buttonBox}>
        <Text style={styles.buttonText}>Exit</Text>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>10 Week Breathing Program</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bkgdImage: {
    height: 175,
    backgroundColor: "#1F4550",
    // resizeMode: 'cover',
  },
  buttonBox: {
    width: 60,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    marginLeft: 15,
    backgroundColor: "rgba( 0,0,0,0.6)",
    borderRadius: 20,
    padding: 0,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    paddingBottom: 2,
  },
  titleContainer: {
    marginLeft: "20%",
    // marginTop: '10%',
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
});
