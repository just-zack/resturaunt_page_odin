import about from "./about.js";
import contact from "./contact.js";
import menu from "./menu.js";

const btnHome = document.createElement("button");
const btnMenu = document.createElement("button");
const btnAbout = document.createElement("button");
const btnContact = document.createElement("button");
const content = document.createElement("div");
const navigation = document.createElement("div");

content.setAttribute("id", "content");
document.body.appendChild(content);
navigation.setAttribute("id", "navigation");
content.appendChild(navigation);

btnHome.innerText = "Home";
//need to figure home button
navigation.appendChild(btnHome);

btnMenu.innerText = "Menu";
btnMenu.onclick = menu;
navigation.appendChild(btnMenu);

btnAbout.innerText = "About";
btnAbout.onclick = about;
navigation.appendChild(btnAbout);

btnContact.innerText = "Contact";
btnContact.onclick = contact;
navigation.appendChild(btnContact);
