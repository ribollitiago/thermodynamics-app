# Aplicativo de Consulta de Propriedades Termodinâmicas

Este projeto é um aplicativo desenvolvido em React que permite consultar valores termodinâmicos de substâncias e misturas utilizando a API do CoolProp.

**🔗 [Acesse o Sistema](https://thermoapp.netlify.app)**

---

## Construído com

* **[React](https://react.dev/):** Biblioteca JavaScript moderna para construção de interfaces de usuário dinâmicas e reativas.  
* **[CoolProp](http://www.coolprop.org):** Ferramenta de código aberto para cálculos precisos de propriedades termodinâmicas e transporte, utilizada para consultar dados de substâncias puras e misturas.  
* **[Ionic Framework](https://ionicframework.com):** Framework para desenvolvimento de aplicativos híbridos, permitindo criar interfaces móveis modernas e responsivas.  
* **[Capacitor](https://capacitorjs.com):** Ferramenta para integrar funcionalidades nativas e realizar o deploy do aplicativo em diferentes plataformas, como iOS, Android e web.  

---

## Configuração do Ambiente

* **Node.js:** Versão mais recente.  
* **NPM ou Yarn:** Gerenciador de pacotes.  

### Passos para Configurar o Ambiente

1. Instale o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/get-npm) (ou [Yarn](https://yarnpkg.com/)).  

2. Clone o repositório do projeto:  
   ```sh
   git clone https://github.com/ribollitiago/thermodynamics-app.git
   ```  

3. Navegue até o diretório do projeto:  
   ```sh
   cd thermodynamics-app
   ```  

4. Instale as dependências do projeto:  
   ```sh
   npm install
   # ou
   yarn install
   ```  

---

## Estrutura do Projeto

```
src
│
├── components
│   ├── CoolPropForm.jsx
│   └── ResultDisplay.jsx
│
├── constants
│   └── constants.js
│
├── App.js
└── index.js
```

## CoolProp

É utilizado o [CoolProp](http://www.coolprop.org) para calcular propriedades termodinâmicas de substâncias e misturas. O CoolProp é uma ferramenta precisa e de código aberto, amplamente usada para consultar propriedades como temperatura, pressão, entalpia, entropia, entre outras, de fluidos puros e misturas.

### Funcionalidade no Aplicativo:

- **Consulta de Propriedades de Substâncias Puras:** O usuário escolhe um fluido (ex: água) e insere dois parâmetros conhecidos (como temperatura e pressão). O aplicativo utiliza o CoolProp para calcular as demais propriedades desse fluido.

- **Cálculo de Propriedades de Misturas:** O usuário pode selecionar dois fluidos e definir a proporção de cada um. O aplicativo então usa o CoolProp para calcular as propriedades resultantes da mistura com base nas proporções fornecidas.

Esses cálculos são feitos utilizando a função `PropsSI` do CoolProp, que fornece resultados precisos para várias propriedades termodinâmicas, seja para um único fluido ou para uma mistura dos dois.

### Funcionalidade da API:

A integração com a API do CoolProp é realizada através da função PropsSI, que calcula as propriedades de um fluido dado um conjunto de entradas, como a propriedade que se deseja calcular (por exemplo, densidade ou entalpia), e as condições do fluido (como temperatura, pressão, etc.).

### Exemplo de uso:

Quando o usuário insere os valores e clica para calcular, o aplicativo chama a função window.Module.PropsSI, passando as propriedades desejadas e os parâmetros inseridos. O CoolProp, então, retorna os resultados que são exibidos no aplicativo.

Exemplo de cálculo de densidade para um fluido puro:

```
const density = window.Module.PropsSI("Dmass", "T", temperature, "P", pressure, fluidName);
```

---

## 📌 Versão

Atualmente em início de desenvolvimento, sem uma versão fixa.  

---

⌨️ por [Tiago Ribolli](https://gist.github.com/ribollitiago)
