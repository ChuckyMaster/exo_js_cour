"use strict";
const rectangle = document.querySelector(".rectangle");
const btn = document.querySelector("button");

rectangle.addEventListener("mouseover", () => {
  rectangle.classList.add("important");
});

rectangle.addEventListener("dblclick", () => {
  rectangle.classList.add("good");
  console.log("here from double click");
});

rectangle.addEventListener("mouseout", () => {
  rectangle.classList.remove("important");
});

btn.addEventListener("click", () => {
  rectangle.classList.add("hide");
});

btn.addEventListener("dblclick", () => {
  rectangle.classList.remove("hide");
});
