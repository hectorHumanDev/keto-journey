import { Card, CardImg, CardBody } from "reactstrap";
import "../components/componentStyles/RecipeList.css";

const RecipeCard = ({ img, name }) => {
  return (
    <Card className="recipe-card">
      <CardImg src={img} height="250px" width="200px" />
      <br />
      <div className="recipe-description">
        <p>{name}</p>
        <span>Added by:</span>
      </div>
    </Card>
  );
};

export default RecipeCard;
