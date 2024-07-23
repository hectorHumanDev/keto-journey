const contentful = require("contentful");

const client = contentful.createClient({
  accessToken: "pAWKxaRsYGtb_lo0HK7SnwNBqqQ6azncGViApj7eQ0I",
  space: "pdt9xnjoa5wh",
});

export const fetchRecipes = async () => {
  try {
    const response = await client.getEntries({ content_type: "recipe" });
    return response.items;
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    return [];
  }
};
