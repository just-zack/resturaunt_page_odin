/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayHome": () => (/* binding */ displayHome),
/* harmony export */   "hideHome": () => (/* binding */ hideHome)
/* harmony export */ });
function displayHome() {
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

function hideHome() {
  const homeTab = document.getElementById("home_container");
  homeTab.style.display = "none";
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTk87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYXVudF9wYWdlX29kaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVyYXVudF9wYWdlX29kaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1cmF1bnRfcGFnZV9vZGluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVyYXVudF9wYWdlX29kaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dXJhdW50X3BhZ2Vfb2Rpbi8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIb21lKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBob21lQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZV9jb250YWluZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlcm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZXJvXCIpO1xuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm8pO1xuXG4gIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZXJvVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlcm9fdGV4dFwiKTtcbiAgaGVyb1RleHQuaW5uZXJUZXh0ID0gXCJGcmVzaCBvZmYgdGhlIHN0cmVldHNcIjtcbiAgaGVyby5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZXh0XCIpO1xuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhZ3JhcGguc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYXJhZ3JhcGhcIik7XG4gIHBhcmFncmFwaC5pbm5lclRleHQgPVxuICAgIFwiRXhwZXJpZW5jZSB0aGUgdmlicmFudCBmbGF2b3JzIGFuZCBjdWxpbmFyeSBkZWxpZ2h0cyBpbnNwaXJlZCBieSBzdHJlZXQgZm9vZCBmcm9tIGFyb3VuZCB0aGUgd29ybGQsIGVsZXZhdGVkIHRvIG5ldyBoZWlnaHRzIG9mIHNvcGhpc3RpY2F0aW9uLiBPdXIgcGFzc2lvbmF0ZSBjaGVmcyBoYXZlIG1ldGljdWxvdXNseSBjcmFmdGVkIGEgbWVudSB0aGF0IGNvbWJpbmVzIHRoZSBib2xkbmVzcyBhbmQgYXV0aGVudGljaXR5IG9mIHN0cmVldCBmb29kIHdpdGggdGhlIGVsZWdhbmNlIGFuZCByZWZpbmVtZW50IG9mIGEgZmluZSBkaW5pbmcgZXhwZXJpZW5jZS4gSW5kdWxnZSBpbiB0YW50YWxpemluZyBkaXNoZXMgYnVyc3Rpbmcgd2l0aCBhcm9tYXRpYyBzcGljZXMsIGZyZXNoIGluZ3JlZGllbnRzLCBhbmQgaW5ub3ZhdGl2ZSB0d2lzdHMsIGFsbCBzZXJ2ZWQgaW4gYSBzdHlsaXNoIGFuZCBpbnZpdGluZyBhbWJpYW5jZS4gSm9pbiB1cyBvbiBhIGN1bGluYXJ5IGpvdXJuZXkgdGhhdCBjZWxlYnJhdGVzIHRoZSBnbG9iYWwgc3RyZWV0IGZvb2QgY3VsdHVyZSB3aGlsZSBwcm92aWRpbmcgYSBsdXh1cmlvdXMgYW5kIG1lbW9yYWJsZSBkaW5pbmcgZXhwZXJpZW5jZS5cIjtcbiAgdGV4dC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb3RlclwiKTtcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9vdGVyQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBhcmFncmFwaFwiKTtcbiAgZm9vdGVyQ29udGVudC5pbm5lclRleHQgPSBcIk1hZGUgYnkgTWUhXCI7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDb250ZW50KTtcblxuICBob21lQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlSG9tZSgpIHtcbiAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZV9jb250YWluZXJcIik7XG4gIGhvbWVUYWIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9