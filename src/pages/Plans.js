// import { client } from "../lib/contentful";
import Header from "../components/Header";
import Hero2 from "../components/Hero2";

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
      <Hero2 message={pageName} subMessage={subTitle} showInput={true} />
    </>
  );
};

export default Plans;
