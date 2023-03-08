// Получаем ссылки на модальное окно и кнопку открытия
var modal1 = document.getElementById("recoverEmailModal");
var btn = document.getElementById("loginBtn1");

// Получаем ссылку на кнопку закрытия модального окна
var closeBtn = modal1.querySelector(".close");

// Обрабатываем событие клика на кнопку открытия
btn.onclick = function() {
  modal1.style.display = "flex";
}

// Обрабатываем событие клика на кнопку закрытия
closeBtn.onclick = function() {
  modal1.style.display = "none";
}
