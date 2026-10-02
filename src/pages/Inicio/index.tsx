import React from "react";
import { Text, View } from "react-native";

import Botao from "../../components/Botao";
import { styles } from "./styles";

export default function Inicio(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text>Feirão do Livro</Text>
        <Text>Doe, troque e descubra livros.</Text>
      </View>
      <View style={styles.acoes}>
        <Botao texto="Ver acervo" aoPressionar={() => props.navigation.navigate("Acervo")} />
        <Botao
          texto="Como participar"
          aoPressionar={() => props.navigation.navigate("ComoParticipar")}
        />
      </View>
    </View>
  );
}
