import { Album } from './model/model-album-item';
import $ from 'jquery';
import { playlistCarouselItem } from './album_item';
import rightArrow from '../asset/rightArrow.svg';
import leftArrow from '../asset/leftArrow.svg';
import { srollElementsRight} from './scroll';
import { srollElementsLeft} from './scroll'

export function playlistCarousel(items: Album[]) {
    
    const albumItems = items.map(playlistCarouselItem);    
    const sliderList = $('<div class="main-slider__list main-slider">')
        .append(albumItems)
    sliderList.attr('id', 'sliderListItems');
    const listDisplayedElements = $('<div class="main-slider__displayed">').append(sliderList);

    const scrollButtons = getScrollButtons();
    const scroll = $('<div class="main-slider__scroll slider-scroll">').append(scrollButtons);
    
    return $('<div class="main-slider">')
        .append(listDisplayedElements)
        .append(scroll);  
}

function getScrollButtons() {
    const svgElementRightArrow = new DOMParser().parseFromString(rightArrow, 'image/svg+xml').documentElement;
    svgElementRightArrow.classList.add('scroll-svg__img');

    const svgElementLeftArrow = new DOMParser().parseFromString(leftArrow, 'image/svg+xml').documentElement;
    svgElementLeftArrow.classList.add('scroll-svg__img');

    const buttonRight = $('<button>').addClass(['slider-scroll__btn', `scroll-svg`]);
    buttonRight.append(svgElementRightArrow);
    buttonRight.bind('click', srollElementsRight);

    const buttonLeft = $('<button>').addClass(['slider-scroll__btn', `scroll-svg`]);
    buttonLeft.append(svgElementLeftArrow);
    buttonLeft.bind('click', srollElementsLeft);

    return [buttonLeft, buttonRight];
}


