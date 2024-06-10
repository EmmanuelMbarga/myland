import CardsHeader from "./Accueil/cardsHeader/cards";
import { CarousselApp } from "./Accueil/caroussels/Caroussel";
import DescristionMyland from "./Accueil/compagnyDesc/Descristion";
import PrestaMyland from "./Accueil/prestationCard/prestaMyland";

export default function BodyApp() {
  return (
    <section>
      <CardsHeader />
      <CarousselApp />
      <DescristionMyland />
      <PrestaMyland/>
    </section>
  );
}
