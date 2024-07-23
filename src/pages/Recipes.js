// import { client } from "../lib/contentful";
import Header from "../components/Header";
// import RecipeCard from "../components/RecipeCard";
import Hero2 from "../components/Hero2";

const pageName = <h1>Recipes</h1>;
const subTitle = (
  <p>
    Know exaclty what you're looking for? search below, or choose from a variety
    of dishes
  </p>
);

const Recipes = () => {
  return (
    <>
      <Header />
      <Hero2 message={pageName} subMessage={subTitle} showInput={true} />
    </>
  );
};

export default Recipes;
