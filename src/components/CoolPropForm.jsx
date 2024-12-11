import React, { useState } from "react";
import Select from "react-select";

const CoolPropForm = ({
  fluids,
  properties,
  fluidName,
  fluidName2,
  property1,
  property2,
  value1,
  value2,
  proportion1,
  proportion2,
  unitType,
  setUnitType,
  setFluidName,
  setFluidName2,
  setProperty1,
  setProperty2,
  setValue1,
  setValue2,
  setProportion1,
  setProportion2,
  onCalculate,
}) => {
  const [isMixture, setIsMixture] = useState(false);

  return (
    <div className="coolprop-form">
      <div className="info-icon">
  ℹ️
  <span className="tooltip-text">Para misturas em massa, insira dois valores que somem 100. <br/> Para misturas molares, insira os valores nas unidades apropriadas.  </span>
</div>

      <h2>Parâmetros de Entrada</h2>

      <div>
        <label>Nome do fluido:</label>
        <Select className="select-dropdown"
          options={fluids.map((fluid) => ({ value: fluid, label: fluid }))}
          value={{ value: fluidName, label: fluidName }}
          onChange={(selectedOption) => setFluidName(selectedOption.value)}
        />
      </div>

      <div className="unit-type">
        <label>Unidade de cálculo: </label>
        <select value={unitType} onChange={(e) => setUnitType(e.target.value)}>
          <option value="mass">Massa</option>
          <option value="mol">Mol</option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={isMixture}
            onChange={(e) => setIsMixture(e.target.checked)}
          />
          Calcular mistura?
        </label>
      </div>

      {isMixture && (
        <div className="mixture-fields">
          <div className="mixture-pair">
            <div>
              <label>Nome do fluido 1:</label>
              <Select
                options={fluids.map((fluid) => ({ value: fluid, label: fluid }))}
                value={{ value: fluidName, label: fluidName }}
                onChange={(selectedOption) => setFluidName(selectedOption.value)}
              />
            </div>
            <div>
              <label>Proporção do fluido 1:</label>
              <input
                type="number"
                value={proportion1}
                onChange={(e) => setProportion1(e.target.value)}
                placeholder="Proporção do fluido 1"
              />
            </div>
          </div>

          <div className="mixture-pair">
            <div>
              <label>Nome do fluido 2:</label>
              <Select
                options={fluids.map((fluid) => ({ value: fluid, label: fluid }))}
                value={{ value: fluidName2, label: fluidName2 }}
                onChange={(selectedOption) => setFluidName2(selectedOption.value)}
              />
            </div>
            <div>
              <label>Proporção do fluido 2:</label>
              <input
                type="number"
                value={proportion2}
                onChange={(e) => setProportion2(e.target.value)}
                placeholder="Proporção do fluido 2"
              />
            </div>
          </div>
        </div>
      )}

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
