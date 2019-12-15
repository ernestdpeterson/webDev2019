/*eslint-env jquery*/
/*exported Wizard Player ExtendsClass*/

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        $("#player1Section").append(`<h4>Hi, I am ${this.name}, I'm a ${this.type}</h4>`);
    }
    typeChange(changeTo) {
        this.type = changeTo;
    }
}

class Wizard {
    constructor(name, type) {
        $("#player1Section").append(`<h4>Hi, I am ${name}, I'm a ${type}</h4>`);
        return;
    }
    evolve() {
        // to be used later for increased type strength
    }
}

class ExtendsClass extends Player {
    constructor(name, type) {
        super(name, type);
    }
}