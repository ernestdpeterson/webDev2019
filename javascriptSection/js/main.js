/*eslint-env jquery*/
/*exported removeTodo*/

// global variables
var myArray = [
    "apple",
    "orange",
    "pear",
    "pineapple",
    "grape",
    "pomegranate"
];

var myObject = {
    "firstName": "Ernest",
    "lastName": "Peterson",
    "age": 49,
    "hopes": [
        "Marriage to a decent woman",
        "become a web developer",
        "have a family"
    ],
    "career": "Truck Driver"
};

// Facebook exercise section

var database = [
    {
        "userName": "Ernest",
        "password": "somePassword"
    },
    {
        "userName": "Sally",
        "password": "S"
    },
    {
        "userName": "James",
        "password": "J"
    },
    {
        "userName": "Bob",
        "password": "B"
    } 
];

var newsfeed = [
    {
        "userName": "Bobby",
        "timeline": "Uhhhh..."
    },
    {
        "userName": "Sally",
        "timeline": ":-)"
    },
    {
        "userName": "James",
        "timeline": "huh?"
    }
];

function faceBookLogin(theName) {
    $("#FaceBookLoginButton").css("display", "none");
    $("#faceBookFeed").empty();
    $("#userName").html(`Hello ${theName}`);
    for (let i = 0; i < newsfeed.length; i++) {
        $("#faceBookFeed").append(
            `<p><b>${newsfeed[i].userName}: </b>${newsfeed[i].timeline}</p><br>`
        );
    }
    
}

$("#FaceBookLoginButton").click(function() {
    let thePrompt = prompt("What's your User Name?");
    let thePassword = prompt("what's your password?");

    for (let i = 0; i < database.length; i++) {
        if (thePrompt === database[i].userName && thePassword === database[i].password) {

            faceBookLogin(database[i].userName);
            break;
            
        } else if (i == (database.length-1)) {
            $("#faceBookFeed").append(
                "<p><b>User Name and/or Password are incorrect</b></p><br>"
            );
        }
    }
});

// todo section
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study",
    "eat healthy"
];

function todoPush() {
    todos.push($("#addtodo").val());
}

function removeTodo(argument) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i] == argument) {
            todos.splice(i,1);
        }
    }

    $("#todoList").empty();

    for (let i = 0; i < todos.length; i++) {
        $("#todoList").append(`<li>${todos[i]}<button id="${todos[i]}" onclick="removeTodo(this.id)">Remove</button</li>`);
    }
}

for (let i = 0; i < todos.length; i++) {
    $("#todoList").append(`<li>${todos[i]}<button id="${todos[i]}" onclick="removeTodo(this.id)">Remove</button></li>`);
}

$("#todoAdd").click(function() {
    if ($("#addtodo").val() !== undefined) {
        todoPush();
        $("#addtodo").val("");
        $("#todoList").empty();
        for (let i = 0; i < todos.length; i++) {
            $("#todoList").append(`<li>${todos[i]}<button id="${todos[i]}" onclick="removeTodo(this.id)">Remove</button</li>`);
        }
    }
});

// css for fun
$("h1").css("text-align", "center");

$("#firstSectionDiv1").css("height", "10vh");
$("#firstSectionDiv1").css("background", "lightblue");

$("#firstSectionDiv2").css("height", "10vh");
$("#firstSectionDiv2").css("background", "gray");

// the prompt function!
$("#addEm").click(numTotal);

function numTotal() {
    let first = prompt("firstNum?");
    let second = prompt("secondNum?");
    $("#firstSectionDiv1").html(`${first} + ${second}`);
    $("#firstSectionDiv2").html(Number(first) + Number(second));
}

console.log(myArray, myObject);