const display = document.getElementById("display");
let timer = null;
let startTIme = 0;
let elaspsedTime = 0;
let isRunning = false;
function start(){
    if(!isRunning){
        startTIme = Date.now() - elaspsedTime;
        timer = setInterval(update,10)
        isRunning = true; 
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elaspsedTime = Date.now() - startTIme;
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer)
    startTIme = 0;
    elaspsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}
function update(){
    const currentTime = Date.now();
    elaspsedTime = currentTime - startTIme

    let hours = Math.floor(elaspsedTime / (1000 * 60 *60))
    let min = Math.floor(elaspsedTime / (1000 * 60) % 60);
    let sec = Math.floor(elaspsedTime / 1000 % 60);
    let millisec = Math.floor(elaspsedTime % 1000 / 10);

    hours = String(hours).padStart(2,"0");
    min = String(min).padStart(2,"0");
    sec = String(sec).padStart(2,"0");
    millisec = String(millisec).padStart(2,"0");

    display.textContent = `${hours}:${min}:${sec}:${millisec}`
}