import { updateLikes } from "./getLikes.js";

const render = async (data) => {
  data.forEach(async (e) => {
    const likes = await updateLikes(e.id);
    const list = document.getElementById("moviesList");
    list.innerHTML += `
    <div class="grid-items">
    <ul class="image-card">
    <img src="${e.image.original}" alt="">
    </ul>
    <div class="subtitles">
    <h4>${e.name} </h4>
    <i class="fa fa-heart like"><span class="span-icon" id="${e.id}">${likes}</span></i>
    </div>
    <button id="button">Comments</i></button>
    </div>
  `;
  });
};

export default render;
