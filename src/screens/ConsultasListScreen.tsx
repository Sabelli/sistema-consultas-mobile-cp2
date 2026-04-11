import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Consulta, StatusConsulta } from "../types";
import { ConsultaCard, Loading, EmptyState } from "../components";
import { consultasService } from "../services/consultasService";

import { consultasListStyles } from "../styles/consultasList.styles";

type ConsultasListScreenProps = {
  navigation: any;
};

export default function ConsultasListScreen({
  navigation,
}: ConsultasListScreenProps) {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtroAtivo, setFiltroAtivo] = useState<StatusConsulta | "todas">(
    "todas"
  );

  useEffect(() => {
    carregarConsultas();
  }, []);

  async function carregarConsultas() {
    setLoading(true);
    try {
      const dados = await consultasService.listarConsultas();
      setConsultas(dados);
    } catch (error) {
      console.error("Erro ao carregar consultas:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleConfirmar(id: number) {
    try {
      await consultasService.confirmarConsulta(id);
      carregarConsultas();
    } catch (error) {
      console.error("Erro ao confirmar consulta:", error);
    }
  }

  async function handleCancelar(id: number) {
    try {
      await consultasService.cancelarConsulta(id);
      carregarConsultas();
    } catch (error) {
      console.error("Erro ao cancelar consulta:", error);
    }
  }

  function handleDetalhes(id: number) {
    navigation.navigate("ConsultaDetalhes", { consultaId: id });
  }

  const consultasFiltradas =
    filtroAtivo === "todas"
      ? consultas
      : consultas.filter((c) => c.status === filtroAtivo);

  if (loading) {
    return <Loading mensagem="Carregando consultas..." />;
  }

  return (
    <View style={consultasListStyles.container}>
      {/* Filtros */}
      <View style={consultasListStyles.filtros}>
        <TouchableOpacity
          style={[
            consultasListStyles.filtro,
            filtroAtivo === "todas" && consultasListStyles.filtroAtivo,
          ]}
          onPress={() => setFiltroAtivo("todas")}
        >
          <Text
            style={[
              consultasListStyles.filtroTexto,
              filtroAtivo === "todas" && consultasListStyles.filtroTextoAtivo,
            ]}
          >
            Todas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            consultasListStyles.filtro,
            filtroAtivo === "agendada" && consultasListStyles.filtroAtivo,
          ]}
          onPress={() => setFiltroAtivo("agendada")}
        >
          <Text
            style={[
              consultasListStyles.filtroTexto,
              filtroAtivo === "agendada" && consultasListStyles.filtroTextoAtivo,
            ]}
          >
            Agendadas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            consultasListStyles.filtro,
            filtroAtivo === "confirmada" && consultasListStyles.filtroAtivo,
          ]}
          onPress={() => setFiltroAtivo("confirmada")}
        >
          <Text
            style={[
              consultasListStyles.filtroTexto,
              filtroAtivo === "confirmada" && consultasListStyles.filtroTextoAtivo,
            ]}
          >
            Confirmadas
          </Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Consultas */}
      <FlatList
        data={consultasFiltradas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ConsultaCard
            consulta={item}
            onConfirmar={handleConfirmar}
            onCancelar={handleCancelar}
            onDetalhes={handleDetalhes}
          />
        )}
        contentContainerStyle={
          consultasFiltradas.length === 0 && consultasListStyles.emptyContainer
        }
        ListEmptyComponent={
          <EmptyState
            mensagem={
              filtroAtivo === "todas"
                ? "Você ainda não possui consultas"
                : `Nenhuma consulta ${filtroAtivo}`
            }
            icone="📅"
          />
        }
      />
    </View>
  );
}