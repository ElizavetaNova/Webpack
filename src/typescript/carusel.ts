import { Album } from './model/model-album-item';
import $ from 'jquery';
import { playlistCarouselItem } from './album_item';
import { srollElementsRight} from './scroll';
import { srollElementsLeft } from './scroll';
import { getInlineSvg } from './getInlineSvg';

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
    const buttonRight = $('<button>').addClass(['slider-scroll__btn', `scroll-svg`]);
    const svgElementRightArrow = getInlineSvg('rightArrow.svg');
    svgElementRightArrow.then(svg => {
        svg.classList.add('scroll-svg__img');
        buttonRight.append(svg);
    })
    buttonRight.bind('click', srollElementsRight);

    const buttonLeft = $('<button>').addClass(['slider-scroll__btn', `scroll-svg`]);
    const svgElementLeftArrow = getInlineSvg('leftArrow.svg');
    svgElementLeftArrow.then(svg => {
        svg.classList.add('scroll-svg__img');
        buttonLeft.append(svg);
    })    
    buttonLeft.bind('click', srollElementsLeft);

    return [buttonLeft, buttonRight];
}


