let canvas = document.getElementsByTagName("canvas")[0];
let ctx = canvas.getContext("2d");

let x = 300;
let y = 100;
let start = [x, y];
let list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let p = new Promise((resolve, reject) => {
    ctx.moveTo(x, y);
    for (let i of list) {
        ctx.moveTo(300, 300);
        y += 50;
        ctx.fillText(i, x, y);
    }
    resolve();
}).then(() => {
    x = start[0];
    y = start[1];
    for (i of list) {
        x += 100;
        console.log(x, y);
        ctx.moveTo(x, y);
        ctx.fillStyle = "orange";
        ctx.fillRect(x, y, 50, (500 / 100) * i);
    }
});
