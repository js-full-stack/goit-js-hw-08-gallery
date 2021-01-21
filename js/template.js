import gallery from "./gallery-items.js";

export const createGalleryLayoutTemplate = gallery.map(
  ({ original, preview, description } = elements) => {
    const tagLiRef = document.createElement("li");
    tagLiRef.classList.add("gallery__item");

    const tagARef = document.createElement("a");
    tagARef.classList.add("gallery__link");
    tagARef.setAttribute("href", original);

    const tagImgRef = document.createElement("img");
    tagImgRef.classList.add("gallery__image");
    tagImgRef.dataset.source = original;
    tagImgRef.setAttribute("src", preview);
    tagImgRef.setAttribute("alt", description);

    tagLiRef.appendChild(tagARef);
    tagARef.appendChild(tagImgRef);
    return tagLiRef;
  }
);
