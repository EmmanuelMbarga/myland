export default function HeaderLogo() {


  return (
    <div className="flex gap-2 items-center mobil:flex-col MiniPortable:justify-center">
      <img
        src={"http://localhost:4091/images/Myland.logo.png"}
        className="border text-center pt-4 bg-white w-24 h-24  rounded-full mobil:w-20 mobil:h-20 MiniPortable:w-40 MiniPortable:h-40"
      />
      <div className="text-xs mobil:text-center mobil:invisible MiniPortable:hidden">
        <p>Myland-Immobilier</p>
        <p>created since 2009</p>
        <p>PDG MBESSE AMUGU ANTOINE</p>
      </div>
    </div>
  );
}
