const timerEl = document.getElementById('timer');
const startTimerBtn = document.getElementById('openConfirmationPhone');
const resendSmsBtn = document.getElementById('resend-sms-btn');
const timerWrapper = document.querySelector('.timer-wrapper');
const phoneNumberInput = document.getElementById('phone');
var changeNumber = document.getElementById("changeNumber");

let timeLeft = 60;
let timerInterval;

startTimerBtn.addEventListener('click', () => {
  // Здесь должна быть логика отправки SMS на сервер
  
  // Показываем кнопку "Повторно отправить SMS" и скрываем кнопку "Отправить SMS"
  startTimerBtn.classList.add('hidden');
  
  // Запускаем таймер обратного отсчета
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `00:${timeLeft.toString().padStart(2, '0')}`;
    
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      resendSmsBtn.classList.remove('hidden');
      timerEl.classList.add("aciveTimer");
      timerWrapper.classList.add("aciveTimerWrapper")
    }
  }, 1000);
});

changeNumber.addEventListener('click', () => {
    startTimerBtn.classList.remove("hidden");
     
     // Сбрасываем таймер обратного отсчета и снова устанавливаем его на 60 секунд
     clearInterval(timerInterval);
     timeLeft = 60;
     timerEl.textContent = `01:00`;
  });

resendSmsBtn.addEventListener('click', () => {
    // Скрываем кнопку "Повторно отправить SMS" и показываем кнопку "Отправить SMS"
    resendSmsBtn.classList.add('hidden');
    timerEl.classList.remove("aciveTimer")
    timerWrapper.classList.remove("aciveTimerWrapper")
    
    // Сбрасываем таймер обратного отсчета и снова устанавливаем его на 60 секунд
    clearInterval(timerInterval);
    timeLeft = 60;
    timerEl.textContent = `01:00`;
  
    // Запускаем таймер обратного отсчета
    timerInterval = setInterval(() => {
      timeLeft--;
      timerEl.textContent = `00:${timeLeft.toString().padStart(2, '0')}`;
      
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        resendSmsBtn.classList.remove('hidden');
        timerEl.classList.add("aciveTimer");
        timerWrapper.classList.add("aciveTimerWrapper");
      }
    }, 1000);
  });
  
  
  
  
  
  
  
