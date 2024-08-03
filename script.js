let entryboxes = document.querySelectorAll(".entrybox");
let reset_Btn = document.querySelector("#reset");
let turnO = true;
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
entryboxes.forEach((entrybox) => {
    entrybox.addEventListener("click",() =>{
        console.log("The box was clicked");
    })
});