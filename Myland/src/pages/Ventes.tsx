import FooterApp from "../components/footer/footer";
import Header from "../components/header/header";

function PageVentes() {
  return (
    <>
      <Header />
      <div className="containerApp">
        <div className="my-20 h-[200vh] flex justify-around">
          <div className="h-40 max-w-[1000px] bg-gradient-to-tr from-violet-800 to-violet-400">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              vero dolor quibusdam eveniet ex debitis quaerat repellendus hic
              voluptates laboriosam molestias quas, officiis sit ducimus
              perspiciatis dolorum, commodi architecto eos.
            </h2>
          </div>
          <div className="h-40 max-w-[300px] bg-gradient-to-tr sticky top-4 from-cyan-600 to-teal-200">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              vero dolor quibusdam eveniet ex debitis quaerat repellendus hic
              voluptates laboriosam molestias quas, officiis sit ducimus
              perspiciatis dolorum, commodi architecto eos.
            </h2>
          </div>
        </div>
      </div>
      <FooterApp />
    </>
  );
}

export default PageVentes;
