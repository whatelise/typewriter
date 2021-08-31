"use strict";
let text = document.querySelector("#typewriter").innerHTML;
let nextLetter;
let maxNumberOfIterations = text.length;
clickStart();

function clickStart() {
  nextLetter = 0;
  document.querySelector("h1").textContent = "";
  document.querySelector("html").addEventListener("click", loop);
}

function loop() {
  let letter = text.split("");
  console.log(letter[nextLetter]);
  document.querySelector(".typewritten").textContent += letter[nextLetter];
  nextLetter++;

  let sound = ["typekey1", "typekey2"];
  const random = Math.floor(Math.random() * sound.length);
  console.log(random, sound[random]);
  document.getElementById(sound[random]).play();

  if (nextLetter < maxNumberOfIterations) {
    // let time = [100, 150, 175, 200];
    // const randomTime = Math.floor(Math.random() * time.length);
    setTimeout(loop, 150);
  }

  document.querySelector("html").addEventListener("click", clickStart);
}
