//Intro

var startBtn = document.querySelector("#start");
var questionEl = document.querySelector("#prompt");
var currentQ = 0;
var nextBtn = document.querySelector("#next");
var currentOp = 0;
var opa = document.querySelector("#a");
var opb = document.querySelector("#b");
var opc = document.querySelector("#c");
var opd = document.querySelector("#d");


var questions = [

    {
        que: "This is the first question that I am asking",
        options: [
            { a: "this is an answer choice", answer: false },
            { b: "y", answer: false },
            { c: "y", answer: true },
            { d: "y", nswer: false },
        ]
    },

    {
        que: "This is the second question I am asking",
        options: [
            { a: "y", answer: true },
            { b: "y", answer: false },
            { c: "y", answer: false },
            { d: "y", answer: false },
        ]
    },

    {
        que: "This is the third question that I am asking",
        options: [
            { a: "y", answer: false },
            { b: "y", answer: false },
            { c: "y", answer: true },
            { d: "y", nswer: false },
        ]
    },

    {
        que: "This is the fourth question I am asking",
        options: [
            { a: "y", answer: true },
            { b: "y", answer: false },
            { c: "y", answer: false },
            { d: "y", answer: false },
        ]
    },

    {
        que: "fifth question",
        options: [
            { a: "y", answer: false },
            { b: "y", answer: true },
            { c: "y", answer: false },
            { d: "y", answer: false },
        ]
    },

]


//Start Button
function start() {
    document.getElementById("question").style.display = "none";
    startBtn.addEventListener("click", function () {
        console.log("Start");
        document.getElementById("intro").style.display = "none";
        document.getElementById("question").style.display = "block";
        askFirstQ();
    })
}

start();

// function for question 

function askFirstQ (){
        console.log(questionEl.textContent = questions[currentQ].que);
        currentQ++;

        console.log(opa.textContent = questions[currentQ].options[currentOp].a);
        currentOp++;
        console.log(opb.textContent = questions[currentQ].options[currentOp].b);
        currentOp++;
        console.log(opc.textContent = questions[currentQ].options[currentOp].c);
        currentOp++;
        console.log(opd.textContent = questions[currentQ].options[currentOp].d);
        currentOp++;

        askQuestion();

}

function askQuestion() {
        nextBtn.addEventListener("click", function(){
            if (currentQ < 5) {
        console.log(questionEl.textContent = questions[currentQ].que);
        currentOp=0;
        console.log(opa.textContent = questions[currentQ].options[currentOp].a);
        currentOp++;
        console.log(opb.textContent = questions[currentQ].options[currentOp].b);
        currentOp++;
        console.log(opc.textContent = questions[currentQ].options[currentOp].c);
        currentOp++;
        console.log(opd.textContent = questions[currentQ].options[currentOp].d);
        currentOp++;
        currentQ++;
        }
        else { 
        //next function
    };
})}


    // console.log(questions[i]);
    // console.log(questions[i].q);
    // console.log(questions[i].options[0].a);
    // console.log(questions[i].options[1].b);
    // console.log(questions[i].options[2].c);
    // console.log(questions[i].options[3].d);
//issue anticipated - one question at a time . will neee separate logic in for loop 
