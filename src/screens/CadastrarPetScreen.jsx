import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  Alert,
  ToastAndroid,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { createPet } from "../services/api";
import Header from "../components/Header";



export default function CadastrarPetScreen() {
  const isWeb = Platform.OS === "web";
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [raca, setRaca] = useState("");
  const [loading, setLoading] = useState(false);

  const showMessage = (msg) => {
    if (isWeb) {
      alert(msg); // web usa alert
    } else if (Platform.OS === "android") {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      Alert.alert("Info", msg);
    }
  };

  const salvarPet = async () => {
    Keyboard.dismiss(); // fecha teclado no mobile
    if (!nome || !idade || !raca) {
      showMessage("Preencha todos os campos!");
      return;
    }

    try {
      setLoading(true);
      await createPet({ nome, idade: parseInt(idade), raca });
      showMessage("Pet cadastrado com sucesso!");
      setNome(""); setIdade(""); setRaca("");
    } catch (err) {
      console.error(err);
      showMessage("Erro ao cadastrar pet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {Platform.OS === "web" && <Header />}
      <View style={isWeb ? styles.webContainer : styles.mobileContainer}>
        <Text style={styles.title}>Cadastrar Pet</Text>

        <TextInput
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#bbb"
          style={isWeb ? styles.webInput : styles.mobileInput}
        />
        <TextInput
          placeholder="Idade"
          value={idade}
          onChangeText={setIdade}
          keyboardType="numeric"
          placeholderTextColor="#bbb"
          style={isWeb ? styles.webInput : styles.mobileInput}
        />
        <TextInput
          placeholder="Raça"
          value={raca}
          onChangeText={setRaca}
          placeholderTextColor="#bbb"
          style={isWeb ? styles.webInput : styles.mobileInput}
        />

        <TouchableOpacity
          style={isWeb ? styles.webButton : styles.mobileButton}
          onPress={salvarPet}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Salvar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  webContainer: { flex: 1, backgroundColor: "#121212", justifyContent: "center", alignItems: "center", padding: 50 },
  mobileContainer: { flex: 1, backgroundColor: "#121212", justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 30 },
  webInput: { width: 400, backgroundColor: "#1e1e1e", color: "#fff", padding: 14, marginBottom: 15, borderRadius: 25, fontSize: 16 },
  mobileInput: { width: "90%", backgroundColor: "#1e1e1e", color: "#fff", padding: 12, marginBottom: 12, borderRadius: 20, fontSize: 16 },
  webButton: { backgroundColor: "#1e88e5", paddingVertical: 14, paddingHorizontal: 60, borderRadius: 30, marginTop: 20 },
  mobileButton: { backgroundColor: "#1e88e5", paddingVertical: 12, paddingHorizontal: 40, borderRadius: 25, marginTop: 20 },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 18, textAlign: "center" },
});
