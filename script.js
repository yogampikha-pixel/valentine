function start() {
  document.querySelector('.hero').style.display = 'none';
  document.getElementById('bgMusic').play();
  reveal();
}

function reveal() {
  const sections = document.querySelectorAll('.hidden');
  let delay = 0;

  sections.forEach(sec => {
    setTimeout(() => {
      sec.classList.add('show');
    }, delay);
    delay += 900;
  });
}

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const tease = document.getElementById("tease");

const noMessages = [
  "Nice try 😌",
  "No is not an option here.",
  "You really thought?",
  "Four years and THIS is your answer?",
  "Be serious. Try again."
];

let noCount = 0;

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  tease.textContent = noMessages[noCount % noMessages.length];
  noCount++;
});

yesBtn.addEventListener("click", () => {

  document.querySelector(".proposal").innerHTML = `
    <h2>Of course you said yes.</h2>
    <p class="highlight">
      Because after everything we’ve been through,  
      love like ours doesn’t ask twice.
    </p>
    <p>
      I don’t promise perfect days.  
      I promise honesty, effort, and choosing you —
      today, tomorrow, always.
    </p>
    <p class="signature">Forever starts here ❤️</p>

    <button id="playVoice" class="voiceBtn">Listen Carefully 🤍</button>

    <audio id="voiceNote">
      <source src="iloveyou.mp3" type="audio/mpeg">
    </audio>
  `;

  startHearts();

  const bgMusic = document.getElementById("bgMusic");
  const voice = document.getElementById("voiceNote");
  const playBtn = document.getElementById("playVoice");

  // starting volumes
  bgMusic.volume = 0.7;
  voice.volume = 1;

  playBtn.addEventListener("click", () => {
    playBtn.innerText = "Playing...";
    fadeVolume(bgMusic, 0.2, 800); // fade background down
    voice.play();
  });

  voice.addEventListener("ended", () => {
    fadeVolume(bgMusic, 0.7, 1200); // fade background back up
    playBtn.innerText = "I love you ❤️";
  });

});


function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 300);
}

const nicknames = [
  "Babyy ❤️", "Babe ❤️", "Bie ❤️", "Bae ❤️", "Monkeyy ❤️",
  "Love ❤️", "Bujji ❤️", "Chellow ❤️", "Idiott ❤️",
  "Pandi ❤️", "Sweetheart ❤️", "Hubby ❤️"
];

let nameIndex = 0;
const nameEl = document.getElementById("names");

setInterval(() => {
  if (nameEl) {
    nameEl.textContent = nicknames[nameIndex % nicknames.length];
    nameIndex++;
  }
}, 1500);

function hug() {
  document.getElementById("hugText").innerHTML = `
    If I were there right now,  
    I wouldn’t say anything.  
    I’d just hold you the way that makes the world quiet.
  `;
  startHearts();
}

function fadeVolume(audio, targetVolume, duration) {
  const stepTime = 50;
  const steps = duration / stepTime;
  const volumeStep = (targetVolume - audio.volume) / steps;

  let currentStep = 0;

  const fade = setInterval(() => {
    audio.volume += volumeStep;
    currentStep++;

    if (currentStep >= steps) {
      audio.volume = targetVolume;
      clearInterval(fade);
    }
  }, stepTime);
}

function animateDistance() {
  const distanceEl = document.getElementById("distanceCount");
  let count = 0;
  const target = 84.2; // ← your real distance

  const interval = setInterval(() => {
    count += 0.5; // smoother increase
    distanceEl.textContent = count.toFixed(1) + " km";

    if (count >= target) {
      distanceEl.textContent = target + " km";
      clearInterval(interval);
    }
  }, 30);
}

setTimeout(animateDistance, 6000);

function showPromise() {
  document.getElementById("promiseText").innerHTML = `
    I promise to choose you even on the hard days.
    I promise to communicate, not disappear.
    I promise this distance will not win.
  `;
}

window.addEventListener("scroll", () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
    document.getElementById("secretMessage").classList.remove("hidden");
    document.getElementById("secretMessage").classList.add("show");
  }
});

