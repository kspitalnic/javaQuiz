//code before attempt to add correct answer changes 

//questions - page does not go on if user does not select an answer. how to put in pop up when no radio button is checked
//Intro

var startBtn = document.querySelector("#start");
var questionEl = document.querySelector("#prompt");
var currentQ = 0;
var nextBtn = document.querySelector("#next");
var currentOp = 0;
var answerLetter = 0;
var opa = document.querySelector("#a");
var opb = document.querySelector("#b");
var opc = document.querySelector("#c");
var opd = document.querySelector("#d");


var questions = [

    {
        que: "This is the first question that I am asking",
        options: [
            { a:"this is an answer choice"},
            { b: "this is an answer choice too" },
            { c: "y" },
            { d: "y" }
        ],
        answers: [
            {cor:false},
            {cor:true},
            {cor:true},
            {cor:true},
        ]
    },

    {
        que: "This is the second question I am asking",
        options: [
            { a: "ydfd", cora: false },
            { b: "ysdfsdf", corb: true },
            { c: "sdfsdfy", corc: false },
            { d: "ysdfsfd", cord: false }
        ],
        answers: [
            {cora:false}
        ]
    },

    {
        que: "This is the third question that I am asking",
        options: [
            { a: "y", cora: false },
            { b: "y", corb: false },
            { c: "y", cor: true },
            { d: "y", cord: false },
        ],
    },

    {
        que: "This is the fourth question I am asking",
        options: [
            { a: "y", cora: false },
            { b: "y", corb: false },
            { c: "y", corc: false },
            { d: "y", cord: true },
        ],
    },

    {
        que: "fifth question",
        options: [
            { a: "y", cora: true },
            { b: "y", corb: false },
            { c: "y", corc: false },
            { d: "y", cord: false }
        ],
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

function askFirstQ() {
    console.log(questionEl.textContent = questions[currentQ].que);

    console.log(opa.textContent = questions[currentQ].options[currentOp].a);
    currentOp++;
    console.log(opb.textContent = questions[currentQ].options[currentOp].b);
    currentOp++;
    console.log(opc.textContent = questions[currentQ].options[currentOp].c);
    currentOp++;
    console.log(opd.textContent = questions[currentQ].options[currentOp].d);
    currentQ++;

    nextBtn.addEventListener("click", function () {
        nextBtn.textContent="Next";
            var respa = document.getElementById("aa").checked;
            var respb = document.getElementById("bb").checked;
            var respc = document.getElementById("cc").checked;
            var respd = document.getElementById("dd").checked;
            console.log(respa);
            console.log(respb);

            if ((respa) && (questions[currentQ].answers[0])) {
            console.log(questionEl.textContent = "Correct!");
            }

            else if ((respb) && (questions[currentQ].answers[1])) {
                console.log(questionEl.textContent = "Correct!");
            }
            else if ((respc) && (questions[currentQ].answers[2])) {
                console.log(questionEl.textContent = "Correct!");
            }
            else if ((respd) && (questions[currentQ].answers[3])) {
                console.log(questionEl.textContent = "Correct!");
            }
            else {
                console.log(questionEl.textContent = "Incorrect");
            }
        

        askQuestion();
    })

    // nextBtn.addEventListener("click", feedback())
    // function feedback(){
    //     var respa = document.getElementsByName("a")
    //     var respb = document.getElementsByName("b")
    //     var respc = document.getElementsByName("c")
    //     var respd = document.getElementsByName("d")
    //     if ((respa=true)  && (questions[currentQ].options.cora =true)) {
    //         console.log(questionEl.textContent = "Correct!");
    //     }
    //     else if ((respb=true)  && (questions[currentQ].options.corb =true)) {
    //             console.log(questionEl.textContent = "Correct!");
    //     }
    //     else if ((respc=true)  && (questions[currentQ].options.corc =true)) {
    //             console.log(questionEl.textContent = "Correct!");
    //     }
    //     else if ((respd=true)  && (questions[currentQ].options.cord =true)) {
    //             console.log(questionEl.textContent = "Correct!");
    //     }
    //     else {
    //         console.log(questionEl.textContent = "Incorrect");
    //     }}
}

function askQuestion() {
    nextBtn.addEventListener("click", function () {
        document.querySelector('input[name="select"]:checked').checked = false;
        if (currentQ < 5) {
            console.log(questionEl.textContent = questions[currentQ].que);
            currentOp = 0;
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
        // else { 
        // document.getElementsByName("next").onclick = function(){
        //     location.href = ""
        // }
        //next function
    }
    )
}


// console.log(questions[i]);
// console.log(questions[i].q);
// console.log(questions[i].options[0].a);
// console.log(questions[i].options[1].b);
// console.log(questions[i].options[2].c);
// console.log(questions[i].options[3].d);
//issue anticipated - one question at a time . will neee separate logic in for loop 



//before move to next question
// if variable selected == variable of the correct answer, then they got it right
// console.log(questionEl.textContent = "Correct!");
// //else remove time 

// var respa = document.getElementsByName("a")
// var respb = document.getElementsByName("b")
// var respc = document.getElementsByName("c")
// var respd = document.getElementsByName("d")

// // if resp = true && cor = true 
// display text


// if(document.getElementById('gender_Male').checked) {
//     //Male radio button is checked
//   }else if(document.getElementById('gender_Female').checked) {
//     //Female radio button is checked
//   }

//if (document.getElementById(a))