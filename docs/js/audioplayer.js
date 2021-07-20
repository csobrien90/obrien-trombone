const selectedTrack = document.getElementById('player');
const tracks = document.getElementsByClassName('audio-track');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const turnUp = document.getElementById('volume-up');
const turnDown = document.getElementById('volume-down');
const trackTitle = document.getElementById('track-title');
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

setInterval(showTime, 200);

play.addEventListener('click', () => {selectedTrack.play(); showTime})
pause.addEventListener('click', () => {selectedTrack.pause(); showTime})

for (let i = 0; i < tracks.length; i++) {
    tracks[i].addEventListener('click', (event) => {
        var filename = event.srcElement.parentNode.id;
        var title = event.srcElement.parentNode.firstElementChild.innerHTML;
        selectedTrack.src = `files/recordings/${filename}.mp3`
        trackTitle.innerHTML = title;
    })
}