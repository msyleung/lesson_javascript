function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");

const extractPos = pixel => {
  if (!pixel) return 0;
  return parseInt(pixel.slice(0, -2));
};

const moveCoin = () => {
  let top = Math.floor(Math.random() * window.innerHeight) - 50;
  let left = Math.floor(Math.random() * window.innerWidth) - 50;
  coin.style.top = `${top}px`;
  coin.style.left = `${left}px`;
};

const movePlayer = key => {
  let top = extractPos(player.style.top);
  let left = extractPos(player.style.left);
  let speed = 100;
  switch (key) {
    case "ArrowUp":
      player.style.top = `${top - speed}px`;
      break;
    case "ArrowDown":
      player.style.top = `${top + speed}px`;
      break;
    case "ArrowLeft":
      player.style.left = `${left - speed}px`;
      break;
    case "ArrowRight":
      player.style.left = `${left + speed}px`;
      break;
  }
};

const playSound = () => {
  const audio = document.querySelector(`audio`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};

window.addEventListener("keydown", e => {
  if (e.keyCode >= 37 && e.keyCode <= 40) {
    movePlayer(e.key);
  }
  if (isTouching(player, coin)) {
    playSound();
    moveCoin();
  }
});
