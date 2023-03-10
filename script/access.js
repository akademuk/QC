function openTab(evt, tabName) {
    // Получаем все элементы с классом "tabcontent" и скрываем их
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
  
    // Получаем все кнопки с классом "tablinks" и удаляем класс "active"
    const tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
    }
  
    // Отображаем выбранную вкладку и добавляем класс "active" для выбранной кнопки
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
  }



  function openTab1(evt, tabName) {
    // Получаем все элементы с классом "tabcontent" и скрываем их
    const tabcontent = document.getElementsByClassName('tabcontent1 ');
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
  
    // Получаем все кнопки с классом "tablinks" и удаляем класс "active"
    const tablinks = document.getElementsByClassName('tablinks1');
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
    }
  
    // Отображаем выбранную вкладку и добавляем класс "active" для выбранной кнопки
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
  }


// Получаем элементы, которые нам нужны
const tabLinks2 = document.querySelectorAll('.tablinks2');
const tabContents2 = document.querySelectorAll('.tabcontent2');
let activeTab2 = 0;

// Открытие нужной вкладки
function openTab2(event, tabName) {
  event.preventDefault();
  // Скрываем все вкладки
  tabContents2.forEach(function(tabContent) {
    tabContent.classList.remove('active');
  });
  // Убираем класс активности у всех кнопок
  tabLinks2.forEach(function(tabLink) {
    tabLink.classList.remove('active');
  });
  // Отображаем нужную вкладку
  document.getElementById(tabName).classList.add('active');
  // Добавляем класс активности для выбранной кнопки
  event.currentTarget.classList.add('active');
}

// Переключение на предыдущую вкладку
function prevTab2() {
  activeTab2--;
  if (activeTab2 < 0) {
    activeTab2 = tabContents2.length - 1;
  }
  openTab2(event, tabContents2[activeTab2].id);
}

// Переключение на следующую вкладку
function nextTab2() {
  activeTab2++;
  if (activeTab2 >= tabContents2.length) {
    activeTab2 = 0;
  }
  openTab2(event, tabContents2[activeTab2].id);
}

// По умолчанию показываем первую вкладку
document.getElementById('tab5').classList.add('active');
document.querySelector('.tablinks2.active').classList.remove('active');
document.querySelector('.tablinks2').classList.add('active');

// Добавляем обработчики событий на кнопки переключения вкладок
document.querySelectorAll('.prev').forEach(function(button) {
  button.addEventListener('click', prevTab2);
});
document.querySelectorAll('.next').forEach(function(button) {
  button.addEventListener('click', nextTab2);
});
