import { heroImages } from "./ImageContainer";
import RecipeCard from "./RecipeCard";
import "../components/componentStyles/RecipeList.css";

function RecipeList() {
  return (
    <div className="recipe-cards-container">
      {heroImages.map((recipe, index) => {
        return (
          <RecipeCard img={recipe.uri} description={recipe.alt} key={index} />
        );
      })}
    </div>
  );
}

export default RecipeList;
