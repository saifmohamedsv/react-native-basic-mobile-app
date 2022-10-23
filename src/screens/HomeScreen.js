import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

const Screens = ["Counter", "Colors", "ColorControl", "TextInput", "Box"];

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 32,
          marginVertical: 12,
          color: "#0c0c0c",
          fontWeight: "bold",
        }}
      >
        React Native Exercises
      </Text>
      <FlatList
        renderItem={({ item }) => (
          <Button
            title={`Go to ${item} Screen`}
            onPress={(e) => navigate(item)}
          />
        )}
        data={Screens}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    marginTop: 12,
  },
});

export default HomeScreen;
