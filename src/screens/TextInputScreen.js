import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const TextInputScreen = () => {
  const [password, setPassword] = useState("");

  const handleText = (newValue) => {
    setPassword(newValue);
  };

  return (
    <View style={styles.pageStyle}>
      <Text style={styles.heading}>Text Validation</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={handleText}
      />
      {password.length < 5 && (
        <Text style={{ color: "red" }}>
          Your password should be more than 5 characters
        </Text>
      )}
    </View>
  );
};

export default TextInputScreen;

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
  },
  textInput: {
    borderColor: "#000",
    borderWidth: 1,
    width: "100%",
    marginVertical: 24,
  },
});
