import { createGalleryLayoutTemplate } from "./template.js";

const galleryListRef = document.querySelector(".js-gallery");
const modalWindowRef = document.querySelector(".js-lightbox");
const originImgModalWindowRef = document.querySelector(".lightbox__image");
const backdropRef = document.querySelector(".lightbox__overlay");
const closeModalBtnRef = document.querySelector(
  '[data-action="close-lightbox"]'
);

galleryListRef.append(...createGalleryLayoutTemplate);

galleryListRef.addEventListener("click", openOriginalImgOnClick);
closeModalBtnRef.addEventListener("click", onCloseModal);
backdropRef.addEventListener("click", onCloseModal);

function openOriginalImgOnClick(event) {
  event.preventDefault();

  const tagName = event.target.nodeName;
  const originalImg = event.target.dataset.source;
  const altImgRef = event.target.alt;

  if (tagName === "IMG") {
    modalWindowRef.classList.add("is-open");
    originImgModalWindowRef.setAttribute("src", originalImg);
    originImgModalWindowRef.setAttribute("alt", altImgRef);
    window.addEventListener("keydown", onPressEscape);
  }
}

function onCloseModal() {
  modalWindowRef.classList.remove("is-open");
  originImgModalWindowRef.removeAttribute("src");
  originImgModalWindowRef.removeAttribute("alt");
  window.removeEventListener("keydown", onPressEscape);
}

function onPressEscape(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}
