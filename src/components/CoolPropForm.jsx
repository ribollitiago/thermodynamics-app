import React from "react";
import Select from "react-select";

const CoolPropForm = ({
  fluids,
  properties,
  fluidName,
  property1,
  property2,
  value1,
  value2,
  unitType,
  setUnitType,
  setFluidName,
  setProperty1,
  setProperty2,
  setValue1,
  setValue2,
  onCalculate,
}) => {
  return (
    <div>
      <h2>Parâmetros de Entrada</h2>
      <div>
        <label>Nome do fluido:</label>
        <Select
          options={fluids.map((fluid) => ({ value: fluid, label: fluid }))}
          value={{ value: fluidName, label: fluidName }}
          onChange={(selectedOption) => setFluidName(selectedOption.value)}
        />
      </div>
      <div>
        <label>Unidade de cálculo:</label>
        <select value={unitType} onChange={(e) => setUnitType(e.target.value)}>
          <option value="mass">Massa</option>
          <option value="mol">Mol</option>
        </select>
      </div>
      <div className="property-fields">
        <div>
          <label>Propriedade #1:</label>
          <select
            value={property1}
            onChange={(e) => setProperty1(e.target.value)}
          >
            <option value="">Selecione uma propriedade</option>
            {properties.map((prop) => (
              <option key={prop} value={prop}>
                {prop}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            placeholder="Valor"
          />
        </div>
        <div>
          <label>Propriedade #2:</label>
          <select
            value={property2}
            onChange={(e) => setProperty2(e.target.value)}
          >
            <option value="">Selecione uma propriedade</option>
            {properties.map((prop) => (
              <option key={prop} value={prop}>
                {prop}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            placeholder="Valor"
          />
        </div>
      </div>
      <div className="button-container">
        <button onClick={onCalculate}>Calcular</button>
      </div>
    </div>
  );
};

export default CoolPropForm;
