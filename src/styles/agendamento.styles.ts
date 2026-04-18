import { StyleSheet } from "react-native";

export const agendamentoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7", // Um tom levemente diferente para diferenciar as seções
    justifyContent: "center",
    padding: 20,
  },
  content: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    padding: 35,
    alignItems: "center",
    // Sombras
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  icone: {
    fontSize: 60,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32", // Verde para passar sensação de saúde/agendamento
    textAlign: "center",
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  botoesContainer: {
    width: "100%",
  },
  botao: {
    width: "100%",
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  botaoPrimario: {
    backgroundColor: "#2E7D32", // Verde principal
  },
  botaoSecundario: {
    backgroundColor: "#4CAF50", // Verde mais claro para consultas existentes
  },
  botaoTerciario: {
    backgroundColor: "transparent",
    marginTop: 10,
  },
  botaoTexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  botaoTextoSecundario: {
    color: "#666",
    fontSize: 15,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});