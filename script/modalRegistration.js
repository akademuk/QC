// Получаем элементы, которые нам нужны
const openModalButton = document.getElementById('open-modal');
const modalWindow = document.getElementById('modalWindow');
const closeModalButton = document.querySelector('.closeWindow');
const tabLinks = document.querySelectorAll('.tablinkWindow');
const tabContents = document.querySelectorAll('.tablinkWindowContent');
const prevButton = document.querySelectorAll('.prev');
const nextButton = document.querySelectorAll('.next');
let activeTab = 0;

// Открываем модальное окно при клике на кнопку
openModalButton.addEventListener('click', function() {
    modalWindow.style.display = 'block';
});

// Закрываем модальное окно при клике на крестик
closeModalButton.addEventListener('click', function() {
    modalWindow.style.display = 'none';
});

// Переключение между вкладками
tabLinks.forEach(function(tabLink) {
  tabLink.addEventListener('click', function() {
    const tab = this.getAttribute('data-tab');
    activeTab = parseInt(tab.charAt(tab.length-1)) - 1;
    setActiveTab();
  });
});

// Функция, которая показывает текущую вкладку и скрывает остальные
function setActiveTab() {
  tabContents.forEach(function(tabContent) {
    tabContent.classList.remove('active');
  });
  tabLinks.forEach(function(tabLink) {
    tabLink.classList.remove('active');
  });
  tabContents[activeTab].classList.add('active');
  tabLinks[activeTab].classList.add('active');
}

// Переключение на предыдущую вкладку
function prevTab() {
  activeTab--;
  if (activeTab < 0) {
    activeTab = tabContents.length - 1;
  }
  setActiveTab();
}

// Переключение на следующую вкладку
function nextTab() {
  activeTab++;
  if (activeTab >= tabContents.length) {
    activeTab = 0;
  }
  setActiveTab();
}
