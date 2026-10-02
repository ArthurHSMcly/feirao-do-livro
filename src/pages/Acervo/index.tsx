import React from "react";
import { FlatList, Text, View } from "react-native";

import Botao from "../../components/Botao";
import { styles } from "./styles";

const livros = [
  { id: "1", titulo: "O mapa das páginas", autor: "Nina Vento", modalidade: "Troca" },
  { id: "2", titulo: "A casa das perguntas", autor: "Theo Nuvem", modalidade: "Doação" },
  { id: "3", titulo: "Viagem pelo quintal", autor: "Bia Horizonte", modalidade: "Troca" },
  { id: "4", titulo: "O clube das descobertas", autor: "Caio Brisa", modalidade: "Doação" },
  { id: "5", titulo: "Segredos da biblioteca", autor: "Luna Riacho", modalidade: "Troca" },
];

export default function Acervo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Acervo</Text>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Botao
              texto={`${item.titulo} | ${item.autor} | ${item.modalidade}`}
              aoPressionar={() => navigation.navigate("DetalheLivro", { livro: item })}
            />
          </View>
        )}
      />
      <Botao texto="Voltar" aoPressionar={() => navigation.goBack()} />
    </View>
  );
}