const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const images = Array.from(document.querySelectorAll(".gallery img"));
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndex].dataset.full;
}

function closeLightbox() {
    lightbox.style.display = "none";
    lightboxImg.src = "";
}

function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].dataset.full;
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].dataset.full;
}

images.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
});

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
});

prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);
