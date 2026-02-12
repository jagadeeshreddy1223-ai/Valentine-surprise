/* =========================
   PLAYFUL NO BUTTON
========================= */
function moveNo() {
  const noBtn = document.querySelector(".no");
  const tease = document.getElementById("tease");

  if (noBtn) {
    noBtn.style.top = Math.random() * 80 + "%";
    noBtn.style.left = Math.random() * 80 + "%";
  }

  if (tease) {
    tease.innerText = "Hey… that option doesn’t work 😜";
  }
}

/* =========================
   YES → LOVE PAGE
========================= */
function goToLove() {
  window.location.href = "love.html";
}

/* =========================
   LOVE PAGE → GIFTS PAGE
========================= */
function goToGifts() {
  window.location.href = "gifts.html";
}

/* =========================
   GIFTS PAGE → INDIVIDUAL GIFTS
========================= */
function goToGift1() {
  window.location.href = "gift1.html";
}

function goToGift2() {
  window.location.href = "gift2.html";
}

function goToGift3() {
  window.location.href = "gift3.html";
}

/* =========================
   BACK TO GIFTS PAGE
========================= */
function goBack() {
  window.location.href = "gifts.html";
}

/* =========================
   TYPING EFFECT (LOVE PAGE)
========================= */
window.onload = function () {
  const typingElement = document.getElementById("typing");

  if (typingElement) {
    const text = "Yaaaay!!! 🥰💖";
    let index = 0;

    function typeText() {
      if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 120);
      }
    }

    typeText();
  }
};

/* =========================
   GIFT 1 – QUESTIONS FLOW
========================= */
let qIndex = 0;

function nextQ() {
  const boxes = document.querySelectorAll(".question-box");
  boxes[qIndex].classList.add("hidden");
  qIndex++;
  boxes[qIndex].classList.remove("hidden");
}

function showLove() {
  document.getElementById("loveModal").classList.remove("hidden");
}

function closeLove() {
  document.getElementById("loveModal").classList.add("hidden");
}


/* =========================
   GIFT 2 – PROMISE MODAL
========================= */
function openPromiseModal() {
  document.getElementById("promiseModal").classList.remove("hidden");
}

function closePromiseModal() {
  document.getElementById("promiseModal").classList.add("hidden");
}

function goToILoveYou() {
  window.location.href = "iloveyou.html";
}

function goToMoreSurprise() {
  window.location.href = "moresurprise.html";
}

function goBackFromSurprise() {
  window.location.href = "iloveyou.html";
}

function goToFinalSurprise() {
  window.location.href = "finalsurprise.html";
}

function playVideo() {
  const video = document.getElementById("finalVideo");
  const btn = document.getElementById("playBtn");

  btn.style.display = "none";
  video.style.display = "block";
  video.play();
}

function playVideo() {
  const video = document.getElementById("finalVideo");
  const btn = document.getElementById("playBtn");

  btn.style.display = "none";
  video.style.display = "block";
  video.play();
}

function goToUmmma() {
  window.location.href = "ummma.html";
}

function goToStart() {
  window.location.href = "index.html";
}

