import React, { useState } from "react";
import CoolPropForm from "./components/CoolPropForm";
import ResultDisplay from "./components/ResultDisplay";
import { text2key } from "./utils/coolPropKeys";
import { fluids, properties } from "./constants/constants";
import "./styles/CoolPropExample.css";

const App = () => {
  const [fluidName, setFluidName] = useState("Nitrogen");
  const [property1, setProperty1] = useState("");
  const [property2, setProperty2] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [unitType, setUnitType] = useState("mass");
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
      setOutput("Por favor, insira valores válidos para todas as entradas.");
      return;
    }

    try {
      const fluidWithUnitType = unitType === "mass" ? fluidName : `${fluidName}__mole`;
      const CpKey = unitType === "mass" ? "Cpmass" : "Cpmole";
      const CvKey = unitType === "mass" ? "Cvmass" : "Cvmole";

      const propertiesToCalculate = {
        Temperature: "T",
        Pressure: "P",
        VaporQuality: "Q",
        Density: "D",
        Enthalpy: "H",
        Entropy: "S",
        InternalEnergy: "U",
        Cp: CpKey,
        Cv: CvKey,
      };

      const results = Object.entries(propertiesToCalculate).reduce((acc, [key, prop]) => {
        try {
          const value = window.Module.PropsSI(prop, key1, val1, key2, val2, fluidWithUnitType);
          acc.push({ key, value: isNaN(value) ? "Valor inválido (verifique as entradas ou limites do fluido)" : value.toFixed(2) });
        } catch (error) {
          acc.push({ key, value: "Valor inválido (verifique as entradas ou limites do fluido)" });
        }
        return acc;
      }, []);

      setOutput(results);
    } catch (error) {
      setOutput([{ key: "Erro", value: `Erro no cálculo: ${error.message}` }]);
    }
  };

  return (
    <div>
      <h1>Exemplo CoolProp Adaptado</h1>
      <CoolPropForm
        fluids={fluids}
        properties={properties}
        fluidName={fluidName}
        property1={property1}
        property2={property2}
        value1={value1}
        value2={value2}
        unitType={unitType}
        setUnitType={setUnitType}
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