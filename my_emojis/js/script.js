const myEmojis = ["👨‍💻", "🏔️", "🍔"];
const emojiInput = document.querySelector(".emoji-input");
// buttons
const addEnd = document.querySelector(".add-end");
const addBeginning = document.querySelector(".add-beginning");
const removeEnd = document.querySelector(".remove-end");
const removeBeginning = document.querySelector(".remove-beginning");

const emojiContainer = document.querySelector(".emoji-container");

// Render
function renderEmojis() {
  emojiContainer.innerHTML = "";
  if (myEmojis.length > 0) {
    for (let i = 0; i < myEmojis.length; i++) {
      const emoji = document.createElement("span");
      emoji.textContent = myEmojis[i];
      emoji.classList = "emoji";
      emojiContainer.append(emoji);
    }
  } else {
    emojiContainer.textContent = "nothing to show !!";
  }
}
//* Add
function addToEnd() {
  myEmojis.push(emojiInput.value);
  renderEmojis();
  emojiInput.value = "";
}
addEnd.addEventListener("click", addToEnd);

function addToBeginning() {
  myEmojis.unshift(emojiInput.value);
  renderEmojis();
  emojiInput.value = "";
}
addBeginning.addEventListener("click", addToBeginning);

// Remove

function removeFromEnd() {
  myEmojis.pop();
  renderEmojis();
}
removeEnd.addEventListener("click", removeFromEnd);

function removeFromBeginning() {
  myEmojis.shift();
  renderEmojis();
}

removeBeginning.addEventListener("click", removeFromBeginning);

renderEmojis();

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
const copyEmoji = document.querySelector(".copy-emoji p");
const emojiArr = copyEmoji.textContent.split(" ");
for (let i = 0; i < emojiArr.length; i++) {
  emojiArr[i].addEventListener("click", () => console.log("yyoyoy"));
}
console.log(copyEmoji.textContent.split(" "));
