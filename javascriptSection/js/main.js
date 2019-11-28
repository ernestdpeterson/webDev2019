/*eslint-env jquery*/

// global variables
var myArray = [
    "apple",
    "orange",
    "pear",
    "pineaple",
    "grape",
    "pomegranite"
];

var myObject = {
    "firstName": "Ernest",
    "lastName": "Peterson",
    "age": 49,
    "hopes": [
        "Mairage to a decent woman",
        "become a web developer",
        "have a famaly"
    ],
    "carreer": "Truck Driver"
};

// Facebook exercise section
var database = [
    {
        "userName": "Ernest",
        "password": "somePassword"
    } 
];

var newsfeed = [
    {
        "userName": "",
        "timeline": ""
    },
    {
        "userName": "",
        "timeline": ""
    },
    {
        "userName": "",
        "timeline": ""
    }
];

// css for fun
$("h1").css("text-align", "center");

$("#firstSectionDiv1").css("height", "40vh");
$("#firstSectionDiv1").css("background", "lightblue");

$("#firstSectionDiv2").css("height", "40vh");
$("#firstSectionDiv2").css("background", "gray");

// the prompt function!
$("#addEm").click(numTotal);

function numTotal() {
    let first = prompt("firstNum?");
    let second = prompt("secondNum?");
    $("#firstSectionDiv1").html(`${first} + ${second}`);
    $("#firstSectionDiv2").html(Number(first) + Number(second));
}

console.log(myArray, myObject, database, newsfeed);