import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const renderItem = function ({ item: friend }) {
    return (
      <Text key={friend.key} style={styles.friendText}>
        {friend.name} - {friend.age}
      </Text>
    );
  };

  const friends = [
    { name: "Saif", age: 20 },
    { name: "Ahmed", age: 25 },
    { name: "Mohamed", age: 23 },
    { name: "Peter", age: 17 },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.name}
        data={friends}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  friendText: {
    fontSize: 32,
    color: "#643fdb",
    margin: 12,
    borderWidth: 4,
    borderColor: "red",
    padding: 12,
  },
});

export default ListScreen;
