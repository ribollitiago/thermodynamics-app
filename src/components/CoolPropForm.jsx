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
  const [isMixture, setIsMixture] = useState(false); // Estado para a checkbox

  return (
    <div>
      <h2>Parâmetros de Entrada</h2>
      {/* Checkbox para mistura */}
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

      {/* Dropdown para selecionar unidade: Massa ou Molar */}
      <div>
        <label>Unidade de cálculo:</label>
        <select value={unitType} onChange={(e) => setUnitType(e.target.value)}>
          <option value="mass">Massa</option>
          <option value="mol">Mol</option>
        </select>
      </div>

      {/* Substância 1 */}
      <div>
        <label>Nome do fluido 1:</label>
        <Select
          options={fluids.map((fluid) => ({ value: fluid, label: fluid }))}
          value={{ value: fluidName, label: fluidName }}
          onChange={(selectedOption) => setFluidName(selectedOption.value)}
        />
      </div>

      {/* A proporção do fluido 1 aparece apenas se a checkbox for marcada */}
      {isMixture && (
        <div>
          <label>Proporção do fluido 1:</label>
          <input
            type="number"
            value={proportion1}
            onChange={(e) => setProportion1(e.target.value)}
            placeholder="Proporção"
          />
        </div>
      )}

      {/* Se for mistura, adicionar os campos para a substância 2 */}
      {isMixture && (
        <>
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
              placeholder="Proporção"
            />
          </div>
        </>
      )}

      {/* Propriedades */}
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

      {/* Botão para calcular */}
      <div className="button-container">
        <button onClick={onCalculate}>Calcular</button>
      </div>
    </div>
  );
};

export default CoolPropForm;
