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
  