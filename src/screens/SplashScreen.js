import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000); // 2s splash
  }, []);

  return (
    <ImageBackground 
      source={require("../assets/splash-bg.jpg")} 
      style={styles.container}
    >
      <Text style={styles.title}>DHAROHAR VR/AR</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", color: "#fff" },
});
