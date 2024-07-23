// import { client } from "../lib/contentful";
import Header from "../components/Header";
import RecipeList from "../components/RecipeList";
import Hero2 from "../components/Hero2";
import { client } from "../lib/contentful";

const pageName = <h1>Recipes</h1>;
const subTitle = (
  <p>
    Know exaclty what you're looking for? search below, or choose from a variety
    of dishes
  </p>
);

export default function Recipes() {
  return (
    <>
      <Header />
      <Hero2 message={pageName} subMessage={subTitle} showInput={true} />
      <RecipeList />
    </>
  );
}

export const getStaticProps = async () => {
  const response = await client
    .getEntries({ content_type: "recipe" })
    .then((data) => {
      return data.json();
    });

  return {
    props: {
      recipes: response.items,
      revalidate: 70,
    },
  };
};
