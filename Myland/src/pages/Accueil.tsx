import BodyApp from "../components/BodySections/bodyApp";
import FooterApp from "../components/footer/footer";
import Header from "../components/header/header";

export default function Accueil() {
  return (
    <>
      <Header />
      <div className="containerApp">
        <BodyApp />
      </div>
      <FooterApp />
    </>
  );
}
