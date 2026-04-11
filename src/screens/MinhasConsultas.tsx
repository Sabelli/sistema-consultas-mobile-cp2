import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { minhasConsultasStyles } from "../styles/minhasConsultas.styles";

type MinhasConsultasProps = {
  onNavigateToAgendamento: () => void;
  onLogout: () => void;
};

export default function MinhasConsultas({
  onNavigateToAgendamento,
  onLogout,
}: MinhasConsultasProps) {
  return (
    <View style={minhasConsultasStyles.container}>
      <StatusBar style="light" />
      <View style={minhasConsultasStyles.header}>
        <Text style={minhasConsultasStyles.titulo}>Minhas Consultas</Text>
        <Text style={minhasConsultasStyles.subtitulo}>Componente não utilizado na versão simplificada</Text>
      </View>
    </View>
  );
}