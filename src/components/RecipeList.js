import { heroImages } from "./ImageContainer";
import RecipeCard from "./RecipeCard";
import "../components/componentStyles/RecipeList.css";

export default function RecipeList({ content }) {
  return (
    <div className="recipe-cards-container">
      {content.map((recipe, index) => {
        const thumbnailUrl = recipe.fields.thumbnail.fields.file.url;
        const name = recipe.fields.nameOfDish;
        const description = recipe.fields.description;
        const { cookTime, servings } = recipe.fields;
        console.log(recipe);
        return (
          <RecipeCard
            img={thumbnailUrl}
            name={name}
            description={description}
            key={index}
            // cookTime={cookTime}
            // servings={servings}
          />
        );
      })}
    </div>
  );
}
