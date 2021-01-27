import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ImageProps,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { colors } from "../../config/colors";

interface CardProps {
  title: string;
  source: ImageProps["source"];
  discount: string;
}

export const Card: React.FC<CardProps> = ({ source, title, discount }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.bgContainerStyle}>
        <ImageBackground source={source} style={styles.imageStyle}>
          <LinearGradient
            colors={["transparent", `${colors.secondary}`]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: "100%",
            }}
          />
        </ImageBackground>
      </View>

      <View style={styles.titleContainerStyle}>
        <Text style={styles.textStyle}>{title}</Text>
        <View style={styles.discountStyle}>
          <Text style={styles.textDiscountStyle}>{discount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginRight: 15,
    width: 300,
    height: 200,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
  },
  bgContainerStyle: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
  },
  imageStyle: {
    alignItems: "center",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  titleContainerStyle: {
    marginTop: -65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  textStyle: { fontSize: 18, color: "#fff" },
  discountStyle: {
    backgroundColor: `${colors.primary}`,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  textDiscountStyle: { fontWeight: "bold", color: "#fff" },
});
