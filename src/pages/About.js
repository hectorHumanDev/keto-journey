import Header from "../components/Header";
import ImageContainer from "../components/ImageContainer";
const About = () => {
  return (
    <div>
      <Header />
      <main className="hero-main">
        <section>
          <h1>About Us</h1>
          <p>
            Welcome to the About page. Here you can learn more about us and our
            mission.
          </p>
        </section>

        <ImageContainer />
      </main>
    </div>
  );
};

export default About;
