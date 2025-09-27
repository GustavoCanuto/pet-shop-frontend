// src/components/Carousel.js
import { View, Text, StyleSheet } from "react-native";

export default function Carousel() {
  // Placeholder simples; depois você pode adicionar imagens, etc.
  return (
    <View style={styles.carousel}>
      <Text style={styles.text}>🐶 Bem-vindo ao Pet Shop!</Text>
      <Text style={styles.text}>🐱 Confira nossos pets!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    width: "80%",
    height: 300,
    backgroundColor: "#1e1e1e",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 20,
  },
  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});
