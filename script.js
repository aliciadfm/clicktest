document.getElementById("clicker").addEventListener("click", function() {updateSeconds(); counter()});

var stopCounter = false;
var count = 0;
var initialSeconds;
function updateSeconds() {
    let time = document.getElementById('time');
    let seconds = parseInt(time.innerHTML, 10);
    initialSeconds = seconds;
    let intervalId = setInterval(function () {
        seconds--;
        if (seconds >= 0) {
            time.innerHTML = seconds;
        } else if(stopCounter === false){
            stopCounter = true;
            clearInterval(intervalId);
            displayResult();
        }
    }, 1000);
}

function counter() {
    count++;
}

function displayResult() {
    let time = document.getElementById('time');
    let seconds = parseInt(time.innerHTML, 10);
    let result = document.getElementById("res");
    result.innerHTML = count/10;
}


