import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { homeStyles } from "../styles/home.styles";

type HomeScreenProps = {
  navigation: any;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={homeStyles.container}>
      <ScrollView contentContainerStyle={homeStyles.scrollContent}>
        {/* Cabeçalho */}
        <View style={homeStyles.header}>
          <Text style={homeStyles.titulo}>Sistema de Consultas</Text>
          <Text style={homeStyles.subtitulo}>Bem-vindo ao sistema!</Text>
        </View>

        {/* Cards de Navegação */}
        <View style={homeStyles.menu}>
          <TouchableOpacity
            style={[homeStyles.card, homeStyles.cardPrimario]}
            onPress={() => navigation.navigate("ConsultasList")}
          >
            <Text style={homeStyles.cardIcone}>📅</Text>
            <Text style={homeStyles.cardTitulo}>Minhas Consultas</Text>
            <Text style={homeStyles.cardDescricao}>
              Visualize e gerencie suas consultas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[homeStyles.card, homeStyles.cardSecundario]}
            onPress={() => navigation.navigate("NovaConsulta")}
          >
            <Text style={homeStyles.cardIcone}>➕</Text>
            <Text style={homeStyles.cardTitulo}>Agendar Consulta</Text>
            <Text style={homeStyles.cardDescricao}>
              Agende uma nova consulta médica
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[homeStyles.card, homeStyles.cardTerciario]}
            onPress={() => {}}
          >
            <Text style={homeStyles.cardIcone}>👤</Text>
            <Text style={homeStyles.cardTitulo}>Meu Perfil</Text>
            <Text style={homeStyles.cardDescricao}>
              Visualize e edite seus dados
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[homeStyles.card, homeStyles.cardQuaternario]}
            onPress={() => {}}
          >
            <Text style={homeStyles.cardIcone}>⚙️</Text>
            <Text style={homeStyles.cardTitulo}>Configurações</Text>
            <Text style={homeStyles.cardDescricao}>
              Ajuste as preferências do app
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}