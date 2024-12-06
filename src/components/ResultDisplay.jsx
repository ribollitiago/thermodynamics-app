import React from "react";

const ResultDisplay = ({ output }) => {
  if (!output || output.length === 0) {
    return (
      <div>
        <h2>Resultado</h2>
        <p>Nenhum resultado disponível.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Resultado</h2>
      <table>
        <thead>
          <tr>
            <th>Parâmetro</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {output.map(({ key, value }, index) => (
            <tr key={index}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultDisplay;
