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
document.getElementById("rectangle_volume").addEventListener("click", rectangle_volume)
document.getElementById("surface_area").addEventListener("click", surface_area)
document.getElementById("sphere_volume").addEventListener("click", sphere_volume)
document.getElementById("sphere_area").addEventListener("click", sphere_area)
document.getElementById("slope_x").addEventListener("click", slope_slope)
document.getElementById("length_xxx").addEventListener("click", distance_distance)
document.getElementById("midpoint_xxxx").addEventListener("click", mid_point)
document.getElementById("zeros").addEventListener("click", zeros)
document.getElementById("vertex").addEventListener("click", vertex)

/*** Functions ***/

function delta(a, b){
    let answer = (a-b)
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

function length(x1, y1, x2, y2){
    let answer_1 = (delta(x2, x1))**2
    let answer_2 = (delta(y2, y1))**2
    let answer_full_1 = Math.sqrt(answer_1)
    let answer_full_2 = Math.sqrt(answer_2)
    let x = `${answer_full_1}, ${answer_full_2}`
    return x
}

function surface_area(){
    let a = Number(document.getElementById("width").value)
    let b = Number(document.getElementById("height").value)
    let c = Number(document.getElementById("length").value)
    let answer = (2*((c * a) + (c * b) + (b * a)))
    document.getElementById("answer_of_surface").textContent = `The surface area is ${answer}`
}

function sphere_volume(){
    let a = Number(document.getElementById("radius").value)
    let answer = (Math.PI * (a **2))
    let answer_1 = round_user(answer)
    document.getElementById("sphere_button_volume").textContent = `The volume of the sphere is ${answer_1}`
}

function rectangle_volume(){
    let a = Number(document.getElementById("width").value)
    let b = Number(document.getElementById("height").value)
    let c = Number(document.getElementById("length").value)
    let answer = a * b * c
    document.getElementById("answer_of_thing").textContent = `The area is ${answer}`
}

function sphere_area(){
    let a = Number(document.getElementById("radius").value)
    let answer = (4 * Math.PI * (a**2))
    let answer_1 = round_user(answer)
    document.getElementById("sphere_area_span").textContent = `The surface area of the sphere is ${answer_1}`
}   

function slope_slope(){
    let x1 = Number(document.getElementById("x1").value)
    let x2 = Number(document.getElementById("x2").value)
    let y1 = Number(document.getElementById("y1").value)
    let y2 = Number(document.getElementById("y2").value)
    let answer = ((y2-y1)/(x2-x1))
    document.getElementById("slope_xx").textContent = `The slope ${answer}`
}

function distance_distance(){
    let x1 = Number(document.getElementById("x1").value)
    let x2 = Number(document.getElementById("x2").value)
    let y1 = Number(document.getElementById("y1").value)
    let y2 = Number(document.getElementById("y2").value)
    let answer_1 = (delta(x2, x1))**2
    let answer_2 = (delta(y2, y1))**2
    let answer_full_1 = round_user(Math.sqrt(answer_1 + answer_2))
    document.getElementById("slope_xx").textContent = `The length of the line is ${answer_full_1}`
}

    function mid_point(){
    let x1 = Number(document.getElementById("x1").value)
    let x2 = Number(document.getElementById("x2").value)
    let y1 = Number(document.getElementById("y1").value)
    let y2 = Number(document.getElementById("y2").value)
    let answer_1 = ((x1 + x2) / 2)
    let answer_2 = ((y1 + y2) / 2)
    document.getElementById("slope_xx").textContent = `The mid point of x1 and x2 is ${answer_1}, the midpoint of y1 and y2 is ${answer_2}`
    }

    
    




// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)
    let answer = Math.round(value * 10**d) / 10**d;
    return answer
}

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {
    let thing = a*x**2 + b*x + c
    return thing
}







// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
    let x1 = ((-b + (Math.sqrt(b**2 - (4 * a * c)))) / 2)
    let x2 = ((-b - (Math.sqrt(b**2 - (4 * a * c)))) / 2)
    let round_1 = (round_user(x1))
    let round_2 = (round_user(x2))
    document.getElementById("zeros_id").textContent = `The zeros are ${round_1} and ${round_2}`
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
    let x_vertex = (-b /( 2 * a))   
    let d = ((b**2) - (4 * a * c))
    let y_vertex = (-d / (4 * a))
    let x_answer = round_user(x_vertex)
    let y_answer = round_user(y_vertex)
    document.getElementById("zeros_id").textContent = `The vertex's are ${x_answer} and ${y_answer}`
    console.log("ddddddd")
}
