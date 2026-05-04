const box = document.getElementById("box");
const coords = document.getElementById("coords");
const keyText = document.getElementById("key");
const button = document.getElementById("btn");


// 🖱️ MOUSE EVENTS

// Mouse Over
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "orange";
});

// Mouse Out
box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "lightgray";
});

// Mouse Move (coordinates)
document.addEventListener("mousemove", (e) => {
    coords.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});


// 🖱️ CLICK EVENT

button.addEventListener("click", () => {
    alert("Button Clicked!");
    box.style.backgroundColor = "green";
});


// ⌨️ KEYBOARD EVENTS

// Key Down
document.addEventListener("keydown", (e) => {
    keyText.textContent = `Key Pressed: ${e.key}`;
});

// Key Up (optional)
document.addEventListener("keyup", () => {
    console.log("Key released");
});