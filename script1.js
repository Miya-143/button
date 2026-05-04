let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");


// 🔼 Increase
increaseBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
    countDisplay.style.color = "green";
});


// 🔽 Decrease
decreaseBtn.addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
    countDisplay.style.color = "red";
});


// 🔄 Reset
resetBtn.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
    countDisplay.style.color = "black";
});