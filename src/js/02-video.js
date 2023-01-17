import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
}

player.setCurrentTime(localStorage.getItem(CURRENT_TIME));

// function setCurrentTime() {
//   if (localStorage.getItem(CURRENT_TIME)) {
//     parsedTime = JSON.parse(localStorage.getItem(CURRENT_TIME));
//     player.setCurrentTime(parsedTime);
//   } else {
//     parsedTime = 0;
//     player.setCurrentTime(parsedTime);
//   }
// }

// setCurrentTime();