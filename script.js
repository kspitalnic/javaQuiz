var startBtn = document.querySelector("#start");
var questionEl = document.querySelector("#prompt");
var nextBtn = document.querySelector("#next");
var rvwBtn = document.querySelector("#review");
var opa = document.querySelector("#a");
var opb = document.querySelector("#b");
var opc = document.querySelector("#c");
var opd = document.querySelector("#d");
var currentQ = 0;
var currentOp = 0;
var answerLetter = 0;

var time = 60;


document.getElementById("start").addEventListener("click", function () {

    var interval = setInterval(function timer() {
        document.getElementById("clock").innerHTML = time;
        time--;
        if (time <= -1) {
            clearInterval(interval);
            nextBtn.disabled = true;
            document.getElementById("clock").innerHTML = "0";
            window.alert("You ran out of time, Try again!");
            window.location.href = "#"
        }
    }, 1000);
    console.log(time);
})

var questions = [
    {
        que: "Which method outputs a message to the web console?",
        options: [
            { a: "console.log()" },
            { b: "window.alert('message here')" },
            { c: "//" },
            { d: "window.prompt('message here')" }
        ],
        answers: [
            { a: true },
            { b: false },
            { c: false },
            { d: false },
        ]
    },
    {
        que: "What are constructs that are built into the browser for efficent JavaScript coding?",
        options: [
            { a: "JSON" },
            { b: "function" },
            { c: "APIs" },
            { d: "Hashtags" }
        ],
        answers: [
            { a: false },
            { b: false },
            { c: true },
            { d: false },
        ]
    },
    {
        que: "What kind of data can you store in local storage?",
        options: [
            { a: "objects" },
            { b: "strings" },
            { c: "integers" },
            { d: "binary" }
        ],
        answers: [
            { a: false },
            { b: true },
            { c: false },
            { d: false },
        ]
    },
    {
        que: "What tag do you use to link a JavaScript file to HTML",
        options: [
            { a: "<link>" },
            { b: "<main>" },
            { c: "<script>" },
            { d: "<head>" }
        ],
        answers: [
            { a: false },
            { b: false },
            { c: true },
            { d: false },
        ]
    },
    {
        que: "What method returns the first element in the document that matches its selector?",
        options: [
            { a: "document.addEverntListener()" },
            { b: "document.setItem()" },
            { c: "document.getElementById()" },
            { d: "document.querySelector()" }
        ],
        answers: [
            { a: false },
            { b: false },
            { c: false },
            { d: true },
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

function askFirstQ() {
    currentOp = 0;

    document.getElementById("aa").disabled = false;
    document.getElementById("bb").disabled = false;
    document.getElementById("cc").disabled = false;
    document.getElementById("dd").disabled = false;

    if (currentQ < 5) {
        console.log(questionEl.textContent = questions[currentQ].que);

        console.log(opa.textContent = questions[currentQ].options[currentOp].a);
        currentOp++;
        console.log(opb.textContent = questions[currentQ].options[currentOp].b);
        currentOp++;
        console.log(opc.textContent = questions[currentQ].options[currentOp].c);
        currentOp++;
        console.log(opd.textContent = questions[currentQ].options[currentOp].d);
        currentOp = 0;

        rvwBtn.classList.remove("hide");
        nextBtn.setAttribute("class", "hide");

        rvwBtn.addEventListener("click", reviewQ);

    }
    else {

        if (time <= 0) {
            window.alert("Please try again!");
        }
        else {
            console.log("done " + time);
            time = time;
            score = JSON.stringify(time);
            console.log(score);
            clearInterval();
            var input = window.prompt("Congragulations! You scored " + time + " points on the quiz! Add your initials to the high score board!");

            window.location.href = "./highscores.html"

            //save to local storage 

            var hs = JSON.parse(localStorage.getItem("hs")) || [];
            var scoreObject = {
                "score": score,
                "input": input,
            }
            hs.push(scoreObject);
            hs.sort((a, b) => b.score - a.score);

            localStorage.setItem("hs", JSON.stringify(hs));
        }
    }
}

function reviewQ() {

    rvwBtn.setAttribute("class", "hide");
    nextBtn.classList.remove("hide");

    document.getElementById("aa").disabled = true;
    document.getElementById("bb").disabled = true;
    document.getElementById("cc").disabled = true;
    document.getElementById("dd").disabled = true;

    var respa = document.getElementById("aa").checked;
    var respb = document.getElementById("bb").checked;
    var respc = document.getElementById("cc").checked;
    var respd = document.getElementById("dd").checked;

    if (((respa) && (questions[currentQ].answers[0].a)) ||
        ((respb) && (questions[currentQ].answers[1].b)) ||
        ((respc) && (questions[currentQ].answers[2].c)) ||
        ((respd) && (questions[currentQ].answers[3].d))) {
        console.log(questionEl.textContent = "Correct!");
        nextBtn.addEventListener("click", function () {
            //get an error message for following line. not yet resolved
            if (document.querySelector('input[name="select"]:checked').checked = true) {
                document.querySelector('input[name="select"]:checked').checked = false
            };
            currentQ++;

            askFirstQ();
        })
    }

    else if (((respa) && (!questions[currentQ].answers[0].a)) ||
        ((respb) && (!questions[currentQ].answers[1].b)) ||
        ((respc) && (!questions[currentQ].answers[2].c)) ||
        ((respd) && (!questions[currentQ].answers[3].d))) {
        console.log(questionEl.textContent = "Incorrect");
        if (time > -1) { time = time - 10 }
        else { time = 0 };
        nextBtn.addEventListener("click", function () {
            //get an error message for following line. not resolved
            if (document.querySelector('input[name="select"]:checked').checked = true) {
                document.querySelector('input[name="select"]:checked').checked = false;
            };
            currentQ++;
            askFirstQ();
        })
    }
    
    else {
        window.alert("Please select an option");

        askFirstQ();
    }
}




