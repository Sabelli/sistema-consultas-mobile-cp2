import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

// Importação do estilo refatorado
import { cadastroPacienteStyles } from "../styles/cadastroPaciente.styles";

type CadastroPacienteProps = {
  onCadastroSuccess: () => void;
  onVoltar: () => void;
};

export default function CadastroPaciente({
  onCadastroSuccess,
  onVoltar,
}: CadastroPacienteProps) {
  return (
    <View style={cadastroPacienteStyles.container}>
      <StatusBar style="light" />
      <View style={cadastroPacienteStyles.header}>
        <Text style={cadastroPacienteStyles.titulo}>📝 Cadastro de Paciente</Text>
        <Text style={cadastroPacienteStyles.subtitulo}>Componente não utilizado na versão simplificada</Text>
      </View>
    </View>
  );
}