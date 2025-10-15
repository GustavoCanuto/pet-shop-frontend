import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ConsultaScreen({ onLogout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Consulta</Text>
      <TouchableOpacity style={styles.button} onPress={onLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  button: {
    backgroundColor: "#e53935",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
