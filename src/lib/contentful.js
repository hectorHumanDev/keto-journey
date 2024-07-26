const contentful = require("contentful");

const client = contentful.createClient({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  space: process.env.REACT_APP_SPACE_ID,
});

export const fetchRecipes = async () => {
  try {
    const response = await client.getEntries({ content_type: "recipe" });
    console.log(response.items);
    const responseData = response.items;
    return responseData;
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    return [];
  }
};

export const getCarouselSlides = async () => {
  try {
    const response = client.getEntries({ content_type: "ketoCarousel" });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
