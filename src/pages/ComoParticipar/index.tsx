import React from "react";
import { Text, View } from "react-native";

import Botao from "../../components/Botao";
import { styles } from "./styles";

export default function ComoParticipar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Como participar</Text>
      <View style={styles.bloco}>
        <Text>Escolha um livro</Text>
        <Text>Separe um livro em bom estado para levar ao Feirão.</Text>
      </View>
      <View style={styles.bloco}>
        <Text>Doe ou troque</Text>
        <Text>Escolha a modalidade e encontre sua próxima leitura.</Text>
      </View>
      <View style={styles.bloco}>
        <Text>Participe</Text>
        <Text>Leve seu livro e aproveite para descobrir novas histórias.</Text>
      </View>
      <Botao texto="Voltar" aoPressionar={() => navigation.goBack()} />
    </View>
  );
}