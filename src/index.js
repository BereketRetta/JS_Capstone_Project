import "./style.css";
import getMovies from "./modules/apiCall.js";
import render from "./modules/renderStructure.js";
import { postLikes, getLikes, displayCounts } from "./modules/getLikes.js";
import moviesCounter from "./modules/itemsCounter.js";

const starter = async () => {
  const data = await getMovies();
  await render(data);
  const films = moviesCounter(data);
  displayCounts(films);
  await getLikes();
  data.forEach((e) => postLikes(e.id));
};

starter();
