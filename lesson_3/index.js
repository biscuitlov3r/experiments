// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.sort();
// fruits.sort((data, data1) => {
//     return data.length - data1.length;
// });
// console.log(fruits);

// let height = [160, 162, 178, 152, 168, 173, 176, 170];
// height
//     .sort((data) => {
//         if (data < 170) {
//             return -1;
//         }
//     })
//     .reverse();
// console.log(height);

// let items = [
//     { name: "Миша", age: 23 },
//     { name: "Вася", age: 44 },
//     { name: "Саша", age: 23 },
//     { name: "Рома", age: 99 },
//     { name: "Ашот", age: 19 },
// ];

// items.sort((a, b) => {
//     console.log(a.age, b.age);
//     if (a.age == b.age) {
//         if (a.name > b.name) {
//             return 1;
//         }
//         return 0;
//     } else if (a.age < b.age) {
//         return -1;
//     }
// });

// console.log(items);

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
        brand: "Apple",
        name: "MacBook",
        model: "Air 13 2022",
        type: "Notebook",
        cost: "155500",
        color: "silver",
    },
];
function sortCost(a, b, decrease) {
    if (decrease) {
        return a > b ? -1 : 1;
    } else {
        return a < b ? -1 : 1;
    }
}
items.sort(sortCost(a, b, true));
console.log(items);
