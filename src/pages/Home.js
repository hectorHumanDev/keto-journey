import Header from "../components/Header";
import "../App.css";
import "../components/componentStyles/Hero.css";

import Hero from "../components/Hero";

export default function Home({ recipes }) {
  const message = "Your Journey Starts Here";
  const subMessage =
    "Explore the options in the top right, or search for a recipe below";
  return (
    <div>
      <Header />
      <Hero
        message={message}
        subMessage={subMessage}
        showInput={true}
        className="hero-main"
      />
    </div>
  );
}
