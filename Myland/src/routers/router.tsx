import {BrowserRouter,Route,Routes} from "react-router-dom"
import Accueil from "../pages/Accueil" 
// import PageVentes from "../pages/Ventes"

export default function RouterApp() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Accueil/>} />
        {/* <Route path="/services" element={'service page'} />
        <Route path="/Apropos" element={'a propos page'} />
        <Route path="/contacts" element={'contacts page'} />
        <Route path="/Espace&Vente" element={<PageVentes/>} /> */}
    </Routes>
  </BrowserRouter>
  )
}
