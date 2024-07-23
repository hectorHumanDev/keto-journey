import { Card, CardImg, CardBody } from "reactstrap";
import "../components/componentStyles/RecipeList.css";
// import foodCounter from "../assets/food-counter.jpg";

const RecipeCard = ({ img, description }) => {
  return (
    <Card className="recipe-card">
      <CardImg src={img} height="250px" width="200px" />

      <p className="recipe-description">{description}</p>
    </Card>
  );
};

export default RecipeCard;
