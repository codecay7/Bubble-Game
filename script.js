var timer = 60 ;
var score = 0;
var hitrn;
var rn;

//creation mof bubble
function makeBubble() {
    var clutter = " ";
    for (var i = 1; i <= 96; i++) {

        rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">  ${rn} </div>`;
    }
    document.querySelector(".container_bottom").innerHTML = clutter;
}

//now timer set
function runTimer() {

    var timeInt = setInterval(function () {

        if (timer > 0) {
            timer--;
            document.querySelector("#timerchange").textContent = timer;
        }
        else {
            clearInterval(timeInt);
            document.querySelector(".container_bottom").innerHTML = `<h1>Game Over⏳ </h1>`;
        }
    }, 1000);
}

//hit
function getNewHit() {

    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

//Score increment by 10 
function increaseScore() {

    score += 10;
    document.querySelector("#scored").textContent = score;

}

//game processing
document.querySelector(".container_bottom").addEventListener("click", function (dets) {

    var clickedNumber = Number(dets.target.textContent);
    if (clickedNumber === hitrn) {
        increaseScore();
        getNewHit();
        makeBubble();
    }
    else {
        alert("tap the number same as in Hit")
    }

});

makeBubble();
runTimer();
getNewHit();
