import FooterPro from "./footerApropos/footerPro";
import FooterLogo from "./footerLogo/footerLogo";
import FooterService from "./footerService/footerService";
import FooterSuscribe from "./footerSuscribe/footerSuscribe";

export default function FooterApp() {
  return (
    <>
      <footer className="bg-blue-950 mt-20 py-40 text-white">
        <div className=" max-w-[1000px] m-auto Tablette:max-w-[460px] Laptop:max-w-[900px] Laptop:mx-2 mobil:max-w-[400px]  MiniPortable:mx-2">
          <div className="grid grid-cols-4 gap-4 Tablette:grid-cols-2 mobil:grid-cols-1 MiniPortable:grid-cols-1">
            <FooterLogo />
            <FooterService />
            <FooterPro />
            <FooterSuscribe />
          </div>
        </div>
      </footer>
    </>
  );
}
