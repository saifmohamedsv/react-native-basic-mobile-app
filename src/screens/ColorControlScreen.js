import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ColorCounter from "../components/ColorCounter";

const ColorControlScreen = () => {
  const [bgColor, setColor] = useState({ red: 0, green: 0, blue: 0 });

  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 12,
      }}
    >
      <Text style={styles.heading}>Color Control</Text>
      <Text
        style={{
          fontSize: 18,
          color: "#0c0c0c",
          fontWeight: "600",
        }}
      >
        RGB({bgColor["red"]}, {bgColor["green"]}, {bgColor["blue"]})
      </Text>

      <ColorCounter color={"red"} setColor={setColor} bgColor={bgColor} />
      <ColorCounter color={"green"} setColor={setColor} bgColor={bgColor} />
      <ColorCounter color={"blue"} setColor={setColor} bgColor={bgColor} />

      <View
        style={{
          width: 250,
          height: 125,
          backgroundColor: `rgb(${bgColor["red"]}, ${bgColor["green"]}, ${bgColor["blue"]})`,
        }}
      ></View>
    </View>
  );
};

export default ColorControlScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 32,
  },
});
