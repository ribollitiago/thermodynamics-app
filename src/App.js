import React, { useState } from "react";
import CoolPropForm from "./components/CoolPropForm";
import ResultDisplay from "./components/ResultDisplay";
import { text2key } from "./utils/coolPropKeys";
import {fluids, properties} from "./constants/constants";
import "./styles/CoolPropExample.css";

const App = () => {
  const [fluidName, setFluidName] = useState("Nitrogen");
  const [property1, setProperty1] = useState("");
  const [property2, setProperty2] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [output, setOutput] = useState("");

  const handleCalculate = () => {
    if (!window.Module || !window.Module.PropsSI) {
      setOutput("CoolProp não carregado corretamente.");
      return;
    }

    const key1 = text2key(property1);
    const key2 = text2key(property2);
    const val1 = parseFloat(value1);
    const val2 = parseFloat(value2);

    if (!key1 || !key2 || isNaN(val1) || isNaN(val2)) {
      setOutput("Por favor, insira valores válidos.");
      return;
    }

    try {
      const T = window.Module.PropsSI("T", key1, val1, key2, val2, fluidName);
      const P = window.Module.PropsSI("P", key1, val1, key2, val2, fluidName);
      const D = window.Module.PropsSI("D", key1, val1, key2, val2, fluidName);
      const H = window.Module.PropsSI("H", key1, val1, key2, val2, fluidName);
      const S = window.Module.PropsSI("S", key1, val1, key2, val2, fluidName);
      const U = window.Module.PropsSI("U", key1, val1, key2, val2, fluidName);
      const Q = window.Module.PropsSI("Q", key1, val1, key2, val2, fluidName);
      const Cp = window.Module.PropsSI("Cp", key1, val1, key2, val2, fluidName);
      const Cv = window.Module.PropsSI("Cv", key1, val1, key2, val2, fluidName);

      // Criação do output como array de objetos
      const result = [
        { key: "Temperature [K]", value: T.toFixed(2) },
        { key: "Pressure [Pa]", value: P.toFixed(2) },
        { key: "Vapor Quality [-]", value: Q.toFixed(2) },
        { key: "Density [kg/m³]", value: D.toFixed(2) },
        { key: "Enthalpy [J/kg]", value: H.toFixed(2) },
        { key: "Entropy [J/kg·K]", value: S.toFixed(2) },
        { key: "Internal Energy [J/kg]", value: U.toFixed(2) },
        { key: "Constant-pressure specific heat [J/kg·K]", value: Cp.toFixed(2) },
        { key: "Constant-volume specific heat [J/kg·K]", value: Cv.toFixed(2) },
      ];

      setOutput(result); // Atualiza o estado com o resultado
    } catch (error) {
      setOutput([{ key: "Erro", value: `Erro no cálculo: ${error.message}` }]);
    }
  };

  return (
    <div>
      <h1>Projeto Hackaton</h1>
      <CoolPropForm
        fluids={fluids}
        properties={properties}
        fluidName={fluidName}
        property1={property1}
        property2={property2}
        value1={value1}
        value2={value2}
        setFluidName={setFluidName}
        setProperty1={setProperty1}
        setProperty2={setProperty2}
        setValue1={setValue1}
        setValue2={setValue2}
        onCalculate={handleCalculate}
      />
      <ResultDisplay output={output} />
    </div>
  );
};

export default App;
