// Показать скрыть пароль при нажатии на глаз
const passwordInput = document.getElementById('password');
const showPasswordBtn = document.querySelector('.show-password');
const eyeClose0 = document.querySelector('.show-password .eyeClose');
const eyeOpen0 = document.querySelector('.show-password .eyeOpen');

showPasswordBtn.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeOpen0.classList.add('active');
    eyeClose0.classList.remove('active');
  } else {
    passwordInput.type = 'password';
    eyeClose0.classList.add('active');
    eyeOpen0.classList.remove('active');
  }
});

// Показать скрыть пароль при нажатии на глаз Вигадайте пароль для входу в особистий кабінет после ввода sms кода
const passwordNew = document.getElementById('passwordNew');
const showPasswordBtn1 = document.querySelector('.show-password1');
const eyeClose1 = document.querySelector('.show-password1 .eyeClose');
const eyeOpen1 = document.querySelector('.show-password1 .eyeOpen');

showPasswordBtn1.addEventListener('click', function() {
  if (passwordNew.type === 'password') {
    passwordNew.type = 'text';
    eyeOpen1.classList.add('active');
    eyeClose1.classList.remove('active');
  } else {
    passwordNew.type = 'password';
    eyeClose1.classList.add('active');
    eyeOpen1.classList.remove('active');
  }
});

// Показать скрыть пароль при нажатии на глаз Вигадайте пароль для входу в особистий кабінет после ввода sms кода
const confirmPassword = document.getElementById('confirmPassword');
const showPasswordBtn2 = document.querySelector('.show-password2');
const eyeClose = document.querySelector('.show-password2 .eyeClose');
const eyeOpen = document.querySelector('.show-password2 .eyeOpen');

showPasswordBtn2.addEventListener('click', function() {
  if (confirmPassword.type === 'password') {
    confirmPassword.type = 'text';
    eyeOpen.classList.add('active');
    eyeClose.classList.remove('active');
  } else {
    confirmPassword.type = 'password';
    eyeClose.classList.add('active');
    eyeOpen.classList.remove('active');
  }
});

// Показать скрыть пароль при нажатии на глаз Відновити пароль по Email
const confirmPassword3 = document.getElementById('passwordNewEmail');
const showPasswordBtn3 = document.querySelector('.show-password3');
const eyeClose3 = document.querySelector('.show-password3 .eyeClose');
const eyeOpen3 = document.querySelector('.show-password3 .eyeOpen');

showPasswordBtn3.addEventListener('click', function() {
  if (confirmPassword3.type === 'password') {
    confirmPassword3.type = 'text';
    eyeOpen3.classList.add('active');
    eyeClose3.classList.remove('active');
  } else {
    confirmPassword3.type = 'password';
    eyeClose3.classList.add('active');
    eyeOpen3.classList.remove('active');
  }
});

// Показать скрыть пароль при нажатии на глаз Відновити пароль по Email
const confirmPassword4 = document.getElementById('confirmPasswordEmail');
const showPasswordBtn4 = document.querySelector('.show-password4');
const eyeClose4 = document.querySelector('.show-password4 .eyeClose');
const eyeOpen4 = document.querySelector('.show-password4 .eyeOpen');

showPasswordBtn4.addEventListener('click', function() {
  if (confirmPassword4.type === 'password') {
    confirmPassword4.type = 'text';
    eyeOpen4.classList.add('active');
    eyeClose4.classList.remove('active');
  } else {
    confirmPassword4.type = 'password';
    eyeClose4.classList.add('active');
    eyeOpen4.classList.remove('active');
  }
});

