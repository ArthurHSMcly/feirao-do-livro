import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "../pages/Inicio";
import Acervo from "../pages/Acervo";
import DetalheLivro from "../pages/DetalheLivro";
import ComoParticipar from "../pages/ComoParticipar";
import QueroEsteLivro from "../pages/QueroEsteLivro";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  // id={undefined}: exigência de tipagem do React Navigation 7.
  // Não muda nada no funcionamento do app.
  return (
    <Stack.Navigator id={undefined}>
      <Stack.Screen name="Inicio" component={Inicio} options={{ title: "Feirão do Livro" }} />
      <Stack.Screen name="Acervo" component={Acervo} />
      <Stack.Screen name="DetalheLivro" component={DetalheLivro} />
      <Stack.Screen name="ComoParticipar" component={ComoParticipar} />
      <Stack.Screen name="QueroEsteLivro" component={QueroEsteLivro} />
    </Stack.Navigator>
  );
}
