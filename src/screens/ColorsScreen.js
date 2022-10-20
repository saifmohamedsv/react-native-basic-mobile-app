import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";

const ColorsScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 32,
      }}
    >
      <Button
        title="Add Color"
        onPress={() => setColors((prev) => [...prev, generateRGB()])}
      ></Button>

      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: item,
                marginBottom: 12,
              }}
            ></View>
          );
        }}
      />
    </View>
  );
};

const generateRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

export default ColorsScreen;

const styles = StyleSheet.create({});
