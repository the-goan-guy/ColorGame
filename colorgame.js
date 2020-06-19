let numofsquares = 6;
let colors = genrandom(numofsquares);
let squares = document.querySelectorAll(".square");
let pickcolor = pickedcolor();
let colorpicked = document.getElementById('clrdisp');
let msgDisp = document.getElementById('dymsg');
let h1 = document.querySelector('h1');
let resetbutton = document.getElementById('reset');
let modebtn = document.querySelectorAll('.mode');

for (let i = 0; i < modebtn.length; i++) {
    modebtn[i].addEventListener("click", function () {
        modebtn.classList[0].remove("selected");
        modebtn.classList[1].remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numofsquares = 3 : numofsquares = 6;
        reset();
    })
}


function reset() {
    colors = genrandom(numofsquares);
    pickcolor = pickedcolor();
    colorpicked.textContent = pickcolor;
    resetbutton.textContent = "New Color";
    msgDisp.textContent = "";
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = 'steelblue';
}
colorpicked.textContent = pickcolor;
resetbutton.addEventListener("click", function () {
    reset();
})
for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        let clickedcolor = this.style.backgroundColor;
        if (clickedcolor === pickcolor) {
            msgDisp.textContent = "Correct";
            resetbutton.textContent = "Play Again ?"
            Changecolor(pickcolor);
            h1.style.backgroundColor = clickedcolor;
        } else {
            this.style.backgroundColor = "#282828";
            msgDisp.textContent = "Try Again";
        }
    })
};

function Changecolor(color) {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
function pickedcolor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genrandom(num) {
    let array = []
    for (let i = 0; i < num; i++) {
        array.push(randomgen())
    }
    return array;
}
function randomgen() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}