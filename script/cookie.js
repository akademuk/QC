// Получаем ссылку на кнопку "Прийняти все"
var acceptBtn = document.getElementById("acceptBtn");

// Добавляем обработчик события на кнопку "Прийняти все"
acceptBtn.addEventListener("click", function() {
  // Устанавливаем куки с именем "cookie_accepted" и значением "true" на один день
  document.cookie = "cookie_accepted=true; expires=" + new Date(Date.now() + 86400000).toUTCString();

  // Скрываем блок с сообщением об использовании куки
  document.querySelector(".cookie").style.display = "none";
});

// Проверяем, установлено ли куки "cookie_accepted"
if (document.cookie.indexOf("cookie_accepted=true") === -1) {
  // Если куки не установлено, показываем блок с сообщением об использовании куки
  document.querySelector(".cookie").style.display = "flex";
}
