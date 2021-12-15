//code before attempt to add correct answer changes 

//questions - page does not go on if user does not select an answer. how to put in pop up when no radio button is checked
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
//ONLY ITERATES THROUGH IT CORRECTLY FOR THE FIRST TIME (  which is why originally had the two separete functions - the second for future questions... find out why and debug. then just need timer and to add to timer if wrong).

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
                nextBtn.addEventListener("click",function(){
                    askFirstQ();
            })
            }
        })
    }
    else {
        console.log("done");
        // window.location.href = "./highscores.html"
    }
}
 
// function nextQ(){
// nextBtn.addEventListener("click",function(){
//     currentQ++;
//     // document.querySelector('input[name="select"]:checked').checked = false;
//     askFirstQ();
// })}

// function askQuestion() {
//     nextBtn.addEventListener("click", function () {
//         nextBtn.textContent="Review"
//         document.querySelector('input[name="select"]:checked').checked = false;
//         if (currentQ < 5) {
//             console.log(questionEl.textContent = questions[currentQ].que);
//             currentOp = 0;
//             console.log(opa.textContent = questions[currentQ].options[currentOp].a);
//             currentOp++;
//             console.log(opb.textContent = questions[currentQ].options[currentOp].b);
//             currentOp++;
//             console.log(opc.textContent = questions[currentQ].options[currentOp].c);
//             currentOp++;
//             console.log(opd.textContent = questions[currentQ].options[currentOp].d);
//             currentOp++;
//             currentQ++;
//         }
//         // else { 
//         // document.getElementsByName("next").onclick = function(){
//         //     location.href = ""
//         // }
//         //next function
//     }
//     )
// }


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

    //         }
    //         else if ((respb) && (questions[currentQ].answers[1].b)) {
    //             console.log(questionEl.textContent = "Correct!");
    //             nextBtn.addEventListener("click",function(){
    //                 askFirstQ();
    //         })
    //         }
    //         else if ((respc) && (questions[currentQ].answers[2].c)) {
    //             console.log(questionEl.textContent = "Correct!");
    //             nextBtn.addEventListener("click",function(){
    //                 askFirstQ();
    //         })
    //         }
    //         else if ((respd) && (questions[currentQ].answers[3].d)) {
    //             console.log(questionEl.textContent = "Correct!");
    //             nextBtn.addEventListener("click",function(){
    //                 askFirstQ();
    //         })
    //         }
 
    // })