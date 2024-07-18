import Header from "../components/Header";
import "../App.css";
import Hero from "../components/Hero";
import ImageContainer from "../components/ImageContainer";

function Home() {
  return (
    <div>
      <Header />
      <main className="hero-main">
        <Hero />
        <ImageContainer />
      </main>
    </div>
  );
}

export default Home;
