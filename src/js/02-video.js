import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';
let parsTime;

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
}

player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
setCurrentTime();

function setCurrentTime() {
  if (localStorage.getItem(CURRENT_TIME)) {
    parsTime = JSON.parse(localStorage.getItem(CURRENT_TIME));
    player.setCurrentTime(parsTime);
  } else {
    parsTime = 0;
    player.setCurrentTime(parsTime);
  }
}


