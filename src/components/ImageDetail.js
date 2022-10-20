import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const ImageDetail = ({ image, title }) => {
  return (
    <View style={{ marginVertical: 12 }}>
      <Image source={image} style={{ width: "100%", height: 150 }} />
      <Text>{title}</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
