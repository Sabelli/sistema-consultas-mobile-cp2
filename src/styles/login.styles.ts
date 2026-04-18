import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center", // Centraliza o card de login na tela
    padding: 20,
  },
  content: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    // Sombra para dar profundidade
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  icone: {
    fontSize: 50,
    marginBottom: 15,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1976D2",
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    color: "#757575",
    marginBottom: 35,
    textAlign: "center",
  },
  botoesContainer: {
    width: "100%",
  },
  botao: {
    width: "100%",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  botaoPrimario: {
    backgroundColor: "#2196F3", // Azul vibrante para ação principal
  },
  botaoSecundario: {
    backgroundColor: "#455A64", // Cinza azulado para diferenciar o Admin
  },
  botaoTerciario: {
    backgroundColor: "transparent",
    marginTop: 5,
  },
  botaoTexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  botaoTextoSecundario: {
    color: "#2196F3",
    fontSize: 16,
    fontWeight: "600",
    textDecorationLine: "underline", // Estilo de link para criação de conta
  },
});