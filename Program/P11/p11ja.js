const dino = document.getElementById("deno");
const cactus = document.getElementById("cactus");
function jump() {
  if (dispatchEvent.classList != jump) {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 300);
  }
}
let checkAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft > 0 && cactusLeft < 40 && dinoTop >= 143) {
    dino.style.webkitAnimationPlayState = "paused";
    clearInterval(timeCounter);
    cactus.style.webkitAnimationPlayState = "paused";
    alert("Game Over");
    window.location.reload();
  }
});

//press to call jump function
  document.addEventListener("keypress", (event) => {
    if (event.key === "a" || event.key === "A") {
      jump();
    }
  });

//for count score
let count = 0;
let timeCounter = setInterval(() => {
  count++;
  document.getElementById("time").innerHTML = count;
}, 100);
