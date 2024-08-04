let boxes = document.querySelectorAll(".box");
let reset_Btn = document.querySelector("#reset");
let newgame_Btn = document.querySelector("#new-game");
let notifyBox = document.querySelector(".notify");
let winMsg = document.querySelector("#win-msg");
let turnO = true;

const resetGame = () => {
    turnO = true;
    enableBoxes();
    notifyBox.classList.add("hide");
}
const winning_Patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,6],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
       if(turnO){
        box.innerText = "O";
        turnO = false;
       }else{
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const displayWinner = (winner) => {
    winMsg.innerText = `Congratulations! Winner is ${winner}`;
    notifyBox.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winning_Patterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner",pos1Val);
                displayWinner(pos1Val);
            }
        }
    }
};

newgame_Btn.addEventListener("click",resetGame);
reset_Btn.addEventListener("click",resetGame);