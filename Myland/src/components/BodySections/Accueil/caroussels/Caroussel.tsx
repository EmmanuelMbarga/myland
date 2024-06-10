import { useEffect, useState } from "react";

export const CarousselApp = () => {
  const [slideBloc1, setSliderBloc1] = useState<boolean>(true);
  const [slideBloc2, setSliderBloc2] = useState<boolean>(false);
  const [slideBloc3, setSliderBloc3] = useState<boolean>(false);

  const handlerSlideClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;

    if (target.id == "slider1") {
      setSliderBloc1(true);
      setSliderBloc2(false);
      setSliderBloc3(false);
    }
    if (target.id == "slider2") {
      setSliderBloc1(false);
      setSliderBloc2(true);
      setSliderBloc3(false);
    }
    if (target.id == "slider3") {
      setSliderBloc1(false);
      setSliderBloc2(false);
      setSliderBloc3(true);
    }
  };

  useEffect(() => {
    slideBloc1;
    slideBloc2;
    slideBloc3;
  }, []);

  return (
    <section className="mt-60 max-w-[1000px] m-auto  Tablette:max-w-[460px] mobil:max-w-[300px] ">
      <h3 className="text-center text-3xl font-bold capitalize text-blue-900 Tablette:mt-[28rem] mobil:mt-[42rem] MiniPortable:mt-[70rem] MiniPortable:text-xl">
        que cherchez-vous ?
      </h3>

      <section className=" flex justify-evenly mt-10 mobil:gap-2 mobil:mx-2 MiniPortable:gap-1">
        <div className="sliderTitleStyle">
          <h4>experience & leadership</h4>
          <button
            className={slideBloc1 ? "sliderButtonOn" : "sliderButtonOff"}
            onClick={handlerSlideClicked}
            id="slider1"
          ></button>
        </div>

        <div className="sliderTitleStyle">
          <h4>assurance & confiance</h4>
          <button
            className={slideBloc2 ? "sliderButtonOn" : "sliderButtonOff"}
            onClick={handlerSlideClicked}
            id="slider2"
          ></button>
        </div>

        <div className="sliderTitleStyle">
          <h4>assurance & confiance</h4>

          <button
            className={slideBloc3 ? "sliderButtonOn" : "sliderButtonOff"}
            onClick={handlerSlideClicked}
            id="slider3"
          ></button>
        </div>
      </section>
      <>
        {(slideBloc1 && (
          <Caroussel
            SlideStyle1={"sliderStyle1"}
            SlideStyle2={"sliderStyle2"}
            SlideStyle3={"sliderStyle3"}
            sliderText1={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            fugit inventore unde ullam at. Provident minima rem facilis`}
            sliderText2={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            fugit inventore unde ullam at. Provident minima rem facilis`}
            picture1={"http://localhost:4091/images/slider/engin.jpg"}
            picture2={"http://localhost:4091/images/slider/terrain.jpg"}
            picture3={"http://localhost:4091/images/slider/manexperience.jpg"}
          />
        )) ||
          (slideBloc2 && (
            <Caroussel
              SlideStyle1={"sliderStyle1"}
              SlideStyle2={"sliderStyle2"}
              SlideStyle3={"sliderStyle3"}
              sliderText1={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            fugit inventore unde ullam at. Provident minima rem facilis`}
              sliderText2={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            fugit inventore unde ullam at. Provident minima rem facilis`}
              picture1={
                "http://localhost:4091/images/slider/LogoEntreprise1.jpg"
              }
              picture2={"http://localhost:4091/images/slider/manexperience.jpg"}
              picture3={"http://localhost:4091/images/slider/EmmaMB2.jpg"}
            />
          )) ||
          (slideBloc3 && (
            <Caroussel
              SlideStyle1={"sliderStyle1"}
              SlideStyle2={"sliderStyle2"}
              SlideStyle3={"sliderStyle3"}
              sliderText1={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            fugit inventore unde ullam at. Provident minima rem facilis`}
              sliderText2={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            fugit inventore unde ullam at. Provident minima rem facilis`}
              picture1={"http://localhost:4091/images/slider/contactAssist.jpg"}
              picture2={
                "http://localhost:4091/images/slider/LogoEntreprise1.jpg"
              }
              picture3={"http://localhost:4091/images/slider/celebation.jpg"}
            />
          ))}
      </>
    </section>
  );
};

interface sliderProps {
  SlideStyle1: string;
  SlideStyle2: string;
  SlideStyle3: string;
  sliderText1: string;
  sliderText2: string;
  picture1: string;
  picture2: string;
  picture3: string;
}

const Caroussel = ({
  SlideStyle1,
  SlideStyle2,
  SlideStyle3,
  sliderText1,
  sliderText2,
  picture1,
  picture2,
  picture3,
}: sliderProps) => {
  return (
    <>
      <div className="my-36 mx-10 gap-4 flex translate-x-0 items-center Tablette:mt-14 Tablette:mb-48 Tablette:mx-0 Tablette:gap-5 mobil:mx-0 mobil:my-20 mobil:flex-col MiniPortable:mx-0 MiniPortable:flex-col MiniPortable:my-14 ">
        <div className="flex relative ">
          <div className={SlideStyle1}>
            <img
              src={picture1}
              alt="engin"
              className="w-80 h-80 object-cover rounded-md shadow-lg shadow-gray-400"
            />
          </div>
          <div className={SlideStyle2}>
            <img
              src={picture2}
              alt="engin"
              className="w-80 h-80 object-cover rounded-md shadow-lg shadow-gray-900"
            />
          </div>
          <div className={SlideStyle3}>
            <img
              src={picture3}
              alt="engin"
              className="w-80 h-80 object-cover rounded-md shadow-xl shadow-blue-400"
            />
          </div>
        </div>
        <div className="text-md font-inter Tablette:text-sm Tablette:text-justify mobil:px-4 MiniPortable:px-4">
          <p>{sliderText1}</p>
          <br />
          <p>{sliderText2}</p>
        </div>
      </div>
    </>
  );
};
