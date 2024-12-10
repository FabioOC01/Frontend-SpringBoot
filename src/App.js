import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderComponent } from "./components/HeaderComponent";
import { ProductoComponent } from "./components/ProductoComponent";
// Importa el componente ClienteComponent si ya está creado
import { AddClienteComponent } from "./components/AddClienteComponent";

function App() {
    return (
        <Router>
            <HeaderComponent />
            <div className="container mt-5">
                <Routes>
                    <Route path="/" element={<h1>Inicio</h1>} />
                    <Route path="/clientes" element={<h1>Gestión de Clientes</h1>} /> {<AddClienteComponent />}
                    <Route path="/productos" element={<ProductoComponent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
