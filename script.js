const list = document.getElementById("infi-list");
let count = 0;

// Function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    count++;

    const li = document.createElement("li");
    li.textContent = `Item ${count}`;

    list.appendChild(li);
  }
}

// Add 10 items initially
addItems(10);

// Infinite scrolling
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight
  ) {
    addItems(2);
  }
});