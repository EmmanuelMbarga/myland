import WebAppLogo from "./webApp";

export default function FooterLogo() {
  return (
    <>
      <div className="mx-2">
        <div className="flex font-DancingScript items-center -ml-10 MiniPortable:-ml-4 MiniPortable:gap-4">
          <img
            src="http://localhost:4091/images/Myland.logo.png"
            alt="Myland"
            className="w-40 h-40 MiniPortable:w-20 MiniPortable:h-20"
          />
          <div className="text-sm -ml-8 MiniPortable:text-xs">
            <p>Myland-Immobilier</p>
            <p>created since 2009</p>
            <p>PDG MBESSE AMUGU ANTOINE</p>
          </div>
        </div>
        <p className="text-sm font-inter">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ab,
          doloribus quo soluta sed reiciendis veniam explicabo! Veritatis ipsum
          perferendis vel, ipsa distinctio, minus officia ullam in voluptatibus
          natus tempora?
        </p>

        <div className="flex mt-8">
            <WebAppLogo logoApp="http://localhost:4091/images/app_logo/Fichier 2.png" alt="whatsapp"/>
            <WebAppLogo logoApp="http://localhost:4091/images/app_logo/Fichier 5.png" alt="facebook"/>
            <WebAppLogo logoApp="http://localhost:4091/images/app_logo/Fichier 9.png" alt="linkIn"/>
        </div>
      </div>
    </>
  );
}
