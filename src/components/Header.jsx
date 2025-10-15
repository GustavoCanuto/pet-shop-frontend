import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Header({ onLoginPress, onLogoutPress, isLogged }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>🐾 PetShop</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={isLogged ? onLogoutPress : onLoginPress}
      >
        <Text style={styles.buttonText}>
          {isLogged ? "Sair" : "Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#1e1e1e",
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  title: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  button: {
    backgroundColor: "#1e88e5",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
