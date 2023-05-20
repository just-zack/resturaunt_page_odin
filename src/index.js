import about from "./about.js";
import contact from "./contact.js";
import menu from "./menu.js";
import home from "./home.js";
import "./styles/styles.css";
import logoImage from "./content/logo.png";

const btnHome = document.createElement("button");
const btnMenu = document.createElement("button");
const btnAbout = document.createElement("button");
const btnContact = document.createElement("button");
const content = document.getElementById("content");
const navigation = document.createElement("div");
const buttonContainer = document.createElement("div");

navigation.setAttribute("id", "navigation");
content.appendChild(navigation);

const logo = document.createElement("img");
logo.src = logoImage;
logo.setAttribute("id", "logo");
navigation.appendChild(logo);

buttonContainer.setAttribute("id", "button_container");
navigation.appendChild(buttonContainer);

btnHome.innerText = "Home";
btnHome.setAttribute("id", "home");
btnHome.classList.add("nav_button");
btnHome.onclick = home;
buttonContainer.appendChild(btnHome);

btnMenu.innerText = "Menu";
btnMenu.setAttribute("id", "menu");
btnMenu.classList.add("nav_button");
btnMenu.onclick = menu;
buttonContainer.appendChild(btnMenu);

btnAbout.innerText = "About";
btnAbout.setAttribute("id", "about");
btnAbout.classList.add("nav_button");
btnAbout.onclick = about;
buttonContainer.appendChild(btnAbout);

btnContact.innerText = "Contact";
btnContact.setAttribute("id", "contact");
btnContact.classList.add("nav_button");
btnContact.onclick = contact;
buttonContainer.appendChild(btnContact);

function displayHome() {
  const content = document.getElementById("content");

  const hero = document.createElement("div");
  hero.setAttribute("id", "hero");
  content.appendChild(hero);

  const heroText = document.createElement("h2");
  heroText.setAttribute("id", "hero_text");
  heroText.innerText = "Fresh off the streets";
  hero.appendChild(heroText);

  const text = document.createElement("div");
  text.setAttribute("id", "text");
  content.appendChild(text);

  const paragraph = document.createElement("p");
  paragraph.setAttribute("class", "paragraph");
  paragraph.innerText =
    "Experience the vibrant flavors and culinary delights inspired by street food from around the world, elevated to new heights of sophistication. Our passionate chefs have meticulously crafted a menu that combines the boldness and authenticity of street food with the elegance and refinement of a fine dining experience. Indulge in tantalizing dishes bursting with aromatic spices, fresh ingredients, and innovative twists, all served in a stylish and inviting ambiance. Join us on a culinary journey that celebrates the global street food culture while providing a luxurious and memorable dining experience.";
  text.appendChild(paragraph);

  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  content.appendChild(footer);

  const footerContent = document.createElement("p");
  footerContent.setAttribute("class", "paragraph");
  footerContent.innerText = "Made by Me!";
  footer.appendChild(footerContent);
}

displayHome();
