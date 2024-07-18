import "./componentStyles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-container lato-bold">
      <div className="hero-content">
        <h1>Your Journey Starts Here</h1>
        <p>
          Explore the options in the top right, or search for a recipe below
        </p>
        <br />
        <div className="input-container" style={{ display: "flex" }}>
          <input type="text" />
          <button>Find</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
