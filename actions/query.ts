"use server";

export const getPageData = async (query: string) => {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENT_DELIVERY_API}`,
        },
        body: JSON.stringify({ query }),
        cache: "force-cache",
      }
    )
      .then((res) => res.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        const result = data.pageCollection.items[0];
        return result;
      });
    return response;
  } catch (error) {
    console.error(error);
  }
};
