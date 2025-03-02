let boxes = document.querySelectorAll(".btn");
let boxArray = [];
let msg = document.querySelector(".msg");
let turn = true;
let reset = document.querySelector(".reset");
const WinningCombo = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6], // Diagonal top-right to bottom-left
];
boxes.forEach((box) => {
    let boxClass = Array.from(box.classList).find(cls => cls.startsWith("box"));
    if (boxClass) {
        boxArray.push({
            name: boxClass,
            status: false,
            value: undefined
        })
    }
})

boxes.forEach((box) => {
    let val;
    box.addEventListener("click", () => {
        let boxClass = Array.from(box.classList).find(cls => cls.startsWith("box"));
        let boxObj = boxArray.find(obj => obj.name === boxClass); // Find the corresponding object in the array
        if (turn) {
            val = box.innerText = "0"
            turn = false;
            box.style.color = "red";
        }
        else {
            val = box.innerText = "X";
            turn = true;
            box.style.color = "blue";
        }
        box.disabled = true;
        if (boxObj) {
            boxObj.status = true;
            boxObj.value = box.innerText;
        }
        checkWinner(val);
    })

})
let checkWinner = (val) => {
    for (let pattern of WinningCombo) {
        let val1 = boxArray[pattern[0]];
        let val2 = boxArray[pattern[1]];
        let val3 = boxArray[pattern[2]];
        if (val1.status != false && val2.status != false && val3.status != false) {
            if (val1.value == val2.value && val2.value == val3.value) {
                msg.innerText = `Congradulations! ${val1.value} is winner`;
                disable();
                return;
            }
        }
    }
    if (checkDraw()) {
        msg.innerText = `OOHO!Match is drawn`;
    }
}

let checkDraw = () => {
    return boxArray.every(box => box.status);
    }


let Reset = () => {
    boxArray.forEach((box) => {
        box.status = false;
        box.value = undefined;
    })
    boxes.forEach((btn) => {
        btn.innerText = "";
        btn.disabled = false;
    })
    msg.innerText = "";
    turn = true;
}
reset.addEventListener("click", Reset);
let disable = () => {
    for (let btn of boxes) {
        btn.disabled = true;
    }
}