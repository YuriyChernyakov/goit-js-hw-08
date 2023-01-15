import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = 'videoplayer-current-time';
let parsedTime;

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(currentTime, seconds);
}

player.setCurrentTime(localStorage.getItem(currentTime));

function setCurrentTime() {
  if (localStorage.getItem(currentTime)) {
    parsedTime = JSON.parse(localStorage.getItem(currentTime));
    player.setCurrentTime(parsedTime);
  } else {
    parsedTime = 0;
    player.setCurrentTime(parsedTime);
  }
}