import about from "./about.js";
import contact from "./contact.js";
import menu from "./menu.js";
import home from "./home.js";

const btnHome = document.createElement("button");
const btnMenu = document.createElement("button");
const btnAbout = document.createElement("button");
const btnContact = document.createElement("button");
const content = document.getElementById("content");
const navigation = document.createElement("div");

function setNav() {
  navigation.setAttribute("id", "navigation");
  content.appendChild(navigation);

  const logo = document.createElement("img");
  logo.src = "./content/logo.png";
  logo.setAttribute("id", "logo");
  navigation.appendChild(logo);

  btnHome.innerText = "Home";
  btnHome.setAttribute("id", "home");
  btnHome.onclick = home;
  navigation.appendChild(btnHome);

  btnMenu.innerText = "Menu";
  btnMenu.setAttribute("id", "menu");
  btnMenu.onclick = menu;
  navigation.appendChild(btnMenu);

  btnAbout.innerText = "About";
  btnAbout.setAttribute("id", "about");
  btnAbout.onclick = about;
  navigation.appendChild(btnAbout);

  btnContact.innerText = "Contact";
  btnContact.setAttribute("id", "contact");
  btnContact.onclick = contact;
  navigation.appendChild(btnContact);
}

setNav();
