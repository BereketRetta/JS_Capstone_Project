const getMovies = async () => {
  const moviesData = await fetch("https://api.tvmaze.com/shows?page=2");
  const allData = await moviesData.json();

  const data = allData.slice(0, 10).map((item) => item);
  return data;
};

export default getMovies;
