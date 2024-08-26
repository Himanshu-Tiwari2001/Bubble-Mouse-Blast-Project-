
// var timer = 60;
var score = 0;
var hitrn = 0;
var timerInterval;

function makeBubble() {
    var clutter = " ";

    for (var i = 1; i <= 152; i++) {
        var rn = Math.floor(Math.random() * 10);

        clutter += `<div class="bubble">${rn}</div>`;

    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1 id="gameover" > Game Over</h1>`;

        }
    }, 1000)

}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#incscore").textContent = score;
}


document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickednumber = Number(dets.target.textContent);

    if (clickednumber === hitrn) {

        increaseScore();
        makeBubble();
        getNewHit();
    }

});


document.querySelector("#setTimerButton").addEventListener("click", function () {
    // Clear the existing timer interval if any
    // clearInterval(timerInterval);

    // Get the selected value from the dropdown and set it as the new timer value
    timer = parseInt(document.querySelector("#timerDropdown").value);
    document.querySelector("#timerval").textContent = timer;

    // Restart the game with the new timer value
    makeBubble();
    getNewHit();
    runTimer();
});


runTimer();
makeBubble();
getNewHit();




