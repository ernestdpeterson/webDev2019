/*eslint-env jquery*/

const myArray = [1, 2, 10, 16];

// Map section

$("#map").prepend(`<div style="padding: 20px 0; background-color: #bdad98;">My Array is: ${myArray}</div>`);

$("#map").append("<h4>Array number multiplied by two using forEach.</h4>");

myArray.forEach((num) => {
    $("#map").append(`<p>${num * 2}</p>`);
});

$("#map").append("<h4>Array number multiplied by two using map to return a new array.</h4>");

const newArray = myArray.map((num) => {
    return num * 2;
});

$("#map").append(`<p>${newArray}</p>`);

// Filter section
// using es6 function shorthand the return befor num is implied

const filterArray = myArray.filter(num => num > 5);

$("#filter").append("<h4>Array filtered to return a new array showing numbers greater than 5.</h4>");

$("#filter").append(`<p>${filterArray}</p>`);

// Reduce section

const reduceArray = myArray.reduce((accumulator, num) => {
    // itterates over myArray and overwrites reduceArray each time so myArray is reduced to one item.
    return accumulator + num;
// the integer after the function here sets the accumulator start point.
}, 0);

$("#reduce").append(`<pre>const reduceArray = myArray.reduce((accumulator, num) => {
    // itterates over myArray and overwrites reduceArray each time so myArray is reduced to one item.
    return accumulator + num;
// the integer after the function here sets the accumulator start point.
}, 0);</pre><p>Result: ${reduceArray} ie: 1 + 2 + 10 + 16</p>`);