let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".rst");
let turnO=true;
let gameOver=false;
let count=0;
let matrix=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

resetBtn.addEventListener("click",(event)=>{
    matrix=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
turnO=true;
gameOver=false;
count=0;
boxes.forEach((box,index)=>{
    box.textContent="";
    });
});

let PlayerO={
    name: "Player O",
    symbol: "O"
};

let PlayerX={
    name: "Player X",
    symbol: "X"
}

 
boxes.forEach((box,index)=>{
    box.addEventListener("click",(event)=>{

        if(gameOver){
            return;
        }

      
let row=Math.floor(index/3);
let col=index%3;
let currBox=event.target;
console.log("Clicked box at:",row,col);


if(matrix[row][col]===null){
    matrix[row][col]=turnO? PlayerO.symbol :PlayerX.symbol;
    currBox.textContent=turnO? PlayerO.symbol :PlayerX.symbol;
count++;



    //check for winning conditions

if(matrix[row][0]===matrix[row][1] && matrix[row][1]===matrix[row][2]  && matrix[row][0]!=null ||
   matrix[0][col]===matrix[1][col]  && matrix[1][col]=== matrix[2][col] && matrix[0][col]!=null||
   matrix[0][0]===matrix[1][1] && matrix[1][1]===matrix[2][2] && matrix[0][0]!=null||
   matrix[0][2]===matrix[1][1] && matrix[1][1]===matrix[2][0] && matrix[0][2]!=null
){
gameOver=true;
alert("Player :" + currBox.textContent + " wins!!");
}
}

else{
    alert("Wrong move!");
}


if(!gameOver){
    turnO=!turnO;
}


 if(count===9  && !gameOver){
        alert("It is a draw");
       }

    });
});


