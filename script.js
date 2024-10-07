let boxes = document.querySelectorAll(".box");
let rebtn = document.querySelector(".rebtn");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msgcontainer");

let turnX = true;

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnX){
            box.style.color = "rgb(169, 12, 12)";
            box.innerText = "X";

            turnX = false;
        }
        else{
            box.innerText = "O";
            box.style.color = "rgb(4, 69, 248)";


            turnX = true;
        }
        box.disabled =true;

        checkWinner();
    });
})

const boxesdisabled = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const boxesenabled = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `GAME OVER, ${winner} is Winner `;
    msgcontainer.classList.remove("hide");
    boxesdisabled();

}

const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner is" , pos1val);
                showWinner(pos1val);

            }
        }
    }
}


const restartGame = ()=>{
    turnX = true;
    boxesenabled();
    msgcontainer.classList.add("hide")

}

rebtn.addEventListener("click", restartGame);