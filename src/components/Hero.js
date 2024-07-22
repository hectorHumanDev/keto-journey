import "./componentStyles/Hero.css";
import ImageContainer from "../components/ImageContainer";
import "./componentStyles/ImageContainer.css";

export const Input = () => {
  return (
    <div>
      <input type="text" />
      <button>Find</button>
    </div>
  );
};
const Hero = ({ message, subMessage, showInput, className }) => {
  return (
    <main className={`${className} lato-bold`}>
      <div className="left-hero-section">
        <h1>{message}</h1>
        <p>{subMessage}</p>
        {showInput && <Input />}
      </div>
      <ImageContainer />
    </main>
  );
};

export default Hero;
