# Aplicativo de Consulta de Propriedades Termodinâmicas

Este projeto é um aplicativo desenvolvido em React que permite consultar valores termodinâmicos de substâncias e misturas utilizando a API do CoolProp.

**🔗 [Acesse o Sistema](https://thermoapp.netlify.app)**

## Visão Geral

O aplicativo permite que os usuários selecionem um fluido e insiram duas propriedades com seus respectivos valores para calcular outras propriedades termodinâmicas. O CoolProp é utilizado para realizar os cálculos, proporcionando um conjunto abrangente de dados termodinâmicos.

## Estrutura do Projeto

### Componente Principal - `App.js`

Este componente gerencia o estado do aplicativo e integra os componentes `CoolPropForm` e `ResultDisplay`.

- **Estados Gerenciados:**
  - `fluidName`: Nome do fluido selecionado.
  - `property1`, `property2`: Propriedades a serem usadas no cálculo.
  - `value1`, `value2`: Valores das propriedades inseridas pelo usuário.
  - `output`: Resultado do cálculo exibido para o usuário.

- **Função `handleCalculate`:**
  - Verifica se o CoolProp está carregado corretamente.
  - Converte os nomes das propriedades em chaves reconhecidas pelo CoolProp.
  - Realiza os cálculos das propriedades termodinâmicas.
  - Atualiza o estado `output` com os resultados ou uma mensagem de erro, se ocorrer.

### Utilitários - `utils/coolPropKeys.js`

Este arquivo contém a função `text2key`, que converte o texto da propriedade selecionada pelo usuário em uma chave reconhecida pelo CoolProp.

### Estilos - `styles/CoolPropExample.css`

Este arquivo define os estilos básicos para os componentes do aplicativo, incluindo formatação de texto, disposição dos elementos e estilo dos botões.

### Componentes

#### `CoolPropForm.jsx`

Componente responsável pelo formulário de entrada de dados. Permite ao usuário selecionar o fluido, as propriedades e inserir os valores necessários.

- **Propriedades Recebidas:**
  - `fluids`: Lista de fluidos disponíveis.
  - `properties`: Lista de propriedades disponíveis.
  - `fluidName`: Nome do fluido selecionado.
  - `property1`, `property2`: Propriedades selecionadas.
  - `value1`, `value2`: Valores das propriedades.
  - `setFluidName`, `setProperty1`, `setProperty2`, `setValue1`, `setValue2`: Funções para atualizar o estado.
  - `onCalculate`: Função chamada quando o botão de calcular é clicado.

#### `ResultDisplay.jsx`

Componente responsável por exibir os resultados dos cálculos das propriedades termodinâmicas.

- **Propriedades Recebidas:**
  - `output`: String contendo os resultados dos cálculos a serem exibidos.

## Como Executar o Projeto

1. Clone este repositório.
2. Instale as dependências com `npm install`.
3. Inicie o aplicativo com `npm start`.
4. Acesse `http://localhost:3000` no seu navegador para visualizar o aplicativo.

## Contribuições

Sinta-se à vontade para fazer fork deste repositório e enviar pull requests. Toda contribuição é bem-vinda!

## 📌 Versão

Atualmente em ínicio de desenvolvimento sem uma versão fixa.

---
⌨️ por [Tiago Ribolli](https://gist.github.com/ribollitiago)
