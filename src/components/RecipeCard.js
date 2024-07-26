import { Card, CardImg } from "reactstrap";
import "../components/componentStyles/RecipeList.css";

const RecipeCard = (props) => {
  const { img, name, description, tags } = props;

  return (
    <Card className="recipe-card">
      <CardImg src={img} height="250px" width="200px" />
      <br />
      <div className="recipe-description">
        <p>{name}</p>
        <span>{description}</span>
        <br />
        {/* {tags.map((tag, index) => {
          return <span key={index}>{tag}</span>;
        })} */}
      </div>
    </Card>
  );
};

export default RecipeCard;
