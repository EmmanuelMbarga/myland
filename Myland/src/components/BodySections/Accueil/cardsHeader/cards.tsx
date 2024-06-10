import CardService from "./cardService";
// import {Link} from "react-router-dom"


export default function CardsHeader() {
  return (
    <section className=" max-w-[771px] grid grid-cols-5 m-auto -mt-28 justify-center h-40 text-blue-800 Tablette:max-w-[500px] Tablette:grid Tablette:grid-cols-3 mobil:max-w-[400px] mobil:grid-cols-1 MiniPortable:grid MiniPortable:grid-cols-1">
        {/* <Link to={'Espace&Vente'}></Link>  */}
        <CardService iconCard={'http://localhost:4091/images/logos/cardNav/money.svg'} text={"Espace en vente"}/>
        <CardService iconCard={'http://localhost:4091/images/logos/cardNav/file-and-folder.png'} text={"dossier technique"}/>
        <CardService iconCard={'http://localhost:4091/images/logos/cardNav/cooperation.svg'} text={"nouveau partenariat"}/>
        <CardService iconCard={'http://localhost:4091/images/logos/cardNav/loi.png'} text={"assistance juridique"}/>
        <CardService iconCard={'http://localhost:4091/images/logos/cardNav/parametres-cog.png'} text={"autres options"}/>
    </section>
  )
}
