let items = [
    {
        brand: "Apple",
        name: "MacBook",
        model: "Air 13 2022",
        type: "Notebook",
        cost: "1300",
        color: "silver",
    },
    {
        brand: "Xiaomi",
        name: "Book",
        model: "2023",
        type: "Laptop",
        cost: "2200",
        color: "black",
    },
];

let decrease = true;
function sortCost(a, b) {
    if (decrease) {
        return a.cost > b.cost ? -1 : 1;
    } else {
        return a.cost < b.cost ? -1 : 1;
    }
}
function sortName(a, b) {
    return a.brand < b.brand ? -1 : 1;
}
let min = 1000;
let max = 3000;
function range(a) {
    if (a.cost >= min && a.cost <= max) {
        return a;
    }
}
let colors = ["black", "silver"];
function sortColor(a, b) {
    return colors.indexOf(a.color) > colors.indexOf(b.color) ? 1 : -1;
}
