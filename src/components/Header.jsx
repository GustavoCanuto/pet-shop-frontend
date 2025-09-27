import { View, Text, StyleSheet, Platform, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Header() {
  const isWeb = Platform.OS === "web";
  const navigation = useNavigation();
  const route = useRoute();

  const getTitle = () => {
    switch (route.name) {
      case "Home": return "Pet Shop 🐾";
      case "CadastrarPet": return "Cadastrar Pet";
      case "ListarPets": return "Lista de Pets";
      default: return "";
    }
  };

  if (isWeb) {
    return (
      <View style={styles.webHeader}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text style={styles.webTitle}>Pet Shop 🐾</Text>
        </Pressable>
        <View style={styles.navLinks}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Text style={styles.navItem}>Home</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("CadastrarPet")}>
            <Text style={styles.navItem}>Cadastrar Pet</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("ListarPets")}>
            <Text style={styles.navItem}>Listar Pets</Text>
          </Pressable>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.mobileHeader}>
        {route.name !== "Home" && (
          <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>{"< Voltar"}</Text>
          </Pressable>
        )}
        <Text style={styles.mobileTitle}>{getTitle()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  webHeader: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#1e1e1e",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    zIndex: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  webTitle: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  navLinks: { flexDirection: "row" },
  navItem: { color: "#fff", fontSize: 16, marginRight: 20, cursor: "pointer" },

  mobileHeader: {
    width: "100%",
    height: 60,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  mobileTitle: { fontSize: 20, fontWeight: "bold", color: "#fff" },
  backButton: { position: "absolute", left: 10, top: 15 },
  backText: { color: "#1e88e5", fontSize: 16 },
});
