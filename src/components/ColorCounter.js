import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const COLOR_INCREMENT = 15;

const ColorCounter = ({ color, dispatch }) => {
  return (
    <View style={styles.sectionLayout}>
      <Text style={{ ...styles.secionTitle, color }}>{color}</Text>
      <TouchableOpacity
        onPress={() => dispatch({ color, amount: COLOR_INCREMENT })}
      >
        <Text
          style={{
            ...styles.buttonStyle,
            backgroundColor: color,
            color: "white",
          }}
        >
          Increase {color}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch({ color, amount: -1 * COLOR_INCREMENT })}
      >
        <Text
          style={{
            ...styles.buttonStyle,
            backgroundColor: color,
            opacity: 0.4,
            color: "white",
          }}
        >
          Decrease {color}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({
  secionTitle: {
    fontSize: 24,
    fontWeight: "400",
  },
  sectionLayout: {
    maxWidth: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  buttonStyle: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 6,
    width: 160,
    padding: 12,
  },
});
