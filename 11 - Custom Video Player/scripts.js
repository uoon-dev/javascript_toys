const video = document.querySelector('video');
const playerButton = document.querySelector('.player__button');
const playerBar = document.querySelector('.progress');
const playerBarFilled = document.querySelector('.progress .progress__filled');

const playVideo = function () {
    if (video.paused === true) {
        video.play();
        playerButton.innerText = '❚❚';
    } else {
        video.pause();
        this.innerText = '►';
    };
}

const jumpVideo = function (e) {
    playerBarFilled.style.flexBasis =`${e.offsetX / this.offsetWidth * 100}%`;
    video.currentTime = e.offsetX - 10;
}

video.addEventListener('timeupdate', function() {
    playerBarFilled.style.flexBasis = `${this.currentTime / this.duration * 100}%`;
});


let mousedown = false;
playerButton.addEventListener('click', playVideo);
playerBar.addEventListener('click', jumpVideo);
playerBar.addEventListener('mousemove', e => mousedown && jumpVideo(e));
playerBar.addEventListener('mousedown', () => mousedown = true);
playerBar.addEventListener('mouseup', () => mousedown = false);