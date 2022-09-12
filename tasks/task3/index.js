import { createUser } from "./module.js";

$("button").on("click", () => {
    let card = new createUser($("#name").val(), $("#age").val());
    card.changeNameColor("green");
    card.changeAgeColor("grey");
    card.display();
});
