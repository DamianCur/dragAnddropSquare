const div = document.querySelector("div");

let divX = 150;
let divY = 50;

div.style.top = `${divY}px`;
div.style.left = `${divX}px`;

let divInsideX;
let divInsideY;

let divMove = false;


div.addEventListener("mousedown", (e) => {
    div.style.backgroundColor = "gray";
    divInsideX = e.offsetX;
    divInsideY = e.offsetY;
    divMove = !divMove;

})

div.addEventListener("mousemove", (e) => {
    if (divMove) {
        divX = e.clientX - divInsideX;
        divY = e.clientY - divInsideY;
        div.style.top = `${divY}px`;
        div.style.left = `${divX}px`;
    }
})

div.addEventListener("mouseup", () => {
    div.style.backgroundColor = "black";
    divMove = !divMove;
})