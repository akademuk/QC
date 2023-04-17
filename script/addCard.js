const addCardBtn = document.getElementById("add-card");
const cardContainers = Array.from(document.querySelectorAll(".card-container"));
let currentCardIndex = 0;

document.addEventListener("click", (event) => {
  const container = event.target.closest(".card-container");
  if (!container) return;

  if (event.target.matches(".delateOpen")) {
    const deleteBtn = container.querySelector(".delate");
    if (deleteBtn) {
      deleteBtn.style.display = "flex";
    } 
  } else if (event.target.matches(".delate")) {
    container.style.display = "none";
    currentCardIndex--;
    if (currentCardIndex < 0) {
      currentCardIndex = cardContainers.length - 1;
    }
    event.target.style.display = "none";
  } else if (event.target.matches(".close")) {
    container.style.display = "none";
    currentCardIndex--;
    if (currentCardIndex < 0) {
      currentCardIndex = cardContainers.length - 1;
    }
  }
});

addCardBtn.addEventListener("click", () => {
  let container = cardContainers[currentCardIndex];
  while (container && container.style.display === "none") {
    currentCardIndex = (currentCardIndex + 1) % cardContainers.length;
    container = cardContainers[currentCardIndex];
  }

  if (!container) {
    const newContainer = document.createElement("div");
    newContainer.className = "card-container";
    document.body.appendChild(newContainer);
    cardContainers.push(newContainer);
    container = newContainer;
  }

  container.style.display = "block";
  currentCardIndex = (currentCardIndex + 1) % cardContainers.length;
});
