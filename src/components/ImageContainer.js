import "./componentStyles/ImageContainer.css";
import foodCounter from "../assets/food-counter2.jpg";

const ImageContainer = () => {
  return (
    <section>
      <div>
        <img
          src={foodCounter}
          alt="assortment of fresh foods on marble counter-top"
        />
      </div>
    </section>
  );
};

export default ImageContainer;
