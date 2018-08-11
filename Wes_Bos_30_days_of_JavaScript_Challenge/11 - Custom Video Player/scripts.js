const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButton = player.querySelector('[data-skip]');
const range = player.querySelector('.player__slider');

function togglePlay() {
   video.play ? video.pause() : video.play();
}