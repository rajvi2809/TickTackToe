let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
let count=0;

const pattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
       if(turnO)
       {
        box.innerText="O";
        box.classList.add("O");
        turnO=false;
       }
       else{
        box.innerText="X";
        box.classList.add("X");
        turnO=true;
       }
       box.disabled=true;
       count++;
       checkWinner();
    })
});

const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}


const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Player ${winner}\nYou won\n`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const showDraw=()=>{
    msg.innerText="Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();

}


const checkWinner=()=>{
    for(let p of pattern){
        let pos1Val=boxes[p[0]].innerText;
        let pos2Val=boxes[p[1]].innerText; 
        let pos3Val=boxes[p[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!="")
        {
            if(pos1Val==pos2Val && pos2Val==pos3Val)
            {
                showWinner(pos1Val);
                return;
            }
        }
    }
    if(count===9){
        showDraw();
    }
}


const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
        msgContainer.classList.add("hide");
        box.classList.remove("X","O");
    }
}


const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);