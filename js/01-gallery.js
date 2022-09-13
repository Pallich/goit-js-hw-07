import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDestination = document.querySelector(".gallery");

galleryDestination.addEventListener("click", showFullImage);

const createGallery = createImage(galleryItems);
// galleryDestination.insertAdjacentHTML("beforeend", createGallery);
galleryDestination.innerHTML = createGallery;

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

function showFullImage(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  evt.preventDefault();
  console.log(evt.target);
  //   const targetedImgUrl = evt.target.dataset.source;
  //   const instance = basicLightbox.create(`
  //       <img src="${targetedImgUrl}" width="800" height="600">
  //   `);

  //   instance.show();

  //   evt.src = "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg";
}
