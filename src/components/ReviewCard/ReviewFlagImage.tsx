import React from "react";
import { StyleSheet, View, Image } from "react-native";

interface ReviewFlagImageProps {}

export const ReviewFlagImage: React.FC<ReviewFlagImageProps> = ({}) => {
  return (
    <View>
      <Image
        source={require("../../../assets/flag.png")}
        style={styles.flagStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flagStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});
