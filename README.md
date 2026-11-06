# thermodynamics-app

Web-based thermodynamic properties calculator — query fluid and substance properties directly in the browser using the CoolProp library compiled to WebAssembly.

🔗 **Live:** [thermoapp.netlify.app](https://thermoapp.netlify.app)

---

## Features

- 🧪 **Substance lookup** — query thermodynamic properties for a wide range of fluids and substances
- ⚡ **WebAssembly performance** — CoolProp runs client-side via WASM, no backend required
- 📐 **Engineering-grade accuracy** — powered by the open-source CoolProp thermodynamic library
- 🖥️ **Clean UI** — structured input form with organized result display
- 📦 **Self-contained** — all computation runs in the browser, no data leaves the client

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Thermodynamics Engine | [CoolProp](http://www.coolprop.org/) |
| Runtime | WebAssembly (WASM) |
| Deployment | Netlify |

---

## Project Structure

```
src/
├── components/
│   ├── CoolPropForm/     # Input form for substance and property selection
│   └── ResultDisplay/    # Renders computed property results
├── constants/
│   └── constants.js      # Unit and property definitions
├── utils/
│   └── coolPropKeys.js   # CoolProp key mappings and helpers
├── coolprop.js           # CoolProp WASM JS bindings
└── coolprop.wasm         # Compiled CoolProp WebAssembly binary
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/ribollitiago/thermodynamics-app.git
cd thermodynamics-app

# Install dependencies
npm install

# Start development server
npm start
```

> **Note:** The CoolProp WASM binary (`coolprop.wasm`) must be present in the `src/` directory. It is included in the repository and loaded automatically at runtime.

---

## Author

**Tiago Ribolli Blasquez**  
[linkedin.com/in/tiagoribolli](https://www.linkedin.com/in/tiago-ribolli-blasquez-060810244) · [github.com/ribollitiago](https://github.com/ribollitiago)
