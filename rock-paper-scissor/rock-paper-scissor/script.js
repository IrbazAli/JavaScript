let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");
let youScore=0;
let computerScore=0;
let choices=document.querySelectorAll(".choise");
const Choices=["rock","scissor","paper"];
let msg=document.querySelector(".Result")

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       Game(choice.getAttribute("id"));
    })
})
document.body.addEventListener('click', () => {
    const audio = document.getElementById('background-audio');
    if (audio.muted) {
        audio.muted = false; // Unmute
        audio.play(); // Ensure playback starts
    }
});

let Game=((choice)=>{
     let compCho=Math.floor(Math.random()*3);
     let compChoice=Choices[compCho];
     let userChoice=choice;
     console.log(userChoice,compChoice);
     display(userChoice,compChoice);
})

let display=((user,comp)=>{
    if(user===comp)
    {
       msg.innerText="Match is Draw";
       msg.style.backgroundColor=" rgb(15, 199, 206)";
    }
    else if(user==="paper")
    {
        if(comp==="scissor")
        {
            msg.innerText=`You lost!${comp} beats ${user}`;
            computerScore++;
            compScore.innerText=computerScore;
            msg.style.backgroundColor="red";
        }
        else{
            msg.innerText=`You win!${user} beats ${comp}`;
            youScore++;
            userScore.innerText=youScore;
            msg.style.backgroundColor="orange";
        }
    }
    else if(user==="rock")
    {
        if(comp==="paper")
            {
                msg.innerText=`You lost!${comp} beats ${user}`;
                computerScore++;
                compScore.innerText=computerScore;
                msg.style.backgroundColor="red";
            }
            else{
                msg.innerText=`You win!${user} beats ${comp}`;
                youScore++;
                userScore.innerText=youScore;
                msg.style.backgroundColor="orange";
            }

    }
    else{
        if(comp==="rock")
            {
                msg.innerText=`You lost!${comp} beats ${user}`;
                computerScore++;
                compScore.innerText=computerScore;
                msg.style.backgroundColor="red";
            }
            else{
                msg.innerText=`You win!${user} beats ${comp}`;
                youScore++;
                userScore.innerText=youScore;
                msg.style.backgroundColor="orange";
            }
    }
})
