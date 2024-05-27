import {
  // Dispatch,
  // PropsWithChildren,
  // SetStateAction,

  useState,
} from "react";
// import HeaderNavbar from "./Headernavbar";

export default function HearderBTN() {
  const [burgerclicked, setBurgerclicked] = useState<boolean>(false);

  const handlerClikedBurger = () => {
    setBurgerclicked(!burgerclicked);
  };


  return (
    <div className="hidden Laptop:hidden mobil:mt-5 mobil:flex mobil:gap-4 MiniPortable:justify-center MiniPortable:flex MiniPortable:gap-4 MiniPortable:mt-8 Tablette:flex Tablette:gap-4 screenLarge:hidden">

        <button
          className="w-12 h-12 bg-yellow-300"
          onClick={handlerClikedBurger}
        >
          burger
        </button>

        <div className={burgerclicked ? "openBurgerMenu":"closeBurgerMenu"}>
          <button
            className=" text-center border rounded-full w-10 h-10 text-sm font-bold m-4 bg-red-500 absolute right-0"
            onClick={handlerClikedBurger}
          >
            x
          </button>
           <ul className="my-60">
              <li className="sousMenu">Home</li>
              <li className="sousMenu">services</li>
              <li className="sousMenu">a propos</li>
              <li className="sousMenu">contacts</li>
           </ul>
        </div>

      <button className="w-12 h-12 bg-orange-300">connec</button>
      <button className="w-12 h-12 bg-green-300">search</button>
    </div>
  );
}

