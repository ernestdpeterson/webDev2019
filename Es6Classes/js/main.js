/*eslint-env jquery*/
/*global Player Wizard wizard1*/

const players = {
    // "wizards": {},
    // "peasants": {}
};
const player1 = new Player("John", "Peasant");

player1.introduce();

$("#changeButton").on("click", function() {
    player1.typeChange("Wizard");
    player1.introduce();
});

$("#newWiz").on("change", function() {
    const wizard1 = new Wizard(this.value, "Wizard");
    this.value = "";
    players.wizards = wizard1;
    console.log(wizard1.name);
});