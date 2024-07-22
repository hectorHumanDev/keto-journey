// import { client } from "../lib/contentful";
import Header from "../components/Header";
import Hero from "../components/Hero";

const pageName = <h1>Meal plans</h1>;
const subTitle = (
  <p>
    Discover a variety of recipes that you can try out. From appetizers to
    desserts, we have something for everyone.
  </p>
);

const Plans = () => {
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

export default Plans;
