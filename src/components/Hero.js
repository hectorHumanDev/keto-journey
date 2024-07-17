import "./componentStyles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Your Journey Starts Here</h1>
        <p>
          Explore the options in the top right, or search for a recipe below
        </p>
        <br />
        <input type="text" />
        <button>Find</button>
      </div>
    </section>
  );
};

export default Hero;
