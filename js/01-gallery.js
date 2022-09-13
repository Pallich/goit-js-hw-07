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
    <img src="${image.preview}" 
    data-source = '${image.original}'
    alt="${image.description}" 
    class="gallery__image" />
  </a>
</div>`;
    })
    .join(" ");
}

function showFullImage(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG" && evt.currentTarget.nodeName !== "IMG") {
    return;
  }

  const newUrl = evt.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${newUrl}" >`);
  instance.show(
    document.addEventListener("keydown", (evt) => {
      if (evt.code === "Escape") {
        instance.close();
      }
    })
  );
}
