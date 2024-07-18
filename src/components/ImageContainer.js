import "./componentStyles/ImageContainer.css";
import foodCounter from "../assets/food-counter2.jpg";
import avocadoOil from "../assets/avocado-oil.jpg";
import avocadoSalt from "../assets/avocado-salt.jpg";
import avocadoToast from "../assets/avocado-toast.jpg";
import threePlatesSalmon from "../assets/three-plates-salmon.jpg";
import fruitBowls from "../assets/fruit-bowls.jpg";
import cottageCheese from "../assets/cottage-cheese.jpg";
import sweetPotato from "../assets/sweet-potato.jpg";
import fruitTopped from "../assets/fruit-topped.jpg";
import benedictWaffle from "../assets/benedict-waffles.jpg";
import cheeseBoard from "../assets/cheese-board.jpg";
import { useEffect, useState } from "react";

const heroImages = [
  { uri: foodCounter, alt: "assortment of fresh foods on marble counter" },
  { uri: avocadoOil, alt: "avocado split in half on marble counter" },
  {
    uri: avocadoSalt,
    alt: "avocado split in half along with mortar filled with pink salt on marble counter",
  },
  {
    uri: avocadoToast,
    alt: "plate with avocado toast topped with salmon on marble counter",
  },
  {
    uri: threePlatesSalmon,
    alt: "assortment of fresh foods on marble counter",
  },
  {
    uri: fruitBowls,
    alt: "two bowls and one plate filled with an assortment of fresh fruit on marble counter",
  },
  {
    uri: cottageCheese,
    alt: "closeup shot of cottage cheese with chives in bowl",
  },
  {
    uri: sweetPotato,
    alt: "bowl of noodles with sweet potato and garnish marble counter",
  },
  {
    uri: benedictWaffle,
    alt: "plate of eggs benedict with a side of vegetables, and plate of waffles on marble counter",
  },
  {
    uri: cheeseBoard,
    alt: "assortment of bowls, along with charcuterie board on marble counter",
  },
  {
    uri: fruitTopped,
    alt: "assortment of bowls, along with charcuterie board on marble counter",
  },
];

const ImageContainer = () => {
  const [heroImage, setHeroImage] = useState({ uri: "", alt: "" });

  useEffect(() => {
    const randomImage =
      heroImages[Math.floor(Math.random() * heroImages.length)];
    setHeroImage(randomImage);
  }, []);

  return (
    <section className="container">
      <div>
        <img
          src={heroImage.uri}
          alt={heroImage.alt}
          width="120%"
          height="120%"
        />
      </div>
    </section>
  );
};

export default ImageContainer;
