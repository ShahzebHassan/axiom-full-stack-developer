//Get DOm elements
const container = document.getElementById('container');
const previousBtn = document.getElementById('previous');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const title = document.getElementById('song-title');
const albumArt = document.getElementById('album-art');

//song Array
const tracks = ['Anthem', 'Ertugral'];

//index of currently playing song
let trackIndex = 1;

//load the initial track
loadTrack(tracks[trackIndex]);

//function to load the selected track
function loadTrack(track) {
    //update the text for title of track
    title.innerText = track;
    //update the src in the audio element with the audio file
    audio.src = `music/${track} .mp3`;
    //update the sourse img element with the img file of the selected track
    albumArt.src = `images/${track}.jpg`;
};
//function to play the track
function playTrack() {
    //add the seacond class play to the container
    container.classList.add('play');
    //remove the play icon and display the pause icon
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    //play the track using the audio element
    audio.play();
};

    
//function to pause the track
function pauseTrack() {
    //add the seacond class play to the container
    container.classList.add('play');
    //remove the play icon and display the pause icon
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    //play the track using the audio element
    audio.pause();
};
//function to switch to previous track
function prevTrack() {
    //decrement the value of track index by 1 to select the previous trackarray
    trackIndex--;
    //check if select track index is less than 0
    if (trackIndex < 0) {
        //reassign the track index to last track in the track array
        trackIndex = tracks.length - 1;
        console.log(trackIndex);
    };
    //load the selected track
    loadTrack(tracks)
};

//event litsners
//listen for click on play button
playBtn.addEventListener('click', () => {
    //check if track is playing
    const isPlaying = container.classList.contains('play');
    //condition statement based on status of audio playback
    if(isPlaying) {
        //if track is playing pause the track
        pauseTrack();
    }else {
        //if track is not playing play the track
        playTrack();
    }
})