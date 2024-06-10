import SearchBAR from "../../containers/searchBar/Search";
import { Link } from "react-router-dom";

export default function HeaderNavbar() {
  return (
    <nav className="flex justify-center mt-4 Laptop:mt-4 Tablette:hidden mobil:hidden MiniPortable:hidden screenLarge:mt-4">
      <ul className="flex justify-center mr-0 border-white border-t Laptop:mr-0 Tablette:mr-0 screenLarge:mr-0">
        <Link to={"/"}>
          <li className="border-r text-xl hover:rounded-b-lg  text-white font-inter hover:bg-blue-500 hover:bg-opacity-50 transition-[0.8s] px-20 py-2  cursor-pointer Laptop:px-[32px]  Tablette:px-5 screenLarge:px-12">
            Home
          </li>
        </Link>
        <Link to={"/services"}>
          <li className="border-r text-xl px-20  text-white font-inter hover:bg-blue-500 hover:bg-opacity-50 transition-[0.8s]  py-2 cursor-pointer Laptop:px-[32px] Tablette:px-5 screenLarge:px-12">
            services
          </li>
        </Link>

        <Link to={"/Apropos"}>
          <li className="border-r text-xl px-20  text-white font-inter hover:bg-blue-500 hover:bg-opacity-50 transition-[0.8s]  py-2 cursor-pointer Laptop:px-[32px] Tablette:px-5 screenLarge:px-12">
            A propos
          </li>
        </Link>
        <Link to={"/contacts"}>
          <li className=" px-20 text-xl py-2  text-white font-inter hover:bg-blue-500 hover:bg-opacity-50 transition-[0.8s]  cursor-pointer Laptop:px-[32px] Tablette:px-5 screenLarge:px-12">
            contacts
          </li>
        </Link>
      </ul>
      {/* ------------------------------------search bar------------------------------------ */}
      <SearchBAR />
    </nav>
  );
}
