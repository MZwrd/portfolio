// import './style.css'
import { setupCalculator } from './calculate.js'

// window.addEventListener("orientationchange", function() {
// 	console.log(23);
// });

const buttonElem = [

  "AC", "+/-", "%", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="

]

const buttons = document.querySelector(".buttons")

buttons.innerHTML =`${createButtons()}`


function createButtons() {
  // console.log("testing")
  let html = "";
  for (let i = 0; i < buttonElem.length; i++) {
    if (buttonElem[i] === "AC") html += `<button class=\"item type1 clear\">${buttonElem[i]}</button>`
    else if (buttonElem[i] === "+/-") html += `<button class=\"item type1 sign-reversal\" value=\"+/-\">${buttonElem[i]}</button>`
    else if (buttonElem[i] === "%") html += `<button class=\"item type1 sign-persent\" value=\"%\">${buttonElem[i]}</button>`
    else if (buttonElem[i] === "÷") html += `<button class=\"item type3 ope division\" value=\"÷\">${buttonElem[i]}</button>`
    else if (buttonElem[i] === "×") html += `<button class=\"item type3 ope multiplication\" value=\"×\">${buttonElem[i]}</button>`
    else if (buttonElem[i] === "-") html += `<button class=\"item type3 ope subtraction\" value=\"-\">${buttonElem[i]}</button>`
    else if (buttonElem[i] === "+") html += `<button class=\"item type3 ope addition\" value=\"+\">${buttonElem[i]}</button>`
    else if (buttonElem[i] === "=") html += `<button class=\"item type3 equals\" value=\"=\">${buttonElem[i]}</button>`
    else if (buttonElem[i] === ".") html += `<button class=\"item type2 comma\" value=\".\">${buttonElem[i]}</button>`
    else if (!(isNaN(buttonElem[i])) && buttonElem[i] == 0) html += `<button class=\"item type2 zero number\" value=\"0\">${buttonElem[i]}</button>`
    else if (!(isNaN(buttonElem[i]))) html += `<button class=\"item type2 number\" value=\"${buttonElem[i]}\">${buttonElem[i]}</button>`
  }
  return html
}

// setupCounter(document.querySelector('#counter'))
setupCalculator();

