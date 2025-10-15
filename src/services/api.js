import { Platform } from "react-native";

const LOCAL_IP = "192.168.15.1"; // troque pelo seu IP da máquina

export const API_URL =  `http://${LOCAL_IP}/api`;

export async function getPets() {
  const res = await fetch(`${API_URL}/pets`);
  if (!res.ok) throw new Error("Erro ao buscar pets");
  return res.json();
}

export async function createPet(pet) {
  const res = await fetch(`${API_URL}/pets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pet),
  });
  if (!res.ok) throw new Error("Erro ao cadastrar pet");
  return res.json();
}
