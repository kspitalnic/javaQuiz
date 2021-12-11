//Intro

var startBtn = document.querySelector("#start");
var questionEl = document.querySelector("#question");

var questions =[

    {q: "x", 
    options: [
        {a:"y", answer: false},
        {b:"y", answer: false},
        {c:"y", answer: true},
        {d:"y", nswer: false},
            ]
            },

    {q: "x2", 
    options: [
        {a:"y", answer: true},
        {b:"y", answer: false},
        {c:"y", answer: false},
        {d:"y", answer: false},
         ]
         },

     {q: "x3", 
     options: [
        {a:"y", aAnswer: false},
        {b:"y", aAnswer: false},
        {c:"y", answer: true},
        {d:"y", answer: false},
         ]
         },

    {q: "x4", 
    options: [
        {a:"y", answer: false},
        {b:"y", answer: false},
        {c:"y", answer: false},
        {d:"y", answer: true},
         ]
         },

    {q: "x5", 
    options: [
        {a:"y", answer: false},
        {b:"y", answer: true},
        {c:"y", answer: false},
        {d:"y", answer: false},
         ]
         }
    ]



function start(){
    document.getElementById("question").style.display="none";
startBtn.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Start");
    document.getElementById("intro").style.display="none";
    document.getElementById("question").style.display="block";
    askQ();
})
}

start();

function askQ(){

}





// function createQuiz(){
//     var questionPrompt = document.querySelector("prompt");
//     var questionOptions = document.querySelector("options");
//     console.log(questionPrompt);

//     for (var i=0; i<questions.length; i++) {
//         var question = document.createElement("prompt");
//         question.textContent=document.querySelector("prompt");
//         questionPrompt.appendChild(question);
//     }
// }
// console.log(createQuiz());
//     createQuiz(); 





//High Score...resolve issues - also, error on start page  so need to have it 
//only read it if on high score page and inability to submit alert when not played 


// var formEl = document.querySelector("#enterName");
// var addScore=document.querySelector(".scores ul");


// var createNewScore=function(event){
//     event.preventDefault();

//     var newScore=document.createElement("li");
//     newScore.textContent=document.querySelector("input[name='player']").value;
//     addScore.appendChild(newScore);
    
//     console.log(newScore);
// }
// formEl.addEventListener("submit", createNewScore);
