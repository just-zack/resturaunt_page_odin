const content = document.getElementById("content");
let currentPage = "";

export function displayMenu() {
  currentPage = "menu";
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu_section");
  content.appendChild(menuContainer);

  const menuTitle = document.createElement("h1");
  menuTitle.setAttribute("id", "menu_title");
  menuTitle.innerText = "Our Menu";
  menuContainer.appendChild(menuTitle);

  const buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("id", "button_container");
  menuContainer.appendChild(buttonContainer);

  const food = document.createElement("button");
  food.setAttribute("id", "food");
  food.classList.add("menu_button");
  food.innerText = "Food";
  buttonContainer.appendChild(food);

  const drinks = document.createElement("button");
  drinks.setAttribute("id", "drinks");
  drinks.classList.add("menu_button");
  drinks.innerText = "Drinks";
  buttonContainer.appendChild(drinks);

  const menuGeneral = document.createElement("div");
  menuGeneral.setAttribute("id", "menu_general");
  menuContainer.appendChild(menuGeneral);

  const menuCard1 = document.createElement("div");
  menuCard1.setAttribute("id", "menuCard1");
  menuGeneral.appendChild(menuCard1);

  const streetBurger = document.createElement("h2");
  streetBurger.innerText = "Street Burger";
  streetBurger.setAttribute("id", "streetBurger");
  menuCard1.appendChild(streetBurger);

  const streetBurgerDescription = document.createElement("p");
  streetBurgerDescription.innerText =
    "A flame-grilled burger loaded with fresh greens and house made pickles.";
  streetBurgerDescription.setAttribute("id", "streetBurgerDescription");
  menuCard1.appendChild(streetBurgerDescription);

  const streetBurgerPrice = document.createElement("p");
  streetBurgerPrice.innerText = "$16";
  streetBurgerPrice.setAttribute("id", "streetBurgerPrice");
  menuCard1.appendChild(streetBurgerPrice);

  const menuCard2 = document.createElement("div");
  menuCard2.setAttribute("id", "menuCard2");
  menuGeneral.appendChild(menuCard2);

  const streetNoodles = document.createElement("h2");
  streetNoodles.innerText = "Street Noodles";
  streetNoodles.setAttribute("id", "streetNoodles");
  menuCard2.appendChild(streetNoodles);

  const streetNoodlesDescription = document.createElement("p");
  streetNoodlesDescription.innerText =
    "Dry-fried noodles loaded with braised pork, green onions, and fresh pickled carrots.";
  streetNoodlesDescription.setAttribute("id", "streetNoodlesDescription");
  menuCard2.appendChild(streetNoodlesDescription);

  const streetNoodlesPrice = document.createElement("p");
  streetNoodlesPrice.innerText = "$12";
  streetNoodlesPrice.setAttribute("id", "streetNoodlesPrice");
  menuCard2.appendChild(streetNoodlesPrice);

  const menuCard3 = document.createElement("div");
  menuCard3.setAttribute("id", "menuCard3");
  menuGeneral.appendChild(menuCard3);

  const streetSamosas = document.createElement("h2");
  streetSamosas.innerText = "Street Samosas";
  streetSamosas.setAttribute("id", "streetSamosas");
  menuCard3.appendChild(streetSamosas);

  const streetSamosasDescription = document.createElement("p");
  streetSamosasDescription.innerText =
    "Crisp veggie and Lentil Samosas with a house-made mango chutney.";
  streetSamosasDescription.setAttribute("id", "streetSamosasDescription");
  menuCard3.appendChild(streetSamosasDescription);

  const streetSamosasPrice = document.createElement("p");
  streetSamosasPrice.innerText = "$6";
  streetSamosasPrice.setAttribute("id", "streetSamosasPrice");
  menuCard3.appendChild(streetSamosasPrice);

  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  menuContainer.appendChild(footer);

  const footerContent = document.createElement("p");
  footerContent.setAttribute("class", "paragraph");
  footerContent.setAttribute("id", "paragraph2");
  footerContent.innerText = "Made by Me!";
  footer.appendChild(footerContent);
}

export function hideMenu() {
  const menuContainer = document.getElementById("menu_section");
  const menuTitle = document.getElementById("menu_title");
  //const buttonContainer = document.getElementById("button_container");
  //const food = document.getElementById("food");
  const menuGeneral = document.getElementById("menu_general");
  const menuCard1 = document.getElementById("menuCard1");
  const streetBurger = document.getElementById("streetBurger");
  const streetBurgerDescription = document.getElementById(
    "streetBurgerDescription"
  );
  const streetBurgerPrice = document.getElementById("streetBurgerPrice");
  const menuCard2 = document.getElementById("menuCard2");
  const streetNoodles = document.getElementById("streetNoodles");
  const streetNoodlesDescription = document.getElementById(
    "streetNoodlesDescription"
  );
  const streetNoodlesPrice = document.getElementById("streetNoodlesPrice");
  const menuCard3 = document.getElementById("menuCard3");

  //const drinks = document.getElementById("drinks");
  const streetSamosas = document.getElementById("streetSamosas");
  const streetSamosasDescription = document.getElementById(
    "streetSamosasDescription"
  );
  const streetSamosasPrice = document.getElementById("streetSamosasPrice");
  const footer = document.getElementById("footer");
  const footerContent = document.getElementById("paragraph2");

  content.removeChild(menuContainer);
  menuContainer.removeChild(menuTitle);
  menuContainer.removeChild(menuGeneral);
  menuGeneral.removeChild(menuCard1);
  menuCard1.removeChild(streetBurger);
  menuCard1.removeChild(streetBurgerDescription);
  menuCard1.removeChild(streetBurgerPrice);
  menuGeneral.removeChild(menuCard2);
  menuCard2.removeChild(streetNoodles);
  menuCard2.removeChild(streetNoodlesDescription);
  menuCard2.removeChild(streetNoodlesPrice);
  menuGeneral.removeChild(menuCard3);
  menuCard3.removeChild(streetSamosas);
  menuCard3.removeChild(streetSamosasDescription);
  menuCard3.removeChild(streetSamosasPrice);
  menuContainer.removeChild(footer);
  footer.removeChild(footerContent);

  currentPage = "";
}
