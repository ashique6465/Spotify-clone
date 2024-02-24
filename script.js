console.log("Welcome to Spotify!");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('Spotify Clone/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem')); // Corrected class name

let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "Spotify Clone/songs/1.mp3", coverPath: "./Spotify Clone/covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "Spotify Clone/songs/2.mp3", coverPath: "Spotify Clone/covers/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "Spotify Clone/songs/3.mp3", coverPath: "Spotify Clone/covers/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "Spotify Clone/songs/4.mp3", coverPath: "Spotify Clone/covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "/songs/5.mp3", coverPath: "Spotify Clone/covers/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "Spotify Clone/songs/2.mp3", coverPath: "Spotify Clone/covers/6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "Spotify Clone/songs/2.mp3", coverPath: "Spotify Clone/covers/7.jpg" },
    { songName: "Bhula Dena - Salam-e-Ishq", filePath: "Spotify Clone/songs/2.mp3", coverPath: "Spotify Clone/covers/8.jpg" },
    { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "Spotify Clone/songs/2.mp3", coverPath: "Spotify Clone/covers/9.jpg" },
    { songName: "Na Jaana - Salam-e-Ishq", filePath: "Spotify Clone/songs/4.mp3", coverPath: "Spotify Clone/covers/10.jpg" }
];

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; // Corrected method
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});
