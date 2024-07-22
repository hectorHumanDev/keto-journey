import Header from "../components/Header";
import ImageContainer from "../components/ImageContainer";
import "../components/componentStyles/Hero.css";
const Journey = () => {
  return (
    <div>
      <Header />
      <main className="hero-main">
        <section>
          <h1>Our Journey</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc vel
            risus commodo viverra. Adipiscing commodo elit at imperdiet dui
            accumsan sit amet nulla. Viverra tellus in hac habitasse platea
            dictumst vestibulum rhoncus est. Eu sem integer vitae justo eget
            magna. Aliquet sagittis id consectetur purus ut faucibus pulvinar
            elementum. Facilisis magna etiam tempor orci eu lobortis elementum
            nibh. Sodales ut eu sem integer vitae justo eget. Venenatis urna
            cursus eget nunc scelerisque. In fermentum posuere urna nec
            tincidunt praesent semper. Dui vivamus arcu felis bibendum ut
            tristique et egestas. Felis donec et odio pellentesque diam volutpat
            commodo sed egestas. Et odio pellentesque diam volutpat. Aliquet
            porttitor lacus luctus accumsan tortor posuere ac ut consequat. Id
            volutpat lacus laoreet non curabitur gravida arcu ac. Sit amet nisl
            purus in mollis. Tincidunt praesent semper feugiat nibh sed pulvinar
            proin gravida. Malesuada bibendum arcu vitae elementum curabitur
            vitae nunc sed velit. Consectetur a erat nam at lectus. Maecenas sed
            enim ut sem viverra.
          </p>
        </section>
        <ImageContainer />
      </main>
    </div>
  );
};

export default Journey;
