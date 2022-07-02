import ".././/styles/scss/index.scss";
import * as $ from 'jquery';

import albums from '../data/albums.json';
import { playlistCarouselItem } from './album_item';

window.addEventListener('load', () => {
    const mainElement = document.getElementById('root');
    if (!mainElement) return;
    mainElement.appendChild(playlistCarouselItem(albums[0])[0]);
});