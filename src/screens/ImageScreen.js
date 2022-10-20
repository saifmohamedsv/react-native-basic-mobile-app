import { Text, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ImageDetail from "../components/ImageDetail";
import BeachImage from "../../assets/pexels-asad-photo-maldives-457882.jpg";
import MountainImage from "../../assets/pexels-stephan-seeber-1054218.jpg";
import ForestImage from "../../assets/pexels-veeterzy-38136.jpg";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Beach Image" image={BeachImage} />
      <ImageDetail title="Forest Image" image={ForestImage} />
      <ImageDetail title="Mountain Image" image={MountainImage} />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
