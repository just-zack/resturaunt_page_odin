const content = document.getElementById("content");

export function displayMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu_section");
  content.appendChild(menuContainer);

  const menu = document.createElement("h1");
  menu.setAttribute("id", "menu");
  menu.innerText = "Our Menu";
  menuContainer.appendChild(menu);

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
}

export function hideMenu() {
  const menuContainer = document.getElementById("menu_section");
  content.removeChild(menuContainer);

  const menu = document.getElementById("menu");
  menuContainer.removeChild(menu);

  const buttonContainer = document.getElementById("button_container");
  menuContainer.removeChild(buttonContainer);

  const food = document.getElementById("food");
  buttonContainer.removeChild(food);

  const drinks = document.getElementById("drinks");
  buttonContainer.removeChild(drinks);

  const menuGeneral = document.getElementById("menu_general");
  menuContainer.removeChild(menuGeneral);

  const menuCard1 = document.getElementById("menuCard1");
  menuGeneral.removeChild(menuCard1);

  const streetBurger = document.getElementById("streetBurger");
  menuCard1.removeChild(streetBurger);

  const streetBurgerDescription = document.getElementById(
    "streetBurgerDescription"
  );
  menuCard1.removeChild(streetBurgerDescription);

  const streetBurgerPrice = document.getElementById("streetBurgerPrice");
  menuCard1.removeChild(streetBurgerPrice);

  const menuCard2 = document.getElementById("menuCard2");
  menuGeneral.removeChild(menuCard2);

  const streetNoodles = document.getElementById("streetNoodles");
  menuCard2.removeChild(streetNoodles);

  const streetNoodlesDescription = document.getElementById(
    "streetNoodlesDescription"
  );
  menuCard2.removeChild(streetNoodlesDescription);

  const streetNoodlesPrice = document.getElementById("streetNoodlesPrice");
  menuCard2.removeChild(streetNoodlesPrice);

  const menuCard3 = document.getElementById("menuCard3");
  menuGeneral.removeChild(menuCard3);

  const streetSamosas = document.getElementById("streetSamosas");
  menuCard3.removeChild(streetSamosas);

  const streetSamosasDescription = document.getElementById(
    "streetSamosasDescription"
  );
  menuCard3.removeChild(streetSamosasDescription);

  const streetSamosasPrice = document.getElementById("streetSamosasPrice");
  menuCard3.removeChild(streetSamosasPrice);
}
