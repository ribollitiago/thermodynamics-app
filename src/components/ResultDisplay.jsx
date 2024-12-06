import React from "react";

const ResultDisplay = ({ output }) => {
  if (!Array.isArray(output) || output.length === 0) {
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
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Parâmetro</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Valor</th>
          </tr>
        </thead>
        <tbody>
          {output.map(({ key, value }, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{key || "N/A"}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{value || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultDisplay;
