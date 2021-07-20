const audioPlayer = document.getElementById('audio-player');
const tracks = document.getElementsByClassName('audio-track');

for (let i = 0; i < tracks.length; i++) {
    tracks[i].addEventListener('click', (event) => {
        const filename = event.srcElement.parentNode.id;
        audioPlayer.innerHTML = `<audio controls><source src="files/recordings/${filename}.mp3" type="audio/mpeg"></audio>`
    })
}