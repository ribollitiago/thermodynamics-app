
export const text2key = (text) => {
    if (text.includes("Pressure")) return "P";
    if (text.includes("Temperature")) return "T";
    if (text.includes("Density")) return "D";
    if (text.includes("Enthalpy")) return "H";
    if (text.includes("Entropy")) return "S";
    if (text.includes("Internal Energy")) return "U";
    if (text.includes("Vapor Quality")) return "Q";
    if (text.includes("Speed of sound")) return "w";
    if (text.includes("Specific heat")) return text.includes("pressure") ? "Cp" : "Cv";
    return null;
  };
  