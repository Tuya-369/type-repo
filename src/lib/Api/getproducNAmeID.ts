export const getproducNAmeID = async (movie) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${movie.id}/credits?language=en-US`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
      },
    });

    const data = await response.json();
    console.log("Creditttt:", data);

    return data;
  } catch (error) {}
};
