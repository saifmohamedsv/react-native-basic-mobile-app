import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
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
        onPress={(e) => setCounter((prev) => prev + 1)}
      ></Button>
      <Button
        color={"red"}
        disabled={counter === 0}
        title="Decrement"
        onPress={(e) => setCounter((prev) => prev - 1)}
      ></Button>
      <Text>count: {counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
