const content = document.getElementById("content");
let currentPage = "";

export function displayAbout() {
  currentPage = "about";
  const aboutContainer = document.createElement("div");

  aboutContainer.setAttribute("id", "about_container");
  content.appendChild(aboutContainer);

  const aboutTitle = document.createElement("h1");
  aboutTitle.setAttribute("id", "about_title");
  aboutTitle.innerText = "Our Story";
  aboutContainer.appendChild(aboutTitle);

  const about1 = document.createElement("p");
  about1.setAttribute("id", "about1");
  about1.innerText =
    "The idea sprouted during a spontaneous backpacking adventure through Southeast Asia. As Alex and Maya traversed vibrant night markets and indulged in exotic delicacies, they were captivated by the communal spirit and mouthwatering aromas wafting through the air. It was in a tiny Thai street stall, under a canopy of colorful lanterns, that the spark ignited. They knew they had to recreate this vibrant experience back home.";
  aboutContainer.appendChild(about1);

  const about2 = document.createElement("p");
  about2.setAttribute("id", "about2");
  about2.innerText =
    "With unwavering determination and a shared love for cooking, Alex and Maya spent countless hours experimenting with recipes, perfecting the art of blending spices and harmonizing flavors. They scoured local markets for the freshest ingredients, forging relationships with farmers and suppliers who shared their commitment to quality. Their kitchen transformed into a lively laboratory, a sanctuary where bold ideas and culinary dreams came to life.";
  aboutContainer.appendChild(about2);

  const about3 = document.createElement("p");
  about3.setAttribute("id", "about3");
  about3.innerText =
    "Word of their mouthwatering creations soon spread like wildfire through the community. Their street food pop-ups attracted curious foodies from far and wide, who reveled in the explosion of tastes and textures that filled every bite. Fueled by their growing popularity and an insatiable appetite for success, Alex and Maya finally realized their vision by opening their own street food restaurant on the very street they had grown up on. With its vibrant ambiance, diverse menu, and warm hospitality, their establishment quickly became a beloved gathering spot, where people from all walks of life could come together to savor the world on a single plate.";
  aboutContainer.appendChild(about3);

  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  aboutContainer.appendChild(footer);

  const footerContent = document.createElement("p");
  footerContent.setAttribute("class", "paragraph");
  footerContent.setAttribute("id", "paragraph2");
  footerContent.innerText = "Made by Me!";
  footer.appendChild(footerContent);
}

export function hideAbout() {
  const aboutContainer = document.getElementById("about_container");
  const aboutTitle = document.getElementById("about_title");
  const about1 = document.getElementById("about1");
  const about2 = document.getElementById("about2");
  const about3 = document.getElementById("about3");
  const footer = document.getElementById("footer");
  const footerContent = document.getElementById("paragraph2");

  content.removeChild(aboutContainer);
  aboutContainer.removeChild(aboutTitle);
  aboutContainer.removeChild(about1);
  aboutContainer.removeChild(about2);
  aboutContainer.removeChild(about3);
  aboutContainer.removeChild(footer);
  footer.removeChild(footerContent);

  currentPage = "";
}
