import HeaderLogo from "./Headerlogo";
import HeaderNavbar from "./Headernavbar";
import HearderBTN from "./Hearderbtn";
import Contact from "./contact";
const phonecall = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-9 h-9 text-green-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
    />
  </svg>
);
const map = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-9 h-9 text-red-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
);

export default function Header() {
  return (
    <header className="bg-[url(http://localhost:4091/images/LogoEntreprise2.jpg)] bg-no-repeat bg-cover max-w-[1500px] m-auto border bg-gray-500 pt-6 screenLarge:max-w-[1500px] screenLarge:m-auto Laptop:max-w-[1500px] Laptop:m-auto Tablette:max-w-[1500px] Tablette:m-auto mobil:max-w-[700px] mobil:m-auto MiniPortable:max-w-[500px] MiniPortable:m-auto">
      <div className="flex justify-around Tablette:border-b Tablette:pb-2 mobil:flex-row-reverse mobil:mx-3 MiniPortable:flex-col">
        <HeaderLogo />
        <div className="flex Tablette:hidden mobil:hidden MiniPortable:hidden">
          <Contact
            icon={phonecall}
            infos1={"+237 693 47 22 70"}
            infos2={"mbesseAmugu@gamil.com"}
          />
          <Contact
            icon={map}
            infos1={"Yaounde, cameroun"}
            infos2={"Mimboman IV"}
          />
        </div>
        {/* -----------------------------------------burgerBtn----------------------------------------- */}
        <HearderBTN />
      </div>

      {/* ---------------------------------------navbar--------------------------------------- */}
      <HeaderNavbar />

      <div className="uppercase font-bold text-center my-40">
        <p className="text-sm text-white">ships anything</p>
        <p className="text-3xl text-white">around the world</p>
        <button className="border uppercase px-6 py-1 rounded-3xl my-4 text-sm text-blue-500 bg-white">
          go it {">"}
        </button>
      </div>
    </header>
  );
}
