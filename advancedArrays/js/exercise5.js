/*eslint-env jquery*/
// Complete the below questions using this array:
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

$("#exercises").append("<hr>");

$("#exercises").append("<h4>Append a ! to the username using forEach.</h4>");

const usernameExclamation = [];

array.forEach((num, i) => {
    usernameExclamation.push(`${num.username}!`);
    $("#exercises").append(`<p>${usernameExclamation[i]}</p>`);
});

//Create an array using map that has all the usernames with a "?" to each of the usernames

$("#exercises").append("<h4>Create an array using map that has all the usernames with a \"?\" to each of the usernames.</h4>");

const mapArray = array.map((num) => {
    return `${num.username}?`;
});

mapArray.forEach((num) => {
    $("#exercises").append(`<p>${num}</p>`);
});

//Filter the array to only include users who are on team: red

$("#exercises").append("<h4>Filter the array to only include users who are on team: red</h4>");

array.filter((num) => {
    if (num.team == "red") {
        $("#exercises").append(`<p>user: ${num.username} team: ${num.team}</p>`);
    }
});

//Find out the total score of all users using reduce

$("#exercises").append("<h4>Find out the total score of all users using reduce</h4>");

const newReduceArray = array.reduce((accumulator, num) => {
    return accumulator + num.score;
}, 0);

$("#exercises").append(`Total score is: ${newReduceArray}`);

// (1), what is the value of i?
// (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newMapArray = arrayNum.map((num) => {
//     return num * 2;
// });

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

$("#exercises").append("<br><br><h3>BONUS: create a new list with all user information, but add \"!\" to the end of each items they own.</h3>");

const newListArray = [];

array.forEach((num, i) => {
    newListArray.push(
        {
            username: num.username, 
            team:  num.team, 
            score:  num.score, 
            items: []
        });
    num.items.forEach((someNum) => {
        newListArray[i].items.push(`${someNum}!`);
    });
});

newListArray.forEach((num) => {

    $("#exercises").append(`<p>${num.username},<br> items: ${num.items}</p><br>`);

});