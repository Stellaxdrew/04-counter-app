// We use 'let' for count because its value will change
let count = 0;

// We use 'const' for button and display elements because we don't want to reassign them
const increaseButton = document.getElementById("increase"); // 'const' because the button element won't change
const countDisplay = document.getElementById("count"); // 'const' because the display element won't change
const decreaseButton = document.getElementById("decrease"); // 'const' because the button element won't change
const resetButton = document.getElementById("reset"); // 'const' because the button element won't change

increaseButton.onclick = function() {
  count++;
  countDisplay.textContent = count;
};

decreaseButton.onclick = function() {
  if (count > 0) {
    count--;
  }
  countDisplay.textContent = count;
};

resetButton.onclick = function() {
  count = 0;
  countDisplay.textContent = count;
};
