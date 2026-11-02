document.addEventListener("DOMContentLoaded", function () {
    const images = document.quenrySelectorAll(".gallery-image");
    const popup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");
    const popupCaption = document.getElementById("popupCaption");
    const closeButton = document.getElementById("closePopup");

    images.forEach(function (image) {
        image.addEventListener("click", function () {
            popup.style.display = "flex";

            popupImage.src = image.src;
            popupImage.alt = image.alt;

            popupCaption.textContent = image.src;
        });
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    closeButton.addEventListener("keydown", function (event) {
        if (event.key === "Escape"){
        popup.style.display = "none";
        }
    });

});