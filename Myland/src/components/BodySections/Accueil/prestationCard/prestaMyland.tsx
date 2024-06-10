import CardPrestation_App from "./CardPrestation";

function PrestaMyland() {
  return (
    <>
      <section className=" bg-contain bg-right bg-no-repeat mt-32 py-40 bg-gradient-to-bl from-blue-600 to-orange-500 text-neutral-200 relative z-20">
        <div className="grid grid-cols-3 gap-10 max-w-[1000px] m-auto Tablette:max-w-[460px] Laptop:max-w-[900px] Laptop:mx-2 mobil:max-w-[400px] Tablette:grid-cols-2 mobil:grid-cols-1 MiniPortable:grid-cols-1 MiniPortable:mx-2">
          <div className="border p-10 Laptop:p-2 Tablette:p-2 MiniPortable:p-2">
            <h2 className="text-4xl font-bold capitalize Laptop:text-4xl Tablette:text-3xl MiniPortable:text-xl ">
              prestations inégalées. excellence inégalée.
            </h2>
          </div>
          <CardPrestation_App />
          <CardPrestation_App />
          <CardPrestation_App />
          <CardPrestation_App />
          <CardPrestation_App />
        </div>
        <div className="relative">
          <img
            src="http://localhost:4091/images/Myland.logo.png"
            alt="mylandLogo"
            className="absolute w-[500px] object-cover h-[500px] -bottom-80 -top-[250px] right-0"
          />
        </div>
      </section>
    </>
  );
}

export default PrestaMyland;
