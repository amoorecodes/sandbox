const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButton = player.querySelectorAll('[data-skip]');
const range = player.querySelector('.player__slider');

function togglePlay() {
  video.paused ? video.play() : video.pause();
}
function toggleButton() {
  toggle.textContent = video.paused ? 'play' : 'pause';
}

function handleSkip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
toggle.addEventListener('click', togglePlay);
skipButton.forEach(btn => btn.addEventListener('click', handleSkip));
