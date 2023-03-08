// Добавляем обработчик отправки формы
document.getElementById('forgotForm').addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Получаем выбранную вкладку
    const activeTab = document.querySelector('.tabcontent.active');
    
    // Получаем поле ввода на выбранной вкладке
    const inputField = activeTab.querySelector('input');
    
    // Получаем сообщение об ошибке для выбранной вкладки
    const errorMessage = activeTab.querySelector('.error-message');
    
    // Проверяем, заполнено ли поле ввода
    if (inputField.value.trim() === '') {
      // Если поле пустое, отображаем сообщение об ошибке
      errorMessage.style.display = 'block';
    } else {
      // Если поле заполнено, скрываем сообщение об ошибке
      errorMessage.style.display = 'none';
      
      // Здесь вы можете написать код для отправки данных формы на сервер
    }
  });
  