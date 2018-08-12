const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButton = player.querySelectorAll('[data-skip]');
const range = player.querySelectorAll('.player__slider');

function togglePlay() {
  video.paused ? video.play() : video.pause();
}
function toggleButton() {
  toggle.textContent = video.paused ? 'play' : 'pause';
}

function handleSkip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {
  video[this.name] = this.value;
}

function handlePlayback() {
  const playback = video.currentTime / video.duration * 100;
  progressBar.style.flexBasis = `${playback}%`;
}

function handlePlaybackClick(e) {
  const switchTo = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = switchTo
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
video.addEventListener('timeupdate', handlePlayback);
toggle.addEventListener('click', togglePlay);
skipButton.forEach(btn => btn.addEventListener('click', handleSkip));
range.forEach(rng => rng.addEventListener('change', handleRange));
range.forEach(rng => rng.addEventListener('mousemove', handleRange));
progress.addEventListener('click', handlePlaybackClick);
