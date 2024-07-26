import { heroImages } from "./ImageContainer";
import RecipeCard from "./RecipeCard";
import "../components/componentStyles/RecipeList.css";

export default function RecipeList({ content }) {
  return (
    <div className="recipe-cards-container">
      {content.map((recipe, index) => {
        const thumbnailUrl = recipe.fields.thumbnail.fields.file.url;
        return (
          <RecipeCard
            img={thumbnailUrl}
            name={recipe.fields.nameOfDish}
            key={index}
          />
        );
      })}
    </div>
  );
}
