let userScore=0;//1
let compScore=0;

const choices=document.querySelectorAll(".choice");//1
const msg=document.querySelector("#msg");//7 --1

const userScorePara=document.querySelector("#user-score");//8--1
const compScorePara=document.querySelector("#comp-score");


const genCompChoice = () =>{//4 start
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];//start
}

const drawGame=()=>{//5 start ke baad --2 step
    // console.log("game was draw.");
    msg.innerText="Game was Draw.Play again.";//7 --4
    msg.style.backgroundColor="#081b31";//7--5
    
};
 const showWinner =(userWin,userChoice,compChoice) => {// 6 step//updated after step 7
 if(userWin){
    userScore++;//8--2
    userScorePara.innerText=userScore;
// console.log("you win!");
msg.innerText=`you win! Your ${userChoice} beats ${compChoice}`;//7 --2
msg.style.backgroundColor="green";//7--5
 }else{
    compScore++;//8--3
    compScorePara.innerText=compScore;
    // console.log("you lose");
    msg.innerText=`you lose. ${compChoice} beats Your ${userChoice}`;//7 --3
    msg.style.backgroundColor="red";//7--5
 }
 }// 6 khtm

const playGame=(userChoice)=>{//3
    console.log("user choice=",userChoice);//3
    //Generate computer choice ->modular
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice)// khtm

    if(userChoice === compChoice){//5 start--1 step
        //Draw Game
        drawGame();// 5 ka--3rd step start
    }else{
        let userWin=true;
        if(userChoice ==="rock"){
            //scissors,paper
          userWin=  compChoice==="paper"? false:true;

        }else if(userChoice ==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"? false : true;
        }else{
            //rock,paper
            userWin=compChoice ==="rock"?false:true;// 5 khtm
        }
        showWinner(userWin,userChoice,compChoice);//6 part starting//updated after step7
    }
};

choices.forEach((choice) =>{//2
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
    //  console.log("choice was clicked",userChoice);
    playGame(userChoice);
    });
});
