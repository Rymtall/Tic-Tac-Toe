// TIC TAC TOE Game

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgCon = document.querySelector(".msgCon");
let msg = document.querySelector("#msg")


let turn0 = true;

const winP = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let count =0;
boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
        count++;
        if(turn0){
            box.innerText = "O";
            turn0 =false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        if(count === 9){
            checkDraw();
        }

        checkWin();
    });
});

const checkDraw =() =>{
    msg.innerText = "Draw , Start New Game";
    msgCon.classList.remove("hide");
    disBoxes();
};

const disBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};
const showWin =(winner) =>{
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgCon.classList.remove("hide");
    disBoxes();
};

const checkWin = () =>{
    for(let pattern of winP){
        let pos1v = boxes[pattern[0]].innerText;
        let pos2v = boxes[pattern[1]].innerText;
        let pos3v = boxes[pattern[2]].innerText;

        if(pos1v !="" && pos2v !="" && pos3v !=""){
            if(pos1v === pos2v && pos2v === pos3v){
                showWin(pos1v);

            }
        }

    }
};

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgCon.classList.add("hide");
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
