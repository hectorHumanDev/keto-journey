import { Card, CardImg, CardBody } from "reactstrap";
import foodCounter from "../assets/food-counter.jpg";

const RecipeCard = () => {
  return (
    <Card>
      <CardImg src={foodCounter} height="250px" width="200px" />
      <CardBody>
        <p>Recipe description here</p>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
