const track = document.getElementById('player');
const tracks = document.getElementsByClassName('audio-track');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const turnUp = document.getElementById('volume-up');
const turnDown = document.getElementById('volume-down');
const trackTime = document.getElementById('track-time');

function showTime() {
    trackTime.innerHTML = `${secondsToMinutes(Math.floor(player.currentTime))} / ${secondsToMinutes(Math.floor(player.duration))}`;
}

function secondsToMinutes(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds - minutes * 60;
    let formattedSeconds = ('0' + remainingSeconds).slice(-2)
    return(`${minutes}:${formattedSeconds}`)
}

setInterval(showTime, 1000);

play.addEventListener('click', () => {track.play(); showTime})
pause.addEventListener('click', () => {track.pause(); showTime})

for (let i = 0; i < tracks.length; i++) {
    tracks[i].addEventListener('click', (event) => {
        const filename = event.srcElement.parentNode.id;
        track.src = `files/recordings/${filename}.mp3`
    })
}