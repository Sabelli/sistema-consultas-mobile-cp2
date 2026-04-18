import { StyleSheet } from "react-native";

export const cadastroPacienteStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    padding: 20,
  },
  content: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 30,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Sombra para Android
    elevation: 5,
  },
  icone: {
    fontSize: 50,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 10,
    textAlign: "center",
  },
  descricao: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  botoesContainer: {
    width: "100%",
    gap: 12, // Espaçamento entre os botões (disponível em versões recentes do RN)
  },
  botao: {
    width: "100%",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, // Backup caso o 'gap' não funcione na sua versão
  },
  botaoPrimario: {
    backgroundColor: "#2196F3",
  },
  botaoSecundario: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#2196F3",
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  botaoTextoSecundario: {
    color: "#2196F3",
    fontSize: 16,
    fontWeight: "600",
  },
});