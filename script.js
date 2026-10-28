const envelope = document.getElementById("envelope");
const envelopeArea = document.getElementById("envelopeArea");
const tapHint = document.getElementById("tapHint");
const wish = document.getElementById("wish");
const memories = document.getElementById("memories");
const typedMessage = document.getElementById("typedMessage");
const cursor = document.getElementById("cursor");
const hearts = document.getElementById("hearts");

// Customize these details
const herName = "My Princess";
const myName = "Your Boy";

document.getElementById("herName").textContent = herName;
document.getElementById("myName").textContent = myName;

// Your personal birthday message
const message = `Happy Birthday, my love! 💗

Today is a very special day because you were born.

Thank you for coming into my life and making my days brighter. Your smile makes me happy, and I hope I can make you smile every day too.

I wish you happiness, good health, success, and all the beautiful things your heart desires.

I may not always be perfect, but I promise to keep caring for you, supporting you, and making beautiful memories with you.

Happy Birthday, baby. You are so special to me, and I am so grateful to have you in my life.

I love you more than words can explain. ❤️

Forever yours. ♡`;

// Floating hearts
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (14 + Math.random() * 22) + "px";
  heart.style.animationDuration = (5 + Math.random() * 6) + "s";

  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 11000);
}

setInterval(createHeart, 450);

// Typing effect
function typeMessage(text, index = 0) {
  if (index < text.length) {
    typedMessage.textContent += text.charAt(index);

    const delay = text.charAt(index) === "\n" ? 180 : 32;

    setTimeout(() => typeMessage(text, index + 1), delay);
  } else {
    cursor.style.display = "none";
    memories.classList.remove("hidden");
  }
}

// Open the letter only once
let opened = false;

function openLetter() {
  if (opened) return;
  opened = true;

  console.log("Envelope clicked!");

  envelope.classList.add("open");
  tapHint.textContent = "Your special letter is opening... 💗";

  // Show the birthday message
  setTimeout(() => {
    wish.classList.remove("hidden");
    wish.style.display = "block";

    console.log("Birthday wish displayed!");

    // Scroll to the letter
    wish.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // Start typing the birthday wish
    setTimeout(() => {
      typedMessage.textContent = "";
      cursor.style.display = "inline";
      typeMessage(message);
    }, 500);

  }, 1000);
}

envelope.addEventListener("click", openLetter);

envelope.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openLetter();
  }
});