import { heroImages } from "./ImageContainer";
import { client, fetchRecipes } from "../lib/contentful";
import RecipeCard from "./RecipeCard";
import "../components/componentStyles/RecipeList.css";
import { useEffect, useState } from "react";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const loadRecipes = async () => {
      const recipesData = await fetchRecipes();
      setRecipes(recipesData);
    };
    loadRecipes();
  }, []);

  return (
    <div className="recipe-cards-container">
      {recipes.map((recipe, index) => {
        const thumbnailUrl = recipe.fields.thumbnail.fields.file.url;
        return (
          <RecipeCard
            img={thumbnailUrl}
            description={recipe.fields.nameOfDish}
            key={index}
          />
        );
      })}
    </div>
  );
}
