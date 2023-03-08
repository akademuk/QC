var popup = document.getElementById("popup");

function showPopup() {
  popup.style.display = "flex";
}

function hidePopup() {
  popup.style.display = "none";
}

document.getElementById("btn-open-popup").addEventListener("click", showPopup);
document.getElementById("btn-close-popup").addEventListener("click", hidePopup);
