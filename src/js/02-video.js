import Player from '@vimeo/player';
import { throttle } from 'lodash';

const STORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(e => {
    localStorage.setItem(STORAGE_KEY, e.seconds)
}),1000)

player.setCurrentTime(localStorage.getItem(STORAGE_KEY))

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
