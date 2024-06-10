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

export const MultiCarousselApp = () => {
  return (
    <>
      <div className="cursor-pointer rounded-lg hover:shadow-xl border hover:border-none hover:bg-blue-600 hover:text-white hover:scale-110 hover:relative hover:z-20 transition-[0.8s] MiniPortable:hover:scale-90 mobil:hover:scale-90">
        <img
          src="http://localhost:4091/images/slider/terrain.jpg"
          className="rounded-lg"
        />
        <div className="p-4 hover:text-white">
          <h2 className=" my-4 text-lg font-bold ">Lorem ipsum dolor sit.</h2>
          <p className="font-inter text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aperiam
            amet libero eius optio velit quasi numquam similique! Optio,
            consequatur!
          </p>

          <div className="border my-6 rounded-full w-10 h-10 p-2 mobil:m-0">
            {chevronR}
          </div>
        </div>
      </div>
      <div className="cursor-pointer rounded-lg hover:shadow-xl border hover:border-none hover:bg-blue-600 hover:text-white hover:scale-110 hover:relative hover:z-20 transition-[0.8s] MiniPortable:hover:scale-90 mobil:hover:scale-90">
        <img
          src="http://localhost:4091/images/slider/engin.jpg"
          className="rounded-lg"
        />
        <div className="p-4 hover:text-white">
          <h2 className=" my-4 text-lg font-bold ">Lorem ipsum dolor sit.</h2>
          <p className="font-inter text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aperiam
            amet libero eius optio velit quasi numquam similique! Optio,
            consequatur!
          </p>

          <div className="border my-6 rounded-full w-10 h-10 p-2 mobil:m-0">
            {chevronR}
          </div>
        </div>
      </div>
    </>
  );
};
