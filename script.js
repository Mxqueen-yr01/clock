//let > que var

import Numbers from "./lib/numbers.js";
let dateScreen = document.getElementById('date');

const heureUnite = document.getElementById("heureUnite");
const heureDizaine = document.getElementById("heureDizaine");
const minuteDizaine = document.getElementById("minuteDizaine");
const minuteUnite = document.getElementById("minuteUnite");

/**
 * Main function to refresh time on screen
 */
function displayDate(){
    let maDate = new Date();

    timeFormat(maDate.getHours(),heureDizaine,heureUnite);
    timeFormat(maDate.getMinutes(),minuteDizaine,minuteUnite);

    blinkSeparator(maDate.getSeconds());
}

/**
 * Display time on screen
 * 
 * @param {number} number - value to display
 * @param {HTMLElement} dizaine - element where we display number decade
 * @param {HTMLElement} unite - element where we display number unit
 */
function timeFormat(number,dizaine,unite){
    if(number<10){
        displayDigit(0,dizaine);
        displayDigit(number,unite);
    } else{
        number = splitNumber(number);
        displayDigit(number[0],dizaine);
        displayDigit(number[1],unite);
    }
}

/**
 * Display one digit on specified element
 * 
 * @param {number} number - number to display
 * @param {HTMLElement} idDigit - element where we display number
 */
function displayDigit(number, idDigit){

    const digit =  new Numbers().intToDigit(number);
    for(const key in digit){
        idDigit.getElementsByClassName(key)[0].style.backgroundColor = digit[key];
    }
}

/**
 * Split one number into two numbers
 * 
 * @param {number} number - number to split
 * @returns {Array.<number>} List of numbers 
 */
function splitNumber(number){
    // .map() permet d'iterer comme un foreach et de modifier les éléments un à un
    return [...number.toString()].map(Number);
} // 12 -> "12" -> ["1","2"] -> [1,2]


/**
 * Make separator blink
 * 
 * @param {number} number - number for time interval blinking 
 */
function blinkSeparator(number){
    const childrens = document.getElementById("separateur").children;
    if(number%2===0){
        childrens[0].style.backgroundColor="red";
        childrens[1].style.backgroundColor="red";
    } else{
        childrens[0].style.backgroundColor="transparent";
        childrens[1].style.backgroundColor="transparent";
    }
    
}

setInterval(displayDate,1000);

