import Header from "../components/Header";
import Hero from "../components/Hero";
import "../components/componentStyles/Hero.css";

const pageName = <h1>Our Journey</h1>;
const subTitle = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Nunc vel risus commodo
    viverra. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla.
    Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Eu
    sem integer vitae justo eget magna. Aliquet sagittis id consectetur purus ut
    faucibus pulvinar elementum.
  </p>
);

const Journey = () => {
  return (
    <>
      <Header />
      <Hero
        message={pageName}
        subMessage={subTitle}
        showInput={false}
        className="hero2-main"
      />
    </>
  );
};

export default Journey;
