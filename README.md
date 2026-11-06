# Thermodynamics Calculator 🔬

An interactive engineering web application for calculating and visualizing thermodynamic properties of pure fluids and pseudo-pure substances using WebAssembly-compiled **CoolProp**.

🔗 **Live Application:** [thermoapp.netlify.app](https://thermoapp.netlify.app/)

---

## Features

- **Thermodynamic Property Evaluation** — Compute enthalpy, entropy, pressure, temperature, density, and phase state across diverse industrial fluids.
- **WebAssembly Engine** — Direct, high-performance in-browser calculations via compiled CoolProp WASM binaries without external backend latency.
- **Dynamic Formulation** — Fluid selection and pair-property inputs with instant input validation.
- **Interactive Results Display** — Formatted outputs with SI unit mapping and state property indicators.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Computation Core | CoolProp (C++ compiled to WebAssembly) |
| Styles | CSS3 / Modular layout |
| Deployment | Netlify |

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation & Run

```bash
# Clone the repository
git clone https://github.com/ribollitiago/thermodynamics-app.git
cd thermodynamics-app

# Install dependencies
npm install

# Start development server
npm start
```

---

## Author

**Tiago Ribolli Blasquez**  
[linkedin.com/in/tiagoribolli](https://linkedin.com/in/tiago-ribolli-blasquez-060810244) · [github.com/ribollitiago](https://github.com/ribollitiago)
