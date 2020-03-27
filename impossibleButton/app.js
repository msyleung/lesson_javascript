const btn = document.querySelector("button");

const moveAway = () => {
  // randomly generated position
  let width = window.innerWidth;
  let height = window.innerHeight;
  btn.style.left = `${Math.floor(Math.random() * width + 1)}px`;
  btn.style.top = `${Math.floor(Math.random() * height + 1)}px`;
};

const weiner = () => {
  alert("ur a weiner!!!1!!");
};

btn.addEventListener("mouseover", moveAway);
btn.addEventListener("click", weiner);
