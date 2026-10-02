# Feirão do Livro — Projeto-base da Aula 17

A professora de Língua Portuguesa desenhou no papel o app do **Feirão do Livro**
(4 telas: Inicio, Acervo, DetalheLivro e ComoParticipar). Ela quer abrir no
celular e **tocar em tudo**. Os livros podem ser de mentira por enquanto;
o caminho entre as telas tem que ser de verdade.

O projeto já vem com o `App.tsx`, as rotas (`src/routes`), o componente `Botao`
e a tela `Inicio`. As outras telas são com você.

## Como rodar

```bash
npm install
npx expo start
```

Abra o **Expo Go** no celular e escaneie o QR code. O celular precisa estar na
mesma Wi-Fi do computador. Se não abrir, tente:

```bash
npx expo start --tunnel
```

Ainda não? Use o emulador do laboratório (tecla `a` no terminal do Expo).

## Onde estão os TODOs

```text
src/pages/Inicio/index.tsx      → Missão 1: ligar "Ver acervo" e "Como participar"
src/routes/app.routes.tsx       → Missão 1: registrar Acervo, DetalheLivro e ComoParticipar
src/pages/                      → Missão 1: criar as 3 telas (index.tsx + styles.ts)
src/pages/Acervo                → Missão 2: lista de 5 livros com FlatList
src/pages/DetalheLivro          → Missão 2: mostrar o livro tocado (route.params)
```

**Missão 1 (esqueleto):** cada tela só com título e botões. O Acervo tem um botão
"Ver livro de teste" que manda `{ id: 1 }` para a DetalheLivro.

**Missão 2 (a cara do desenho):** o Acervo mostra 5 livros (array fixo no próprio
arquivo) e cada livro leva à DetalheLivro com `{ livro: item }`.

## Checklist final (igual ao da aula)

```text
[ ] O app abre no celular (Expo Go) ou no emulador
[ ] As 4 telas existem em src/pages, cada uma com index.tsx e styles.ts
[ ] Todas registradas no Stack.Navigator
[ ] Toda seta do desenho funciona: Inicio → Acervo → DetalheLivro, Inicio → ComoParticipar
[ ] Toda tela, menos a Inicio, tem um jeito de voltar
[ ] O Acervo mostra 5 livros com FlatList
[ ] Tocar em cada livro abre o livro certo na DetalheLivro
[ ] O Botao é reaproveitado (nada de botão novo em cada tela)
```

## Travou?

Erro → Evidência → Hipótese → Teste → Solução. Confira as três regras da aula:

1. O nome no `navigate("X")` tem que ser igual ao `name="X"` do `Stack.Screen`.
2. Tela que existe em `src/pages` mas não está registrada no `Stack` não abre.
3. Quem lê `route.params` precisa que a tela anterior mande o dado no `navigate`.

> Os livros do acervo são dados de exemplo. Nada de nomes de colegas ou dados reais no app.
