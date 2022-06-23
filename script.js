let secondsRemaining;
let intervalHandle;
let startButton = document.getElementById("start");

startButton.onclick = function(){
    startCountdown();
};

function resetPage(){
    document.getElementById("inputArea").style.display = "block";
}

function tick(){
    let timeDisplay = document.getElementById("time");

    let min = Math.floor(secondsRemaining / 60);
    let sec = secondsRemaining - (min * 60);
    
    if (sec < 10) {
        sec = "0" + sec;
    }

    let mensaje = min.toString() + ":" + sec;

    timeDisplay.innerHTML = mensaje;

    if (secondsRemaining === 0) {
        alert ("listo");
        clearInterval(intervalHandle);
        resetPage();
    }

    secondsRemaining--;
}

function startCountdown() {
    resetPage()

    let minutes = Math.floor(document.getElementById("minutes").value);

    if(isNaN(minutes) || minutes == " "){
        alert("Por favor ingrese un número");
        return;
    }

    secondsRemaining = minutes;
    intervalHandle = setInterval(tick, 1000);

    document.getElementById("inputArea").style.display="none";


}