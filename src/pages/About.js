import Header from "../components/Header";
import Hero from "../components/Hero";

const pageName = <h1>About Us</h1>;
const subTitle = (
  <p>
    Welcome to the About page. Here you can learn more about us and our mission.
  </p>
);

const About = () => {
  return (
    <>
      <Header />
      <Hero
        message={pageName}
        subMessage={subTitle}
        showInput={false}
        className="hero2-main"
      />
    </>
  );
};

export default About;
