import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Platform, ActivityIndicator } from "react-native";
import { getPets } from "../services/api";
import Header from "../components/Header";

export default function ListarPetsScreen() {
  const isWeb = Platform.OS === "web";
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPets()
      .then((data) => setPets(data.data))
      .catch((err) => {
        console.error(err);
        alert("Erro ao carregar pets");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1 }}>
        {isWeb && <Header />}
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#1e88e5" />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {isWeb && <Header />}
      <View
        style={[
          isWeb ? styles.webContainer : styles.mobileContainer,
          isWeb && { overflowY: "auto", scrollbarWidth: "thin", scrollbarColor: "#494d50 #121212" }
        ]}
      >
        {pets.length === 0 ? (
          <Text style={styles.empty}>Nenhum pet cadastrado</Text>
        ) : (
          <FlatList
            style={{ width: "100%" }}
            contentContainerStyle={{ paddingBottom: 20 }}
            data={pets}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={isWeb ? styles.webCard : styles.mobileCard}>
                <Text style={styles.cardText}>{item.nome}</Text>
                <Text style={styles.cardText}>Raça: {item.raca}</Text>
                <Text style={styles.cardText}>Idade: {item.idade} anos</Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  webContainer: { flex: 1, padding: 40, backgroundColor: "#121212", paddingTop: 100 },
  mobileContainer: { flex: 1, padding: 20, backgroundColor: "#121212" },
  webCard: { backgroundColor: "#1e1e1e", padding: 20, borderRadius: 25, marginBottom: 15 },
  mobileCard: { backgroundColor: "#1e1e1e", padding: 16, borderRadius: 20, marginBottom: 12 },
  cardText: { fontSize: 16, color: "#fff", marginBottom: 4 },
  nome: { fontSize: 18, fontWeight: "bold", color: "#fff", marginBottom: 6 },
  empty: { color: "#fff", textAlign: "center", marginTop: 50, fontSize: 16 },
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
});
