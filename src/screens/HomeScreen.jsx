import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

export default function HomeScreen({ navigation }) {
  const isWeb = Platform.OS === "web";

  return (
    <View style={{ flex: 1 }}>
      {isWeb && <Header />}
      <View style={isWeb ? styles.webContainer : styles.mobileContainer}>
        {isWeb ? (
          <Carousel />
        ) : (
          <>
            <TouchableOpacity
              style={styles.mobileButton}
              onPress={() => navigation.navigate("CadastrarPet")}
            >
              <Text style={styles.buttonText}>Cadastrar Pet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mobileButton}
              onPress={() => navigation.navigate("ListarPets")}
            >
              <Text style={styles.buttonText}>Listar Pets</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  webContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    paddingTop: 100,
    overflowY: "auto", // scroll web
  },
  mobileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    padding: 20,
  },
  mobileButton: {
    backgroundColor: "#1e88e5",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "600", textAlign: "center" },
});
