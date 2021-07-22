//Connect to DOM

const selectedTrack = document.getElementById('player');
const tracks = document.getElementsByClassName('audio-track');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const turnUp = document.getElementById('volume-up');
const turnDown = document.getElementById('volume-down');
const trackTitle = document.getElementById('track-title');
const trackDescription = document.getElementById('track-description');
const trackTime = document.getElementById('track-time');

//Functions

function showTime() {
    if (player.duration) {
        trackTime.innerHTML = `${secondsToMinutes(Math.floor(player.currentTime))} / ${secondsToMinutes(Math.floor(player.duration))}`;
    }
}

function secondsToMinutes(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds - minutes * 60;
    let formattedSeconds = ('0' + remainingSeconds).slice(-2)
    return(`${minutes}:${formattedSeconds}`)
}

function togglePlayPause(status) { 
    //"status" indicates whether the button is being pressed or play should toggle to pause due to track switch
    if (play.style.display == "block" && status !== 1) {
        play.style.display = "none";
        pause.style.display = "block";
    } else if (pause.style.display == "block") {
        pause.style.display = "none";
        play.style.display = "block";
    }
}

//Update track time

setInterval(showTime, 200);

//Event listeners to play and pause selected track

play.addEventListener('click', () => {
    selectedTrack.play();
    showTime;
    togglePlayPause();
})

pause.addEventListener('click', () => {
    selectedTrack.pause();
    showTime;
    togglePlayPause();
})

//Event listeners to switch tracks and dislay selected track info

for (let i = 0; i < tracks.length; i++) {
    tracks[i].addEventListener('click', (event) => {

        if (event.target.nodeName == "H4") {
            var filename = event.target.parentNode.id;
            var title = event.target.parentNode.firstElementChild.innerHTML;
            var description = event.target.parentNode.lastElementChild.innerHTML;
            
            togglePlayPause(1);
            
            selectedTrack.src = `files/recordings/${filename}.mp3`
            trackTitle.innerHTML = title;
            trackDescription.innerHTML = description;
        } else {
            var filename = event.target.id;
            var title = event.target.firstElementChild.innerHTML;
            var description = event.target.lastElementChild.innerHTML;
            
            togglePlayPause(1);
            
            selectedTrack.src = `files/recordings/${filename}.mp3`
            trackTitle.innerHTML = title;
            trackDescription.innerHTML = description;
        }
    })
}