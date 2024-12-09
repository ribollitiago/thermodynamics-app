import React, { useState } from "react";
import CoolPropForm from "./components/CoolPropForm";
import ResultDisplay from "./components/ResultDisplay";
import { text2key } from "./utils/coolPropKeys";
import { fluids, properties } from "./constants/constants";
import "./styles/CoolPropExample.css";

const App = () => {
  const [fluidName, setFluidName] = useState("Water");
  const [fluidName2, setFluidName2] = useState("Water");  // Para a mistura
  const [property1, setProperty1] = useState("");
  const [property2, setProperty2] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [unitType, setUnitType] = useState("mass");
  const [proportion1, setProportion1] = useState("");  // Proporção do fluido 1
  const [proportion2, setProportion2] = useState("");  // Proporção do fluido 2
  const [output, setOutput] = useState("");
  const [isMixture, setIsMixture] = useState(false);  // Estado da checkbox

  const handleCalculate = () => {
    if (!window.Module || !window.Module.PropsSI) {
      setOutput("CoolProp não carregado corretamente.");
      return;
    }

    const key1 = text2key(property1);
    const key2 = text2key(property2);
    const val1 = parseFloat(value1);
    const val2 = parseFloat(value2);
    const prop1 = parseFloat(proportion1);
    const prop2 = parseFloat(proportion2);

    if (!key1 || !key2 || isNaN(val1) || isNaN(val2)) {
      setOutput("Por favor, insira valores válidos para todas as entradas.");
      return;
    }

    try {
      // Lógica de mistura, caso a checkbox seja selecionada
      if (isMixture) {
        // Ajusta as proporções
        const totalProportion = parseFloat(proportion1) + parseFloat(proportion2);
        if (isNaN(totalProportion) || totalProportion <= 0) {
          setOutput("As proporções dos fluidos devem ser válidas e somar um valor maior que 0.");
          return;
        }

        // Para as misturas, ajustamos os cálculos levando em conta a proporção de massa ou molar
        const propertiesToCalculate = {
          Temperature: "T",
          Pressure: "P",
          VaporQuality: "Q",
          Density: unitType === "mass" ? "Dmass" : "Dmolar",
          Enthalpy: unitType === "mass" ? "Hmass" : "Hmolar",
          Entropy: unitType === "mass" ? "Smass" : "Smolar",
          InternalEnergy: unitType === "mass" ? "Umass" : "Umolar",
          Cp: unitType === "mass" ? "Cpmass" : "Cpmolar",
          Cv: unitType === "mass" ? "Cvmass" : "Cvmolar",
        };

        const results = Object.entries(propertiesToCalculate).reduce((acc, [key, prop]) => {
          try {
            // Considera as propriedades dos dois fluidos com base nas proporções
            const value1Fluid = window.Module.PropsSI(
              prop,
              key1,
              val1,
              "P",
              val2,
              fluidName
            );

            const value2Fluid = window.Module.PropsSI(
              prop,
              key1,
              val1,
              "P",
              val2,
              fluidName2
            );

            // Combina as propriedades dos fluidos com base nas proporções
            const mixedValue = (value1Fluid * prop1 + value2Fluid * prop2) / totalProportion;

            acc.push({
              key,
              value: isNaN(mixedValue)
                ? "Valor inválido (verifique as entradas ou limites do fluido)"
                : mixedValue.toFixed(6),
            });
          } catch (error) {
            acc.push({ key, value: "Erro no cálculo: " + error.message });
          }
          return acc;
        }, []);

        setOutput(results);
      } else {
        // Caso o cálculo seja para uma substância pura
        const propertiesToCalculate = {
          Temperature: "T",
          Pressure: "P",
          VaporQuality: "Q",
          Density: unitType === "mass" ? "Dmass" : "Dmolar",
          Enthalpy: unitType === "mass" ? "Hmass" : "Hmolar",
          Entropy: unitType === "mass" ? "Smass" : "Smolar",
          InternalEnergy: unitType === "mass" ? "Umass" : "Umolar",
          Cp: unitType === "mass" ? "Cpmass" : "Cpmolar",
          Cv: unitType === "mass" ? "Cvmass" : "Cvmolar",
        };

        const results = Object.entries(propertiesToCalculate).reduce((acc, [key, prop]) => {
          try {
            const value = window.Module.PropsSI(
              prop,
              key1,
              val1,
              key2,
              val2,
              fluidName // Apenas um fluido puro é considerado
            );

            acc.push({
              key,
              value: isNaN(value)
                ? "Valor inválido (verifique as entradas ou limites do fluido)"
                : value.toFixed(6),
            });
          } catch (error) {
            acc.push({ key, value: "Erro no cálculo: " + error.message });
          }
          return acc;
        }, []);

        setOutput(results);
      }
    } catch (error) {
      setOutput([{ key: "Erro", value: `Erro no cálculo: ${error.message}` }]);
    }
  };

  return (
    <div>
      <h1>Exemplo CoolProp Ajustado</h1>
      <CoolPropForm
        fluids={fluids}
        properties={properties}
        fluidName={fluidName}
        fluidName2={fluidName2}
        property1={property1}
        property2={property2}
        value1={value1}
        value2={value2}
        unitType={unitType}
        setUnitType={setUnitType}
        setFluidName={setFluidName}
        setFluidName2={setFluidName2}
        setProperty1={setProperty1}
        setProperty2={setProperty2}
        setValue1={setValue1}
        setValue2={setValue2}
        setProportion1={setProportion1}
        setProportion2={setProportion2}
        isMixture={isMixture}
        setIsMixture={setIsMixture}
        onCalculate={handleCalculate}
      />

      <ResultDisplay output={output} />
    </div>
  );
};

export default App;
