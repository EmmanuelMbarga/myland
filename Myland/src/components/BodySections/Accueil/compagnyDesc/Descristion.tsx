import { MultiCarousselApp } from "../caroussels/MultiCaroussel";


export default function DescristionMyland() {
  return (
    <section className=" max-w-[1000px] m-auto  Tablette:max-w-[460px] Laptop:max-w-[900px] mobil:max-w-[400px]   ">
    <div className="mobil:mx-2 grid-cols-3  grid  gap-10 Tablette:gap-5 Laptop:mx-10 Laptop:gap-3 Tablette:grid-cols-2 mobil:gap-2 mobil:grid-cols-1 MiniPortable:grid-cols-1 MiniPortable:mx-2">
      <div>
        <h2 className="uppercase text-3xl text-blue-900 font-bold text-left Tablette:text-lg mobil:text-xl MiniPortable:text-lg">
          entreprise de financement des procedures foncieres avec une
          innovation différente.
        </h2>
        <div>
          <p className="my-5  font-inter ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi reiciendis pariatur sed hic sapiente, aliquid eaque.
            Ipsam, a, pariatur dolor voluptatum atque aspernatur non cum
            quod porro officia possimus quia.
          </p>
        </div>

        <div className="font-inter mobil:text-sm">
          <p className="text-blue-900 font-bold">
            Lorem ipsum dolor sit amet
          </p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <MultiCarousselApp/>
    </div>
  </section>
  )
}
