import { Button, StyleSheet, Text, View } from "react-native";
import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      break;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 32, fontWeight: "600", marginBottom: 32 }}>
        Counter
      </Text>
      <Button
        title="Increment"
        onPress={(e) => dispatch({ type: "increment" })}
      ></Button>
      <Button
        color={"red"}
        disabled={state.count === 0}
        title="Decrement"
        onPress={(e) => dispatch({ type: "decrement" })}
      ></Button>
      <Text>count: {state.count}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
