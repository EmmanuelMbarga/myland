import { PropsWithChildren } from "react";

const chevronR = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

type cardProps=PropsWithChildren<{
  iconCard:string
  text:string
}>

export default function CardService({iconCard,text}:cardProps) {
  return (
    <div className="cardNavigation">
      <div className="justify-center screenLarge:flex-none Laptop:flex-none mobil:flex mobil:justify-between mobil:items-center mobil:w-[600px] MiniPortable:m-auto ">
        <div>
          <img src={iconCard} className="text-center m-auto w-16 h-16"/>

          <p className="cardNavigationText">{text}</p>
        </div>

        <div className="border my-6 rounded-full w-10 h-10 p-2 m-auto mobil:m-0">{chevronR}</div>
      </div>
    </div>
  );
}

