var popup = document.getElementById("popup");

function showPopup() {
  popup.style.display = "flex";
}

function hidePopup() {
  popup.style.display = "none";
}

document.getElementById("btn-open-popup").addEventListener("click", showPopup);
document.getElementById("btn-close-popup").addEventListener("click", hidePopup);



// Находим элементы на странице
var myModalCredit = document.getElementById("myModalCredit");
var btn = document.getElementById("myModalCreditBtn");
var span = document.getElementsByClassName("myModalCreditClose")[0];

// Когда пользователь кликает на кнопку, открываем popup
btn.onclick = function() {
  myModalCredit.style.display = "flex";
}

// Когда пользователь кликает на "x", закрываем popup
span.onclick = function() {
  myModalCredit.style.display = "none";
}



