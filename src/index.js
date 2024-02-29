import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";
import './style.css';

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");
const content = document.querySelector("div#content");

function displayContent(fxn) {
  [...content.children].forEach((child) => {
    content.removeChild(content.children[[...content.children].indexOf(child)]);
  });
  fxn(content);
}

homeButton.addEventListener("click", () => {
  displayContent(createHome);
});

menuButton.addEventListener("click", () => {
  displayContent(createMenu);
});

aboutButton.addEventListener("click", () => {
  displayContent(createAbout);
});

createHome(content);
