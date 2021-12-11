//High Score...resolve issues - also, error on start page  so need to have it 
//nability to not add (or to submit alert) when not played 


var formEl = document.querySelector("#enterName");
var addScore=document.querySelector(".scores ul");


var createNewScore=function(event){
    event.preventDefault();

    var newScore=document.createElement("li");
    newScore.textContent=document.querySelector("input[name='player']").value;
    addScore.appendChild(newScore);
    
    console.log(newScore);
}
formEl.addEventListener("submit", createNewScore);