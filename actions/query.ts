"use server";

export const getPageData = async (query: string) => {
  try {
    const response = await fetch("https://graphql.contentful.com/content/v1/spaces/q82hc8ycyued/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer v2Mv58e4elpWBBkHB59ZEN23kvMnEqGly7yFju44Dig",
      },
      body: JSON.stringify({ query }),
      cache: "force-cache",
    })
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
