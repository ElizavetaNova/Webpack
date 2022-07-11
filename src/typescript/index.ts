import ".././/styles/scss/index.scss";
import * as $ from 'jquery';
import albums from "../data/albums.json" assert { type: 'json' };
import { playlistCarousel } from './carusel';

window.addEventListener('load', () => {
    //const offsetElement: HTMLElement | null = document.getElementById('#sliderListItems');
    //console.log(offsetElement);

    const mainElement = document.getElementById('root');
    if (!mainElement) return;
    mainElement.appendChild(playlistCarousel(albums)[0]);
});