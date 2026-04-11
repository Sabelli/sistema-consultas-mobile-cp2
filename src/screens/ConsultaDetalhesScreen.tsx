import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Consulta } from "../types";
import { Loading } from "../components";
import { consultasService } from "../services/consultasService";
import {
  formatarData,
  formatarHorario,
  obterCorStatus,
  obterTextoStatus,
} from "../utils/formatters";

import { consultaDetalhesStyles } from "../styles/consultaDetalhes.styles";

type ConsultaDetalhesScreenProps = {
  navigation: any;
  route: any;
};

export default function ConsultaDetalhesScreen({
  navigation,
  route,
}: ConsultaDetalhesScreenProps) {
  const { consultaId } = route.params;
  const [consulta, setConsulta] = useState<Consulta | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarConsulta();
  }, [consultaId]);

  async function carregarConsulta() {
    setLoading(true);
    try {
      const dados = await consultasService.obterConsulta(consultaId);
      setConsulta(dados);
    } catch (error) {
      console.error("Erro ao carregar consulta:", error);
      Alert.alert("Erro", "Não foi possível carregar a consulta");
      navigation.goBack();
    } finally {
      setLoading(false);
    }
  }

  async function handleConfirmar() {
    if (!consulta) return;

    Alert.alert(
      "Confirmar Consulta",
      "Deseja confirmar esta consulta?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          onPress: async () => {
            try {
              await consultasService.confirmarConsulta(consulta.id);
              carregarConsulta();
            } catch (error) {
              Alert.alert("Erro", "Não foi possível confirmar a consulta");
            }
          },
        },
      ]
    );
  }

  async function handleCancelar() {
    if (!consulta) return;

    Alert.alert(
      "Cancelar Consulta",
      "Tem certeza que deseja cancelar esta consulta?",
      [
        { text: "Não", style: "cancel" },
        {
          text: "Sim, cancelar",
          style: "destructive",
          onPress: async () => {
            try {
              await consultasService.cancelarConsulta(consulta.id);
              carregarConsulta();
            } catch (error) {
              Alert.alert("Erro", "Não foi possível cancelar a consulta");
            }
          },
        },
      ]
    );
  }

  if (loading || !consulta) {
    return <Loading mensagem="Carregando detalhes..." />;
  }

  const corStatus = obterCorStatus(consulta.status);

  return (
    <View style={consultaDetalhesStyles.container}>
      <ScrollView contentContainerStyle={consultaDetalhesStyles.scrollContent}>
        {/* Status Badge */}
        <View style={[consultaDetalhesStyles.statusBadge, { backgroundColor: corStatus }]}>
          <Text style={consultaDetalhesStyles.statusTexto}>
            {obterTextoStatus(consulta.status)}
          </Text>
        </View>

        {/* Seção Paciente */}
        <View style={consultaDetalhesStyles.secao}>
          <Text style={consultaDetalhesStyles.secaoTitulo}>👤 Paciente</Text>
          <View style={consultaDetalhesStyles.card}>
            <Text style={consultaDetalhesStyles.valor}>{consulta.pacienteNome}</Text>
          </View>
        </View>

        {/* Seção Médico */}
        <View style={consultaDetalhesStyles.secao}>
          <Text style={consultaDetalhesStyles.secaoTitulo}>👨‍⚕️ Médico</Text>
          <View style={consultaDetalhesStyles.card}>
            <Text style={consultaDetalhesStyles.valor}>{consulta.medicoNome}</Text>
            <Text style={consultaDetalhesStyles.label}>{consulta.especialidade}</Text>
          </View>
        </View>

        {/* Seção Data e Hora */}
        <View style={consultaDetalhesStyles.secao}>
          <Text style={consultaDetalhesStyles.secaoTitulo}>📅 Agendamento</Text>
          <View style={consultaDetalhesStyles.card}>
            <View style={consultaDetalhesStyles.row}>
              <View style={consultaDetalhesStyles.coluna}>
                <Text style={consultaDetalhesStyles.label}>Data</Text>
                <Text style={consultaDetalhesStyles.valor}>{formatarData(consulta.data)}</Text>
              </View>
              <View style={consultaDetalhesStyles.coluna}>
                <Text style={consultaDetalhesStyles.label}>Horário</Text>
                <Text style={consultaDetalhesStyles.valor}>
                  {formatarHorario(consulta.horario)}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Seção Observações */}
        {consulta.observacoes && (
          <View style={consultaDetalhesStyles.secao}>
            <Text style={consultaDetalhesStyles.secaoTitulo}>📝 Observações</Text>
            <View style={consultaDetalhesStyles.card}>
              <Text style={consultaDetalhesStyles.observacoes}>{consulta.observacoes}</Text>
            </View>
          </View>
        )}

        {/* Botões de Ação */}
        <View style={consultaDetalhesStyles.acoes}>
          {consulta.status === "agendada" && (
            <TouchableOpacity
              style={[consultaDetalhesStyles.botao, consultaDetalhesStyles.botaoConfirmar]}
              onPress={handleConfirmar}
            >
              <Text style={consultaDetalhesStyles.botaoTexto}>✓ Confirmar Consulta</Text>
            </TouchableOpacity>
          )}

          {(consulta.status === "agendada" ||
            consulta.status === "confirmada") && (
            <TouchableOpacity
              style={[consultaDetalhesStyles.botao, consultaDetalhesStyles.botaoCancelar]}
              onPress={handleCancelar}
            >
              <Text style={consultaDetalhesStyles.botaoTexto}>✕ Cancelar Consulta</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}