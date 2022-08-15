let cards = [
    {
        content: {
            title: "Test 1",
            description: "test",
        },
        description: { text: "testtest" },
    },
    {
        content: {
            title: "Test 2",
            description: "test",
        },
        description: { text: "test2test" },
    },
];
newCard = {
    content: {
        title: "",
        description: "",
    },
    description: { text: "" },
};
function assignNewCard(card) {
    cards.push(JSON.parse(JSON.stringify(card)));
}
assignNewCard(newCard);
console.log(cards);
newCard.content.title = "test3";
console.log(cards);
console.log(cards[2].content.title);
