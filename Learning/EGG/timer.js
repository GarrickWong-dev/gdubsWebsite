let seconds = 30;
const audio = new Audio("Assets/EGG IS DONE.mp3");
const container = document.getElementById("container");

function updateTimer(){
    const timer = document.getElementById('timer');
    const mins = String(Math.floor(seconds/60)).padStart(1,'0');
    const secs = String(seconds%60).padStart(2,'0');
    timer.textContent = `${mins}:${secs}`;
    if (seconds > 0){
        if (seconds%2 == 0){
            document.getElementById("fire").src = "Assets/Fire2.PNG";
        }else{
            document.getElementById("fire").src = "Assets/Fire1.PNG";
        }
        seconds--;
    }else{
        container.innerHTML = "";
        const clock = document.createElement('img');
        clock.classList.add('shake');
        clock.src = "Assets/clock.PNG";
        clock.alt = ""
        container.appendChild(clock);
        clearInterval(countdown);
        playAudio();
        let alarm = setInterval(playAudio,6000);
    }
}


function playAudio(){
    audio.currentTime = 0;
    audio.play();
}

let countdown;
updateTimer();
countdown = setInterval(updateTimer,1000);



