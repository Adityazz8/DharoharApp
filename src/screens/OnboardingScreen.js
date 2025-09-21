import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";

const slides = [
  { id: "1", title: "Welcome", text: "Our app is a platform for exploring heritage...", image: require("../assets/onboard1.png") },
  { id: "2", title: "About Us", text: "Discover India's rich culture and history...", image: require("../assets/onboard2.png") }
];

export default function OnboardingScreen({ navigation }) {
  return (
    <FlatList
      data={slides}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      renderItem={({ item, index }) => (
        <View style={styles.slide}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
          {index === slides.length - 1 && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.replace("SignIn")}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  slide: { width: 400, alignItems: "center", justifyContent: "center", padding: 20 },
  image: { width: 250, height: 250, resizeMode: "contain" },
  title: { fontSize: 24, fontWeight: "bold", marginVertical: 10 },
  text: { fontSize: 16, textAlign: "center" },
  button: { backgroundColor: "#4a90e2", padding: 12, borderRadius: 8, marginTop: 20 },
  buttonText: { color: "#fff", fontSize: 16 },
});
