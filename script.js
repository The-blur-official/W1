const passcodeInput = document.getElementById("passcodeInput");
const submitButton = document.getElementById("submitButton");
const equationBackground = document.getElementById("equationBackground");

// Correct passcode
const correctPasscode = "0.777";

// Array of multiple difficult equations
const equations = [
  "12427 - 3x = 2x + 3942",
  "x^3 + 2x^2 - x - 12 = 0",
  "5y - 3 = 2y + 15",
  "sin(x) + cos(x) = 1",
  "2(x + 4) = x^2 - 7",
  "log(x) + log(5) = log(20)",
  "7x + 12 = 5x + 32",
  "3x^2 + 6x + 9 = 0",
];

// Populate the background with equations
function populateBackground() {
  const totalRows = 30; // Number of rows
  const totalCols = 10; // Number of columns

  for (let i = 0; i < totalRows; i++) {
    for (let j = 0; j < totalCols; j++) {
      const equation = document.createElement("span");
      equation.textContent = equations[Math.floor(Math.random() * equations.length)];
      equationBackground.appendChild(equation);
    }
  }
}

// Clear existing background and replace with one highlighted equation
function clearAndHighlight() {
  equationBackground.innerHTML = ""; // Clear all equations
  const highlightedEquation = document.createElement("div");
  highlightedEquation.textContent = "12427 - 3x = 2x + 3942"; // Highlighted equation
  highlightedEquation.classList.add("highlighted");
  equationBackground.appendChild(highlightedEquation);
}

// Initial population of the background
populateBackground();

// Listen for input changes
passcodeInput.addEventListener("input", () => {
  if (passcodeInput.value === correctPasscode) {
    submitButton.disabled = false; // Enable the button
    document.body.style.backgroundColor = "#000"; // Keep the background black
    equationBackground.style.color = "#000"; // Hide all equations
    clearAndHighlight(); // Show the highlighted equation
  } else {
    submitButton.disabled = true; // Disable button
    document.body.style.backgroundColor = "#000"; // Reset background color
    equationBackground.innerHTML = ""; // Clear background
    populateBackground(); // Repopulate with equations
  }
});

// Redirect on button click
submitButton.addEventListener("click", () => {
  window.location.href = "https://youtube.com"; // Replace with your URL
});
