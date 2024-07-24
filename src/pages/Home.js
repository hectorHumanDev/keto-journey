import Header from "../components/Header";
import "../App.css";
import "../components/componentStyles/Hero2.css";

import Hero2 from "../components/Hero2";

export default function Home({ recipes }) {
  const message = "Your Journey Starts Here";
  const subMessage =
    "Explore the options in the top right, or search for a recipe below";
  return (
    <div>
      <Header />
      <Hero2
        message={message}
        subMessage={subMessage}
        showInput={true}
        className="hero2-main"
      />
    </div>
  );
}
