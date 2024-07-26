// import { client } from "../lib/contentful";
import Header from "../components/Header";
import RecipeList from "../components/RecipeList";
import Hero2 from "../components/Hero2";
import { client, fetchRecipes } from "../lib/contentful";
import { useEffect, useState } from "react";

const pageName = <h1>Recipes</h1>;
const subTitle = (
  <p>
    Know exaclty what you're looking for? search below, or choose from a variety
    of dishes
  </p>
);

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const loadRecipes = async () => {
      const recipesData = await fetchRecipes();
      setRecipes(recipesData);
    };
    loadRecipes();
  }, []);

  return (
    <>
      <Header />
      <Hero2 message={pageName} subMessage={subTitle} showInput={true} />
      <br />
      <RecipeList content={recipes} />
    </>
  );
}
