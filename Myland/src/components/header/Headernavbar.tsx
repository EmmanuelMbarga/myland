import SearchBAR from "../../containers/searchBar/Search";

export default function HeaderNavbar() {
  return (
    <nav className="flex justify-center mt-4 Laptop:mt-4 Tablette:hidden mobil:hidden MiniPortable:hidden screenLarge:mt-4">
      <ul className="flex justify-center mr-0 border-white border-t Laptop:mr-0 Tablette:mr-0 screenLarge:mr-0">
        <li className="border-r px-20 py-2  cursor-pointer Laptop:px-10  Tablette:px-5 screenLarge:px-12">
          Home
        </li>
        <li className="border-r px-20 py-2 cursor-pointer Laptop:px-10 Tablette:px-5 screenLarge:px-12">
          services
        </li>
        <li className="border-r px-20 py-2 cursor-pointer Laptop:px-10 Tablette:px-5 screenLarge:px-12">
          A propos
        </li>
        <li className=" px-20 py-2 cursor-pointer Laptop:px-10 Tablette:px-5 screenLarge:px-12">
          contacts
        </li>
      </ul>
      {/* ------------------------------------search bar------------------------------------ */}
      <SearchBAR />
    </nav>
  );
}
