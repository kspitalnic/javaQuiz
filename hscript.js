var scoreRank=document.getElementById('scoreRank');
var hs = JSON.parse(localStorage.getItem('hs'))||[];
var addScore=document.querySelector(".scores ul");

hs.map(hs=>{
    var name = hs.input;
    var points = hs.score;
    var newScore=document.createElement("li");
    newScore.textContent=(name + "..." + points)
    addScore.appendChild(newScore);
    console.log(newScore);
})

