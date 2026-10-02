import React, { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";

import Botao from "../../components/Botao";
import { styles } from "./styles";

export default function QueroEsteLivro({ navigation, route }) {
  const livro = route.params?.livro;
  const [nome, setNome] = useState("");
  const [turma, setTurma] = useState("");

  function confirmarPedido() {
    const nomeInformado = nome.trim();
    const turmaInformada = turma.trim();

    if (!nomeInformado || !turmaInformada) {
      Alert.alert("Dados incompletos", "Informe seu nome e sua turma.");
      return;
    }

    if (!livro) {
      Alert.alert("Livro não encontrado", "Volte ao acervo e escolha um livro.");
      return;
    }

    Alert.alert(
      "Pedido confirmado",
      `${nomeInformado}, da turma ${turmaInformada}, quer o livro "${livro.titulo}".`,
      [{ text: "OK", onPress: () => navigation.popToTop() }],
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Quero este livro</Text>
      <Text>Livro: {livro?.titulo ?? "Livro não encontrado"}</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        accessibilityLabel="Nome"
      />

      <Text style={styles.label}>Turma</Text>
      <TextInput
        style={styles.input}
        value={turma}
        onChangeText={setTurma}
        placeholder="Digite sua turma"
        accessibilityLabel="Turma"
      />

      <Botao texto="Confirmar" aoPressionar={confirmarPedido} />
      <Botao texto="Voltar" aoPressionar={() => navigation.goBack()} />
    </View>
  );
}