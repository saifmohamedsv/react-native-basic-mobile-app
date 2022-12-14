import { StyleSheet, Text, View } from "react-native";
import React, { useReducer } from "react";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
  const { color, amount } = action;
  if (state[color] + amount > 255 || state[color] + amount < 0) {
    return state;
  }
  return { ...state, [color]: state[color] + amount };
};

const ColorControlScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  return (
    <View style={styles.pageStyle}>
      <Text style={styles.heading}>Color Control</Text>

      <Text style={styles.title}>
        RGB({state["red"]}, {state["green"]}, {state["blue"]})
      </Text>

      <ColorCounter dispatch={dispatch} color={"red"} />
      <ColorCounter dispatch={dispatch} color={"green"} />
      <ColorCounter dispatch={dispatch} color={"blue"} />

      <View
        style={{
          width: 250,
          height: 125,
          backgroundColor: `rgb(${state["red"]}, ${state["green"]}, ${state["blue"]})`,
        }}
      ></View>
    </View>
  );
};

export default ColorControlScreen;

const styles = StyleSheet.create({
  pageStyle: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 12,
  },
  heading: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 32,
  },
  title: {
    fontSize: 18,
    color: "#0c0c0c",
    fontWeight: "600",
  },
});
