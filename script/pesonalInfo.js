document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tabPesonalInfo");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");
  
    let currentTab = 0;
  
    showTab(currentTab);
  
    function showTab(n) {
      // Check if tab content is already loaded
      const tabContent = tabs[n].querySelector(".tab-content");
      if (!tabContent.classList.contains("loaded")) {
        // If not loaded, send AJAX request to load content
        const url = tabContent.dataset.url;
        fetch(url)
          .then(response => response.text())
          .then(html => {
            tabContent.innerHTML = html;
            tabContent.classList.add("loaded");
            updateButtonState(n);
          });
      } else {
        // If already loaded, just show tab
        updateButtonState(n);
      }
      tabs[n].classList.add("active");
    }
  
    function hideTab(n) {
      tabs[n].classList.remove("active");
    }
  
    function nextTab() {
      hideTab(currentTab);
      currentTab++;
      if (currentTab >= tabs.length) {
        currentTab = tabs.length - 1;
      }
      showTab(currentTab);
    }
  
    function prevTab() {
      hideTab(currentTab);
      currentTab--;
      if (currentTab < 0) {
        currentTab = 0;
      }
      showTab(currentTab);
    }
  
    function updateButtonState(n) {
      if (n === 0) {
        prevBtns[n].setAttribute("disabled", true);
      } else {
        prevBtns[n].removeAttribute("disabled");
      }
  
      if (n === tabs.length - 1) {
        nextBtns[n].setAttribute("disabled", true);
      } else {
        nextBtns[n].removeAttribute("disabled");
      }
    }
  
    nextBtns.forEach((btn) => {
      btn.addEventListener("click", nextTab);
    });
  
    prevBtns.forEach((btn) => {
      btn.addEventListener("click", prevTab);
    });
  });
  