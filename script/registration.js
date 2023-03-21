// Получаем элементы кнопки для открытия модального окна и самого окна
var loginBtn = document.getElementById("loginBtn");
var modal = document.getElementById("loginModal");
var openConfirmationEmailContent = document.getElementById("openConfirmationEmailContent");
var openConfirmationPhoneContent = document.getElementById("openConfirmationPhoneContent");
var recoverPhone = document.getElementById("recoverPhone");
var changeNumber = document.getElementById("changeNumber");

// Получаем элементы для переключения между формами
var forgotBtn = document.getElementById("forgotBtn");
var registerBtn = document.getElementById("registerBtn");
var confirmationEmail = document.getElementById("confirmationEmail");
var openConfirmationPhone = document.getElementById("openConfirmationPhone");
var recoverPhoneContainer = document.getElementById("recoverPhoneContainer");

// Получаем формы для входа, восстановления пароля и регистрации
var loginForm = document.getElementById("login");
var forgotForm = document.getElementById("forgotForm");
var registerForm = document.getElementById("registerForm");

// При нажатии на кнопку открываем модальное окно
loginBtn.onclick = function() {
modal.style.display = "flex";
}

// При нажатии на крестик закрываем модальное окно
var closeBtn = document.getElementsByClassName("closemodal")[0];
closeBtn.onclick = function() {
modal.style.display = "none";
login.style.display = "flex";
forgotForm.style.display = "none";
registerForm.style.display = "none";
openConfirmationEmailContent.style.display = "none";
openConfirmationPhoneContent.style.display = "none";
recoverPhoneContainer.style.display = "none";
}

// При нажатии на "Забыли пароль?" отображаем форму для восстановления пароля
forgotBtn.onclick = function() {
loginForm.style.display = "none";
forgotForm.style.display = "flex";
}

// При нажатии на "Відправити" в форме "Відновити доступ через:Email"
confirmationEmail.onclick = function() {
forgotForm.style.display = "none";
openConfirmationEmailContent.style.display = "flex";
modal.classList.add("new-class");
}

// При нажатии на "Відправити" в форме "Відновити доступ через:Phone"
openConfirmationPhone.onclick = function() {
forgotForm.style.display = "none";
openConfirmationPhoneContent.style.display = "flex";
}

// Вигадайте пароль для входу в особистий кабінет
recoverPhone.onclick = function() {
forgotForm.style.display = "none";
recoverPhoneContainer.style.display = "flex";
openConfirmationPhoneContent.style.display = "none";
}

// При нажатии на "Зарегистрироваться" отображаем форму для регистрации
registerBtn.onclick = function() {
loginForm.style.display = "none";
registerForm.style.display = "flex";
}

// При нажатии на "Войти" возвращаемся к форме для входа
loginForm.onsubmit = function() {
modal.style.display = "none";
}

// При нажатии на "Отправить" или "Зарегистрироваться" возвращаемся к форме для входа
forgotForm.onsubmit = function() {
forgotForm.style.display = "none";
loginForm.style.display = "flex";
}

registerForm.onsubmit = function() {
registerForm.style.display = "none";
loginForm.style.display = "flex";
}

// Змінити номер телефону
changeNumber.onclick = function() {
  forgotForm.style.display = "flex";
  openConfirmationPhoneContent.style.display = "none";
  openConfirmationPhone.classList.remove("hidden");
}


