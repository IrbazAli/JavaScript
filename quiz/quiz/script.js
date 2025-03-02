const questions = [
    {
        question: "who are you",
        answers: [
            { Text: "i am khajoora khan ", correct: true },
            { Text: "who are you to ask me ", correct: false },
            { Text: "i dont know ", correct: false },
            { Text: "do not disturb me", correct: false }
        ]
    },
    {
        question: "why are you here",
        answers: [
            { Text: "i dont know ", correct: false },
            { Text: "Ayush chughtai told me to be here ", correct: true },
            { Text: "do you have any problem ", correct: false },
            { Text: "i want that is why", correct: false }
        ]
    },
    {
        question: "Ok tell me the code ",
        answers: [
            { Text: "tutu tutu tara ", correct: false },
            { Text: "mn bjaey ga tera baja  ", correct: false },
            { Text: "chal bharosy valy ", correct: true },
            { Text: "yar ja na tang mat kr", correct: false }
        ]
    },
]
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-btn");
const next = document.getElementById("next-btn");
let index = 0;
let score = 0;

function startQuiz() {
    index = 0;
    score = 0;
    showQuestions();
}
function showQuestions() {
    reset();
    let currentQus = questions[index];
    let quesNO = index + 1;
    questionElement.innerHTML = quesNO + ". " + currentQus.question;
    // for showing answers
    currentQus.answers.forEach(answer => {
        const ans = document.createElement("button");
        ans.innerHTML = answer.Text;
        ans.classList.add("btn");
        answerElement.appendChild(ans);
        ans.dataset.correct = answer.correct;
        ans.addEventListener("click", isCorrect);
    })
}

function reset() {
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);

    }
}

function isCorrect(e) {
    const selBtn = e.target;
    if (selBtn.dataset.correct==="true")
    {
        selBtn.classList.add("correct");
        score++;
    }
    else
    {
        selBtn.classList.add("incorrect");
    }
    Array.from(answerElement.children).forEach(btn=>{
        if(btn.dataset.correct==="true")
        {
            btn.classList.add("correct");
        }
        btn.disabled=true;
    });
    next.style.display="block";
}

next.addEventListener("click",()=>{
    // console.log(questions.length)
    if(index<questions.length-1)
    {
        index++;
        showQuestions();
    }
    else{
        reset();
        questionElement.innerHTML=`You scored ${score} out of ${questions.length}`;
        next.innerHTML="Play Again";
        next.addEventListener("click",startQuiz);
    }
})
startQuiz();