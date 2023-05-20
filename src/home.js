const content = document.getElementById("content");
let currentPage = "";

export function displayHome() {
  currentPage = "home";
  const homeContainer = document.createElement("div");

  homeContainer.setAttribute("id", "home_container");
  content.appendChild(homeContainer);

  const hero = document.createElement("div");
  hero.setAttribute("id", "hero");
  homeContainer.appendChild(hero);

  const heroText = document.createElement("h2");
  heroText.setAttribute("id", "hero_text");
  heroText.innerText = "Fresh off the streets";
  hero.appendChild(heroText);

  const text = document.createElement("div");
  text.setAttribute("id", "text");
  homeContainer.appendChild(text);

  const paragraph = document.createElement("p");
  paragraph.setAttribute("class", "paragraph");
  paragraph.setAttribute("id", "paragraph1");
  paragraph.innerText =
    "Experience the vibrant flavors and culinary delights inspired by street food from around the world, elevated to new heights of sophistication. Our passionate chefs have meticulously crafted a menu that combines the boldness and authenticity of street food with the elegance and refinement of a fine dining experience. Indulge in tantalizing dishes bursting with aromatic spices, fresh ingredients, and innovative twists, all served in a stylish and inviting ambiance. Join us on a culinary journey that celebrates the global street food culture while providing a luxurious and memorable dining experience.";
  text.appendChild(paragraph);

  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  homeContainer.appendChild(footer);

  const footerContent = document.createElement("p");
  footerContent.setAttribute("class", "paragraph");
  footerContent.setAttribute("id", "paragraph2");
  footerContent.innerText = "Made by Me!";
  footer.appendChild(footerContent);
}

export function hideHome() {
  const homeContainer = document.getElementById("home_container");
  const hero = document.getElementById("hero");
  const heroText = document.getElementById("hero_text");
  const text = document.getElementById("text");
  const footer = document.getElementById("footer");
  const footerContent = document.getElementById("paragraph2");
  const paragraph = document.getElementById("paragraph1");

  content.removeChild(homeContainer);

  homeContainer.removeChild(hero);

  hero.removeChild(heroText);

  homeContainer.removeChild(text);

  text.removeChild(paragraph);

  homeContainer.removeChild(footer);

  footer.removeChild(footerContent);

  currentPage = "";
}
