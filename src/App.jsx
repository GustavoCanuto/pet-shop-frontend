import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Telas
import HomeScreen from "./screens/HomeScreen";
import CadastrarPetScreen from "./screens/CadastrarPetScreen";
import ListarPetsScreen from "./screens/ListarPetsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: Platform.OS !== "web", // mostra header nativo só no mobile
          headerStyle: { backgroundColor: "#1e1e1e" },
          headerTintColor: "#fff", // cor do texto e seta de voltar
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Pet Shop 🐾" }}
        />
        <Stack.Screen
          name="CadastrarPet"
          component={CadastrarPetScreen}
          options={{ title: "Cadastrar Pet" }}
        />
        <Stack.Screen
          name="ListarPets"
          component={ListarPetsScreen}
          options={{ title: "Lista de Pets" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
