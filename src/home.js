export function displayHome() {
  const content = document.getElementById("content");
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
  paragraph.innerText =
    "Experience the vibrant flavors and culinary delights inspired by street food from around the world, elevated to new heights of sophistication. Our passionate chefs have meticulously crafted a menu that combines the boldness and authenticity of street food with the elegance and refinement of a fine dining experience. Indulge in tantalizing dishes bursting with aromatic spices, fresh ingredients, and innovative twists, all served in a stylish and inviting ambiance. Join us on a culinary journey that celebrates the global street food culture while providing a luxurious and memorable dining experience.";
  text.appendChild(paragraph);

  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  homeContainer.appendChild(footer);

  const footerContent = document.createElement("p");
  footerContent.setAttribute("class", "paragraph");
  footerContent.innerText = "Made by Me!";
  footer.appendChild(footerContent);

  homeContainer.style.display = "block";
}

export function hideHome() {
  const homeTab = document.getElementById("home_container");
  homeTab.style.display = "none";
}
