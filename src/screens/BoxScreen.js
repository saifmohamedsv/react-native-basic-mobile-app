import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.TextStyle1}></View>
      <View style={styles.TextStyle2}></View>
      <View style={styles.TextStyle3}></View>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    height: "100%",
  },
  TextStyle1: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    left: 0,
  },
  TextStyle2: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    position: "absolute",
    top: 0,
    right: 0,
  },
  TextStyle3: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    top: 100,
    alignSelf: "center",
  },
});
