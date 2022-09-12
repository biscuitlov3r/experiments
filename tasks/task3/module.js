function createUser(_name, _age, _image = "cat.jpg") {
    this.card = {
        colorName: "red",
        colorAge: "green",
        headerImage: "",
    };
    this.name = _name;
    this.age = _age;
    this.image = _image;
    this.display = function () {
        $("body").append(
            `<h1 style="color: ${this.card.colorName}">${this.name}</h1><h3 style="color: ${this.card.colorAge}">${this.age}</h3><img src="${this.image}"></img>`
        );
    };
    this.changeNameColor = function (val) {
        this.card.colorName = val;
    };
    this.changeAgeColor = function (val) {
        this.card.colorAge = val;
    };
    this.changeHeaderImage = function (val) {
        this.card.headerImage = val;
    };
    this.changeName = function (val) {
        this.name = val;
    };
    this.changeImg = function (val) {
        this.image = val;
    };
}

export { createUser };
