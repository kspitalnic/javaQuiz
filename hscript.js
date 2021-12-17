// issues with local storage - having the list appear and also append each time 
// set ranking order 
var scoreLog=localStorage.getItem('score');
console.log(scoreLog);

var formEl = document.querySelector("#enterName");
var addScore=document.querySelector(".scores ul");

if (scoreLog){
var createNewScore=function(event){
    event.preventDefault();

    var newScore=document.createElement("li");
    newScore.textContent=document.querySelector("input[name='player']").value + ".........." + scoreLog;
    addScore.appendChild(newScore);
    document.getElementById("submitInit").disabled = true;
    localStorage.removeItem("score");
    console.log(newScore);
    addScore=JSON.stringify(newScore.textContent=document.querySelector("input[name='player']").value + ".........." + scoreLog)
    localStorage.setItem("aScore", addScore);
    localStorage.getItem();

}
formEl.addEventListener("submit", createNewScore);
}
else{
    document.getElementById("submitInit").disabled = true;
}
