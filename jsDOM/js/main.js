/*eslint-env jquery*/

// global variables
var firstColor = $("[name = color1]");
var secondColor = $("[name = color2]");
var colorItter = 3;
var theAddButton = $("#colorAddButton");

// add colors to change at some other time
// function addColorPicker() {
//     $("#colorInputs").append(`<input type="color" name="color${colorItter}" value="#0059ff">`);
//     colorItter++;
// }

// theAddButton[0].addEventListener("click", function() {
//     addColorPicker();
// });

// remove colors todo next

// get background color
firstColor[0].addEventListener("input", function(argument) {
    var changeFirst = argument.target.value;
    changeBackground(changeFirst, undefined);
});

secondColor[0].addEventListener("input", function(argument) {
    var changeSecond = argument.target.value;
    changeBackground(undefined, changeSecond);
});

// change background gradient
function changeBackground(changeFirst = firstColor[0].value, changeSecond = secondColor[0].value) {

    $("body").css("background-image", `linear-gradient(to right, ${changeFirst}, ${changeSecond})`);

    $("#currentColors").html(`For this background, copy into your css: <h1>background-image: linear-gradient(to right, ${changeFirst}, ${changeSecond});</h1>`);
}

changeBackground();