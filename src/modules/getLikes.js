const likeIcon = document.getElementById("moviesList");
const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Jly4f1WO7wdijNbTj3up/likes";
export const postLikes = async (id) => {
  const postObject = { item_id: id };
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postObject),
  });
  return response;
};

export const getLikes = async () => {
  const likesData = await fetch(url);
  const allLikes = await likesData.json();
  return allLikes;
};

export const updateLikes = async (id) => {
  const storeLikes = await getLikes();
  let results = 0;
  storeLikes.forEach((e) => {
    if (e.item_id.toString() === id.toString()) {
      results = e.likes;
    }
  });
  return results;
};

export const addElement = (e) => {
  const currentNumber = e.innerText;
  e.innerText = parseInt(currentNumber, 10) + 1;
};

export const displayCounts = (myMovies) => {
  const counts = document.querySelector(".mymovies");
  counts.innerText = `${myMovies} Movies`;
};

likeIcon.addEventListener("click", (e) => {
  if (e.target.className === "fa fa-heart like") {
    const icon = e.target;
    const likeId = icon.parentNode.querySelector("span").id;
    const addElem = icon.parentNode.querySelector("span");
    postLikes(likeId);
    updateLikes(likeId);
    addElement(addElem);
  }
});
