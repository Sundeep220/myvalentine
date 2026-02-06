const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const hintText = document.getElementById("hintText");

let noOnRight = true;
let lastMessageIndex = -1;

const messages = [
  "Haha, nice try! 🤭",
  "No seems a bit shy 🙈",
  "Come on… just say YES already 😌",
  "I know you want to click YES 😏",
  "That NO button is just pretending 😄",
  "Stop teasing and say YES 💕",
  "Even NO knows YES is the answer 😜"
];

function getNextMessage() {
  let index;
  do {
    index = Math.floor(Math.random() * messages.length);
  } while (index === lastMessageIndex);

  lastMessageIndex = index;
  return messages[index];
}

function showHint() {
  hintText.classList.remove("show");

  setTimeout(() => {
    hintText.textContent = getNextMessage();
    hintText.classList.add("show");
  }, 200); // very slight delay
}


function swapButtons() {
  if (noOnRight) {
    noBtn.classList.replace("right", "left");
    yesBtn.classList.replace("left", "right");
  } else {
    noBtn.classList.replace("left", "right");
    yesBtn.classList.replace("right", "left");
  }
  noOnRight = !noOnRight;
  showHint();
}

/* Escape NO always */
noBtn.addEventListener("mouseenter", swapButtons);
noBtn.addEventListener("mousedown", swapButtons);
noBtn.addEventListener("touchstart", swapButtons);

/* YES works */
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
