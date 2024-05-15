let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turnO = true; // playesX playesO
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box got clicked")
        if(turnO)
            {
                box.innerText = "O";
                turnO = false;
            }
        else
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const disabledBoxes = ()=>{
    for(box of boxes)
        {
            box.disabled = true;
        }
}
const enableBoxes = ()=>{
    for(box of boxes)
        {
            box.disabled = false;
            box.innerText = "";
        }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disabledBoxes();
}
const checkWinner = ()=>{
    for(let patterns of winPatterns)
        {
            let pos1val = boxes[patterns[0]].innerText
            let pos2val = boxes[patterns[1]].innerText
            let pos3val = boxes[patterns[2]].innerText

            if(pos1val!="" && pos2val!="", pos3val!="")
                {
                    if(pos1val == pos2val && pos2val == pos3val)
                        {
                            console.log("Winner", pos1val);
                            showWinner(pos1val);
                        }
                }
        }
}
newgamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);