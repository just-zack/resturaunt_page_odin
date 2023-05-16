const content = document.getElementById("content");
/*const navigation = document.createElement("div");

navigation.setAttribute("id", "navigation");
content.appendChild(navigation);

const logo = document.createElement("img");
logo.src = "./content/logo.png";
logo.setAttribute("id", "logo");
navigation.appendChild(logo);

const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "button_container");
navigation.appendChild(buttonContainer);

const home = document.createElement("button");
home.setAttribute("id", "home");
home.setAttribute("class", "nav_button");
buttonContainer.appendChild(home);

const menu = document.createElement("button");
menu.setAttribute("id", "menu");
menu.setAttribute("class", "nav_button");
buttonContainer.appendChild(menu);

const about = document.createElement("button");
about.setAttribute("id", "about");
about.setAttribute("class", "nav_button");
buttonContainer.appendChild(about);

const contact = document.createElement("button");
contact.setAttribute("id", "contact");
contact.setAttribute("class", "nav_button");
buttonContainer.appendChild(contact);
*/
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
