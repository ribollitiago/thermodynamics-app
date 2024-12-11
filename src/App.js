import React, { useState } from "react";
import CoolPropForm from "./components/CoolPropForm";
import ResultDisplay from "./components/ResultDisplay";
import { text2key } from "./utils/coolPropKeys";
import { fluids, properties } from "./constants/constants";
import "./styles/CoolPropExample.css";

const App = () => {
  const [fluidName, setFluidName] = useState("Water");
  const [fluidName2, setFluidName2] = useState("Water");  
  const [property1, setProperty1] = useState("");
  const [property2, setProperty2] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [unitType, setUnitType] = useState("mass");
  const [proportion1, setProportion1] = useState("");  
  const [proportion2, setProportion2] = useState("");  
  const [output, setOutput] = useState("");
  const [isMixture, setIsMixture] = useState(false);  

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
      if (isMixture) {
        const totalProportion = parseFloat(proportion1) + parseFloat(proportion2);
        if (isNaN(totalProportion) || totalProportion <= 0) {
          setOutput("As proporções dos fluidos devem ser válidas e somar um valor maior que 0.");
          return;
        }
  
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
  
            const mixedValue = (value1Fluid * prop1 + value2Fluid * prop2) / totalProportion;
  
            let formattedValue;
            if (isNaN(mixedValue)) {
              formattedValue = "Valor inválido (verifique as entradas ou limites do fluido)";
            } else {
              if (key === "Temperature" || key === "Pressure" || key === "VaporQuality") {
                formattedValue = mixedValue.toFixed(1);  
              } else {
                formattedValue = mixedValue.toFixed(6);  
              }
            }
  
            acc.push({
              key,
              value: formattedValue,
            });
          } catch (error) {
            acc.push({ key, value: "Erro no cálculo: " + error.message });
          }
          return acc;
        }, []);
  
        setOutput(results);
      } else {
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
              fluidName 
            );
  
            let formattedValue;
            if (isNaN(value)) {
              formattedValue = "Valor inválido (verifique as entradas ou limites do fluido)";
            } else {
              if (key === "Temperature" || key === "Pressure" || key === "VaporQuality") {
                formattedValue = value.toFixed(1);  
              } else {
                formattedValue = value.toFixed(6);  
              }
            }
  
            acc.push({
              key,
              value: formattedValue,
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
      <h1>ThermoCalc</h1>
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
