import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Importação do estilo refatorado
import { novaConsultaStyles } from "../styles/novaConsulta.styles";

type NovaConsultaScreenProps = {
  navigation: any;
};

export default function NovaConsultaScreen({
  navigation,
}: NovaConsultaScreenProps) {
  return (
    <View style={novaConsultaStyles.container}>
      <View style={novaConsultaStyles.content}>
        <Text style={novaConsultaStyles.icone}>🚧</Text>
        <Text style={novaConsultaStyles.titulo}>Em Desenvolvimento</Text>
        <Text style={novaConsultaStyles.descricao}>
          O formulário de agendamento de consultas será implementado nas
          próximas aulas.
        </Text>

        <TouchableOpacity
          style={novaConsultaStyles.botao}
          onPress={() => navigation.goBack()}
        >
          <Text style={novaConsultaStyles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}