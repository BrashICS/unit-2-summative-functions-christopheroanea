/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);

/*** Functions ***/

function delta(a, b){
    let answer= (a-b)
    return answer
}

function slope(x1, y1, x2, y2){
    let answer = (y2 - y1) / (x2 - x1)
    return answer
}

function average(a, b){
    let answer = (a + b) / 2
    return answer
}



// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)
    let answer = Math.round(value} * ${d}/ 10
    return answer
}

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}

