import React from "react";
import { Text, View } from "react-native";

import Botao from "../../components/Botao";
import { styles } from "./styles";

export default function DetalheLivro({ navigation, route }) {
  const livro = route.params?.livro;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{livro?.titulo ?? "Livro não encontrado"}</Text>
      <Text>Autor: {livro?.autor ?? "Não informado"}</Text>
      <Text>Modalidade: {livro?.modalidade ?? "Não informada"}</Text>
      {livro ? (
        <Botao
          texto="Quero este livro"
          aoPressionar={() => navigation.navigate("QueroEsteLivro", { livro })}
        />
      ) : null}
      <Botao texto="Voltar" aoPressionar={() => navigation.goBack()} />
    </View>
  );
}