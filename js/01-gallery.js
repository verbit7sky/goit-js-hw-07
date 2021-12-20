import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divGallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
      />
    </a>
  </div>`
  )
  .join("");

divGallery.insertAdjacentHTML("beforeend", galleryMarkup);

divGallery.addEventListener("click", modalOpen);

const instance = basicLightbox.create(`<img src="" />`);

function modalOpen(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const image = instance.element().querySelector("img");
  image.src = e.target.getAttribute("data-source");

  instance.show();

  window.addEventListener("keydown", closeEsc);
}

function closeEsc(e) {
  if (!(e.code === "Escape")) {
    return;
  }

  instance.close();

  window.removeEventListener("keydown", closeEsc);
}
