import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDestination = document.querySelector(".gallery");

galleryDestination.addEventListener("click", showFullImage);

const createGallery = createImage(galleryItems);

function createImage(galleryItems) {
  return galleryItems
    .map((image) => {
      return `<div class="gallery__item">
  <a href="" class="gallery__link">
    <img src="${image.preview}" alt="${image.description}" class="gallery__image" />
  </a>
</div>`;
    })
    .join(" ");
}

galleryDestination.insertAdjacentHTML("beforeend", createGallery);

function showFullImage(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(evt.target);
  //   evt.src = "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg";
}
