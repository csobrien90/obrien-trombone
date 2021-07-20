const selectedTrack = document.getElementById('player');
const tracks = document.getElementsByClassName('audio-track');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const turnUp = document.getElementById('volume-up');
const turnDown = document.getElementById('volume-down');
const trackTitle = document.getElementById('track-title');
const trackDescription = document.getElementById('track-description');
const trackTime = document.getElementById('track-time');

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

function togglePlayPause() {
    if (play.style.display == "block") {
        play.style.display = "none";
        pause.style.display = "block";
    } else if (pause.style.display == "block") {
        pause.style.display = "none";
        play.style.display = "block";
    }
}

setInterval(showTime, 200);

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

for (let i = 0; i < tracks.length; i++) {
    tracks[i].addEventListener('click', (event) => {

        if (event.target.nodeName == "H4") {
            var filename = event.target.parentNode.id;
            var title = event.target.parentNode.firstElementChild.innerHTML;
            var description = event.target.parentNode.lastElementChild.innerHTML;
            
            togglePlayPause();
            
            selectedTrack.src = `files/recordings/${filename}.mp3`
            trackTitle.innerHTML = title;
            trackDescription.innerHTML = description;
        } else {
            var filename = event.target.id;
            var title = event.target.firstElementChild.innerHTML;
            var description = event.target.lastElementChild.innerHTML;
            
            togglePlayPause();
            
            selectedTrack.src = `files/recordings/${filename}.mp3`
            trackTitle.innerHTML = title;
            trackDescription.innerHTML = description;
        }
    })
}