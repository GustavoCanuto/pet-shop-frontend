import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import LoginModal from "./LoginModal";
import ConsultaScreen from "./ConsultaScreen";

export default function HomeScreen() {
  const [isLogged, setIsLogged] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const handleLoginSuccess = () => {
    setIsLogged(true);
    setLoginModalVisible(false);
  };

  const handleLogout = () => setIsLogged(false);

  if (isLogged) {
    return (
      <>
        <Header isLogged={true} onLogoutPress={handleLogout} />
        <ConsultaScreen onLogout={handleLogout} />
      </>
    );
  }

  return (
    <View style={styles.container}>
      <Header
        isLogged={false}
        onLoginPress={() => setLoginModalVisible(true)}
      />
      <View style={styles.content}>
        <Carousel />
      </View>

      <LoginModal
        visible={loginModalVisible}
        onClose={() => setLoginModalVisible(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
