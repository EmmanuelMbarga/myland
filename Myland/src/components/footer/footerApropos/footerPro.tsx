export default function FooterPro() {
  return (
    <>
      <div className="mx-10 mobil:mx-7 Laptop:mx-5 ">
        <h3 className=" pt-10">a propos</h3>
        <ul className="list-disc mt-6 font-inter text-sm MiniPortable:text-xs mobil:text-xs">
          <li className="mt-4 MiniPortable:mt-2 mobil:mt-2">
            date de creation
          </li>
          <li className="mt-4 MiniPortable:mt-2 mobil:mt-2">
            PDG de l'entreprise
          </li>
          <li className="mt-4 MiniPortable:mt-2 mobil:mt-2">localisation</li>
        </ul>
      </div>
    </>
  );
}
