import React, { useState } from "react";
import CoolPropForm from "./components/CoolPropForm";
import ResultDisplay from "./components/ResultDisplay";
import { text2key } from "./utils/coolPropKeys";
import "./styles/CoolPropExample.css";

const App = () => {
  const [fluidName, setFluidName] = useState("Nitrogen");
  const [property1, setProperty1] = useState("");
  const [property2, setProperty2] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [output, setOutput] = useState("");

  const fluids = [
    "1-Butene",
    "Acetone",
    "Air",
    "Ammonia",
    "Argon",
    "Benzene",
    "CarbonDioxide",
    "CarbonMonoxide",
    "CarbonylSulfide",
    "cis-2-Butene",
    "CycloHexane",
    "Cyclopentane",
    "CycloPropane",
    "D4",
    "D5",
    "D6",
    "Deuterium",
    "Dichloroethane",
    "DiethylEther",
    "DimethylCarbonate",
    "DimethylEther",
    "Ethane",
    "Ethanol",
    "EthylBenzene",
    "Ethylene",
    "EthyleneOxide",
    "Fluorine",
    "HeavyWater",
    "Helium",
    "HFE143m",
    "Hydrogen",
    "HydrogenChloride",
    "HydrogenSulfide",
    "IsoButane",
    "IsoButene",
    "Isohexane",
    "Isopentane",
    "Krypton",
    "m-Xylene",
    "MD2M",
    "MD3M",
    "MD4M",
    "MDM",
    "Methane",
    "Methanol",
    "MethylLinoleate",
    "MethylLinolenate",
    "MethylOleate",
    "MethylPalmitate",
    "MethylStearate",
    "MM",
    "n-Butane",
    "n-Decane",
    "n-Dodecane",
    "n-Heptane",
    "n-Hexane",
    "n-Nonane",
    "n-Octane",
    "n-Pentane",
    "n-Propane",
    "n-Undecane",
    "Neon",
    "Neopentane",
    "Nitrogen",
    "NitrousOxide",
    "Novec649",
    "o-Xylene",
    "OrthoDeuterium",
    "OrthoHydrogen",
    "Oxygen",
    "p-Xylene",
    "ParaDeuterium",
    "ParaHydrogen",
    "Propylene",
    "Propyne",
    "R11",
    "R113",
    "R114",
    "R115",
    "R116",
    "R12",
    "R123",
    "R1233zd(E)",
    "R1234yf",
    "R1234ze(E)",
    "R1234ze(Z)",
    "R124",
    "R1243zf",
    "R125",
    "R13",
    "R134a",
    "R13I1",
    "R14",
    "R141b",
    "R142b",
    "R143a",
    "R152A",
    "R161",
    "R21",
    "R218",
    "R22",
    "R227EA",
    "R23",
    "R236EA",
    "R236FA",
    "R245ca",
    "R245fa",
    "R32",
    "R365MFC",
    "R40",
    "R404A",
    "R407C",
    "R41",
    "R410A",
    "R507A",
    "RC318",
    "SES36",
    "SulfurDioxide",
    "SulfurHexafluoride",
    "Toluene",
    "trans-2-Butene",
    "Water",
    "Xenon"
  ];
  
  const properties = [
    "Pressure [Pa]",
    "Temperature [K]",
    "Density [kg/m³]",
    "Enthalpy [J/kg]",
    "Entropy [J/kg·K]",
    "Internal Energy [J/kg]",
    "Vapor Quality [-]",
    "Speed of sound [m/s]",
    "Constant-pressure specific heat [J/kg·K]",
    "Constant-volume specific heat [J/kg·K]",
  ];

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
