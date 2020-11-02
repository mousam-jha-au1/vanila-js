// Get elements
const readMode = document.querySelector(".read-mode");
const darkMode = document.querySelector(".dark-mode");
const lightMode = document.querySelector(".light-mode");
const solarizedMode = document.querySelector(".solarized-mode");
const codeImage = document.querySelector(".code-image");

// function to remove and set mode

function removeSet(mode) {
  const image = `./images/${mode}-code.png`;
  const classes = readMode.classList;
  if (classes.contains("light")) {
    classes.remove("light");
  } else if (classes.contains("solarized")) {
    classes.remove("solarized");
  } else if (classes.contains("dark")) {
    classes.remove("dark");
  }
  classes.add(mode);
  codeImage.src = image;
}

// event listeners
// dark mode
darkMode.addEventListener("click", () => {
  removeSet("dark");
});

// light mode
lightMode.addEventListener("click", () => {
  removeSet("light");
});

// solarized mode
solarizedMode.addEventListener("click", () => {
  removeSet("solarized");
});
