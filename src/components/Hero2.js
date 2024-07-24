import "./componentStyles/Hero2.css";
import ImageContainer from "./ImageContainer";
import fruitCounterLong from "../assets/fruit-counter-long.jpg";
import { Input } from "./Hero";

const Hero2 = ({ message, subMessage, showInput }) => {
  return (
    <main className="hero2-main lato-bold">
      <div className="left-hero-section">
        <h1>{message}</h1>
        <p>{subMessage}</p>
        {showInput && <Input />}
      </div>
      <img
        className="hero2-img"
        src={fruitCounterLong}
        alt="fresh fruit on white counter"
        width={1800}
        height={500}
      />
      {/* <ImageContainer showInput={showInput} width={640} height={250} /> */}
    </main>
  );
};

export default Hero2;
