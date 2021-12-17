//code before attempt to add correct answer changes
//Issues: Iteration through questions visible to user. 
    // pop up comes three times when finished complete. 
    // add reset radio button 
    // high score comes with name and time. only add once. 

//Intro

var startBtn = document.querySelector("#start");
var questionEl = document.querySelector("#prompt");
var nextBtn = document.querySelector("#next");
var opa = document.querySelector("#a");
var opb = document.querySelector("#b");
var opc = document.querySelector("#c");
var opd = document.querySelector("#d");
var currentQ = -1;
var currentOp = 0;
var answerLetter = 0;

var time=100;


document.getElementById("start").addEventListener("click", function(){

var interval=setInterval(function timer(){
    document.getElementById("clock").innerHTML=time;
    time--;
if (time<=-1){
    clearInterval(interval);
    nextBtn.disabled=true;
    document.getElementById("clock").innerHTML="0";
    window.alert("You ran out of time, Try again!");       
    window.location.href = "#"}}, 1000);
    console.log(time);
})

var questions = [
    {
        que: "This is the first question that I am asking",
        options: [
            { a:"this is an answer choice"},
            { b: "this is an answer choice too" },
            { c: "1c" },
            { d: "1d" }
        ],
        answers: [
            {a: false},
            {b: false},
            {c: true},
            {d: false},
        ]
    },
    {
        que: "This is the second question I am asking",
        options: [
            { a:"2a"},
            { b: "2b" },
            { c: "2c" },
            { d: "2d" }
        ],
        answers: [
            {a: false},
            {b: false},
            {c: true},
            {d: false},
        ]
    },
    {
        que: "This is the third question that I am asking",
        options: [
            { a:"3a"},
            { b: "3b" },
            { c: "3c" },
            { d: "3d" }
        ],
        answers: [
            {a: false},
            {b: false},
            {c: true},
            {d: false},
        ]
    },
    {
        que: "This is the fourth question I am asking",
        options: [
            { a:"4a"},
            { b: "4b" },
            { c: "4c" },
            { d: "4d" }
        ],
        answers: [
            {a: false},
            {b: false},
            {c: true},
            {d: false},
        ]
    },
    {
        que: "fifth question",
        options: [
            { a:"5a"},
            { b: "5b" },
            { c: "5c" },
            { d: "5d" }
        ],
        answers: [
            {a: false},
            {b: false},
            {c: true},
            {d: false},
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
//iterates through all of them but only shows some to user. error at end. 

function askFirstQ() {
    currentQ++;
    currentOp=0;

    if (currentQ < 5) {
    console.log(questionEl.textContent = questions[currentQ].que);

    console.log(opa.textContent = questions[currentQ].options[currentOp].a);
    currentOp++;
    console.log(opb.textContent = questions[currentQ].options[currentOp].b);
    currentOp++;
    console.log(opc.textContent = questions[currentQ].options[currentOp].c);
    currentOp++;
    console.log(opd.textContent = questions[currentQ].options[currentOp].d);
    currentOp=0;

    nextBtn.textContent="Review"; 

    reviewQ();

    }
    else{

        if (time<=0){
            window.alert("Please try again!");
        }
        else{
        console.log("done" + time);
        time=time;
        clearInterval();
        window.location.href = "./highscores.html"
        window.alert("Congragulations! You scored " + time +  " points on the quiz! Add your initials to the high score board!" );       
            console.log(time);
        }
    }
}


    function reviewQ () {

    nextBtn.addEventListener("click", function () {
        nextBtn.textContent="Next";

            var respa = document.getElementById("aa").checked;
            var respb = document.getElementById("bb").checked;
            var respc = document.getElementById("cc").checked;
            var respd = document.getElementById("dd").checked;

            if (((respa) && (questions[currentQ].answers[0].a))||
                ((respb) && (questions[currentQ].answers[1].b))||
                ((respc) && (questions[currentQ].answers[2].c))||
                ((respd) && (questions[currentQ].answers[3].d))) {
                console.log(questionEl.textContent = "Correct!");
                nextBtn.addEventListener("click",function(){
                    askFirstQ();
            })}
            else if((!respa)&&(!respb)&&(!respc)&&(!respd)){
                window.alert("Please select an option");
                nextBtn.textContent="Review";
                askFirstQ();
            }
            else {
                console.log(questionEl.textContent = "Incorrect");
                if (time>-1)
                    {time=time-10}
                else{time=0};
                nextBtn.addEventListener("click",function(){
                    askFirstQ();
            })
            }
        })
    }