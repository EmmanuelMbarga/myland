import {BrowserRouter,Route,Routes} from "react-router-dom"
import Accueil from "../pages/Accueil" 

export default function RouterApp() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Accueil/>} />
    </Routes>
  </BrowserRouter>
  )
}
