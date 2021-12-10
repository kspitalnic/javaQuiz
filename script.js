//Intro

var startBtn = document.querySelector(".intro button");

// startBtn.addEventListener("click", function())
//     alert("button clicked");
// })










//High Score
var formEl = document.querySelector("#enterName");
var addScore=document.querySelector(".scores ul");

var createNewScore=function(event){
    event.preventDefault();

    var newScore=document.createElement("li");
    newScore.textContent=document.querySelector("input[name='player']").value;
    addScore.appendChild(newScore);
}
formEl.addEventListener("submit", createNewScore);

