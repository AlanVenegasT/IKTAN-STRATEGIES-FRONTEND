import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import LandingLayout from "./layouts/LandingLayout";
import Capacitacion from "./pages/Capacitacion";
import Gestionregulatoria from "./pages/Gestionregulatoria";
import Landingpage from "./pages/Landingpage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas publicas */}
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Landingpage/>} />
          <Route path="/Capacitacion" element={<Capacitacion/>} />
          <Route path="/Gestionregulatoria" element={<Gestionregulatoria/>} />
          
          <Route path="/" element={<Footer/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
