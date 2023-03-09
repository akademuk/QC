// Получаем ссылку на модальное окно
var modal2 = document.querySelector(".settings");

// Получаем ссылку на кнопку "Налаштування"
var settingsBtn = document.querySelector("#settingsBtn");

// Получаем ссылку на кнопку закрытия
var closeBtn = modal2.querySelector(".close");

// Добавляем обработчик события на кнопку "Налаштування"
settingsBtn.addEventListener("click", function() {
  modal2.style.display = "flex";
});

// Добавляем обработчик события на кнопку закрытия
closeBtn.addEventListener("click", function() {
  modal2.style.display = "none";
});
