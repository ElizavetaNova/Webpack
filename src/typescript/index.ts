import '/src/styles/scss/index.scss';
import albums from '../data/albums.json' assert { type: 'json' };
import { playlistCarousel } from './carusel';

window.addEventListener('load', () => {
    const mainElement = document.getElementById('root');
    if (!mainElement) return;
    mainElement.appendChild(playlistCarousel(albums)[0]);
});