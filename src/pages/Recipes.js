// import { client } from "../lib/contentful";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import Hero from "../components/Hero";

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
      <Hero
        message={pageName}
        subMessage={subTitle}
        showInput={true}
        className="hero2-main"
      />
    </>
  );
};

export default Recipes;
