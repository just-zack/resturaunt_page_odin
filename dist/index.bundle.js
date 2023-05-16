/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ (() => {



/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ (() => {

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


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (() => {



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_about_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contact_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_js__WEBPACK_IMPORTED_MODULE_3__);





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
  btnHome.onclick = (_home_js__WEBPACK_IMPORTED_MODULE_3___default());
  navigation.appendChild(btnHome);

  btnMenu.innerText = "Menu";
  btnMenu.setAttribute("id", "menu");
  btnMenu.onclick = (_menu_js__WEBPACK_IMPORTED_MODULE_2___default());
  navigation.appendChild(btnMenu);

  btnAbout.innerText = "About";
  btnAbout.setAttribute("id", "about");
  btnAbout.onclick = (_about_js__WEBPACK_IMPORTED_MODULE_0___default());
  navigation.appendChild(btnAbout);

  btnContact.innerText = "Contact";
  btnContact.setAttribute("id", "contact");
  btnContact.onclick = (_contact_js__WEBPACK_IMPORTED_MODULE_1___default());
  navigation.appendChild(btnContact);
}

setNav();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUU3REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQ0k7QUFDTjtBQUNBOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQUk7QUFDeEI7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixpREFBSTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFLO0FBQzFCOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsb0RBQU87QUFDOUI7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmF1bnRfcGFnZV9vZGluLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3R1cmF1bnRfcGFnZV9vZGluLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYXVudF9wYWdlX29kaW4vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhdW50X3BhZ2Vfb2Rpbi8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3R1cmF1bnRfcGFnZV9vZGluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1cmF1bnRfcGFnZV9vZGluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3R1cmF1bnRfcGFnZV9vZGluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhdW50X3BhZ2Vfb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmF1bnRfcGFnZV9vZGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYXVudF9wYWdlX29kaW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIiwiIiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbi8qY29uc3QgbmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbm5hdmlnYXRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXZpZ2F0aW9uXCIpO1xuY29udGVudC5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uKTtcblxuY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5sb2dvLnNyYyA9IFwiLi9jb250ZW50L2xvZ28ucG5nXCI7XG5sb2dvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9nb1wiKTtcbm5hdmlnYXRpb24uYXBwZW5kQ2hpbGQobG9nbyk7XG5cbmNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5idXR0b25Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25fY29udGFpbmVyXCIpO1xubmF2aWdhdGlvbi5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG5jb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmhvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xuaG9tZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdl9idXR0b25cIik7XG5idXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XG5tZW51LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2X2J1dHRvblwiKTtcbmJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KTtcblxuY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuYWJvdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dFwiKTtcbmFib3V0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2X2J1dHRvblwiKTtcbmJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dCk7XG5cbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29udGFjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XG5jb250YWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2X2J1dHRvblwiKTtcbmJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0KTtcbiovXG5jb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmhlcm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZXJvXCIpO1xuY29udGVudC5hcHBlbmRDaGlsZChoZXJvKTtcblxuY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5oZXJvVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlcm9fdGV4dFwiKTtcbmhlcm9UZXh0LmlubmVyVGV4dCA9IFwiRnJlc2ggb2ZmIHRoZSBzdHJlZXRzXCI7XG5oZXJvLmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcblxuY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50ZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGV4dFwiKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbmNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xucGFyYWdyYXBoLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFyYWdyYXBoXCIpO1xucGFyYWdyYXBoLmlubmVyVGV4dCA9XG4gIFwiRXhwZXJpZW5jZSB0aGUgdmlicmFudCBmbGF2b3JzIGFuZCBjdWxpbmFyeSBkZWxpZ2h0cyBpbnNwaXJlZCBieSBzdHJlZXQgZm9vZCBmcm9tIGFyb3VuZCB0aGUgd29ybGQsIGVsZXZhdGVkIHRvIG5ldyBoZWlnaHRzIG9mIHNvcGhpc3RpY2F0aW9uLiBPdXIgcGFzc2lvbmF0ZSBjaGVmcyBoYXZlIG1ldGljdWxvdXNseSBjcmFmdGVkIGEgbWVudSB0aGF0IGNvbWJpbmVzIHRoZSBib2xkbmVzcyBhbmQgYXV0aGVudGljaXR5IG9mIHN0cmVldCBmb29kIHdpdGggdGhlIGVsZWdhbmNlIGFuZCByZWZpbmVtZW50IG9mIGEgZmluZSBkaW5pbmcgZXhwZXJpZW5jZS4gSW5kdWxnZSBpbiB0YW50YWxpemluZyBkaXNoZXMgYnVyc3Rpbmcgd2l0aCBhcm9tYXRpYyBzcGljZXMsIGZyZXNoIGluZ3JlZGllbnRzLCBhbmQgaW5ub3ZhdGl2ZSB0d2lzdHMsIGFsbCBzZXJ2ZWQgaW4gYSBzdHlsaXNoIGFuZCBpbnZpdGluZyBhbWJpYW5jZS4gSm9pbiB1cyBvbiBhIGN1bGluYXJ5IGpvdXJuZXkgdGhhdCBjZWxlYnJhdGVzIHRoZSBnbG9iYWwgc3RyZWV0IGZvb2QgY3VsdHVyZSB3aGlsZSBwcm92aWRpbmcgYSBsdXh1cmlvdXMgYW5kIG1lbW9yYWJsZSBkaW5pbmcgZXhwZXJpZW5jZS5cIjtcbnRleHQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb3RlclwiKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuZm9vdGVyQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhcmFncmFwaFwiKTtcbmZvb3RlckNvbnRlbnQuaW5uZXJUZXh0ID0gXCJNYWRlIGJ5IE1lIVwiO1xuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnQpO1xuIiwiIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dC5qc1wiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuXG5jb25zdCBidG5Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3QgYnRuQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3QgYnRuQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgbmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmZ1bmN0aW9uIHNldE5hdigpIHtcbiAgbmF2aWdhdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdmlnYXRpb25cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbik7XG5cbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxvZ28uc3JjID0gXCIuL2NvbnRlbnQvbG9nby5wbmdcIjtcbiAgbG9nby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ29cIik7XG4gIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgYnRuSG9tZS5pbm5lclRleHQgPSBcIkhvbWVcIjtcbiAgYnRuSG9tZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XG4gIGJ0bkhvbWUub25jbGljayA9IGhvbWU7XG4gIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoYnRuSG9tZSk7XG5cbiAgYnRuTWVudS5pbm5lclRleHQgPSBcIk1lbnVcIjtcbiAgYnRuTWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XG4gIGJ0bk1lbnUub25jbGljayA9IG1lbnU7XG4gIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoYnRuTWVudSk7XG5cbiAgYnRuQWJvdXQuaW5uZXJUZXh0ID0gXCJBYm91dFwiO1xuICBidG5BYm91dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0XCIpO1xuICBidG5BYm91dC5vbmNsaWNrID0gYWJvdXQ7XG4gIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoYnRuQWJvdXQpO1xuXG4gIGJ0bkNvbnRhY3QuaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG4gIGJ0bkNvbnRhY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuICBidG5Db250YWN0Lm9uY2xpY2sgPSBjb250YWN0O1xuICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGJ0bkNvbnRhY3QpO1xufVxuXG5zZXROYXYoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==