//import albums from "../data/albums.json" assert { type: 'json' };
import { Album } from './model/model-album-item';
import $ from 'jquery';
import { playlistCarouselItem } from './album_item';
import rightArrow from '../asset/rightArrow.svg';
import leftArrow from '../asset/leftArrow.svg';
//import { srollElementsRight} from './scroll'

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
    //buttonRight.bind('click', slideBlocks);

    const buttonLeft = $('<button>').addClass(['slider-scroll__btn', `scroll-svg`]);
    buttonLeft.append(svgElementLeftArrow);
    buttonLeft.bind('click', srollElementsLeft);

    return [buttonLeft, buttonRight];
}

const widthOffset = 220;

function srollElementsRight(/*x: number*/) {
    const listAllElements = document.querySelectorAll('#sliderListItems .main-slider__item');
    let lenghtList = listAllElements.length;
    let xNew: number;
    const offsetElement = $('#sliderListItems');
    let transformMatrix = offsetElement.css("transform");    

    let matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
    let x = matrix[12] || matrix[4]; // translate x
    let x2 = Number(x); // положение блока до смещения
    let shift = x2 - widthOffset; //искомое смещение 0,220,440...
    console.log(shift);
    if (shift == -220) {
        offsetElement.css('transform', `translate(${shift}px,0)`);
    }
    //else if (shift < 0 || shift > -1320) {

    //    let i = shift / 220;
    //    if (i >= 2) {
    //        (listAllElements[i - 2] as HTMLElement).style.transform = `translate(1320px,0)`;
    //        offsetElement.css('transform', `translate(${shift}px,0)`);
    //    }
    //}
    
    else if (shift == -440) { //2 0
        (listAllElements[0] as HTMLElement).style.transform = `translate(1320px,0)`;
        xNew = shift;
        offsetElement.css('transform', `translate(${xNew}px,0)`);
    }
    else if (shift == -660) { //3 1
        (listAllElements[1] as HTMLElement).style.transform = `translate(1320px,0)`;
        xNew = shift;
        offsetElement.css('transform', `translate(${xNew}px,0)`);
    }
    else if (shift == -880) { //4 2
        (listAllElements[2] as HTMLElement).style.transform = `translate(1320px,0)`;
        xNew = shift;
        offsetElement.css('transform', `translate(${xNew}px,0)`);
    }
    else if (shift == -1100) { //5 3
        (listAllElements[3] as HTMLElement).style.transform = `translate(1320px,0)`;
        xNew = shift;
        offsetElement.css('transform', `translate(${xNew}px,0)`);
    }
    else if ((shift == -1320) || (shift == 0)) { //6(0) 0
        offsetElement.css({ 'transform': '' });
        listAllElements.forEach(element => (element as HTMLElement).style.transform = '')
    }
    else if (shift > 0) {
        let shiftElement = lenghtList - (x2 / widthOffset);
        (listAllElements[shiftElement] as HTMLElement).style.transform = '';
        xNew = shift;
        offsetElement.css('transform', `translate(${xNew}px,0)`);
    }
}

function srollElementsLeft(/*x: number*/) {
    const listAllElements = document.querySelectorAll('#sliderListItems .main-slider__item');
    let xNew: any;
    const offsetElement = $('#sliderListItems');
    let transformMatrix = offsetElement.css("transform");

    let matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
    let x = matrix[12] || matrix[4]; // translate x
    let x2 = Number(x);
    let shift = x2 + widthOffset;
    let x3 = x2%6;
    if (shift == 220) {
        xNew = shift;
        (listAllElements[5] as HTMLElement).style.transform = `translate(-1320px,0)`;
        offsetElement.css('transform', `translate(${xNew}px,0)`);
    }
    else if (shift == 440) {
        (listAllElements[4] as HTMLElement).style.transform = `translate(-1320px,0)`;
        xNew = shift;
        offsetElement.css('transform', `translate(${xNew}px,0)`);
    }
    else if (shift == 660) {
        (listAllElements[3] as HTMLElement).style.transform = `translate(-1320px,0)`;
        xNew = shift;
        offsetElement.css('transform', `translate(${xNew}px,0)`);
    }
    else if (shift == 880) {
        (listAllElements[2] as HTMLElement).style.transform = `translate(-1320px,0)`;
        xNew = shift;
        offsetElement.css('transform', `translate(${xNew}px,0)`);
    }
    else if (shift == 1100) {
        (listAllElements[1] as HTMLElement).style.transform = `translate(-1320px,0)`;
        xNew = shift;
        offsetElement.css('transform', `translate(${xNew}px,0)`);
    }
    else if ((shift == 1320) || (shift == 0)) {
        offsetElement.css({ 'transform': '' });
        listAllElements.forEach(element => (element as HTMLElement).style.transform = '')
    }
    else if (shift < 0) {
        let shiftElement = Math.abs(x2) / widthOffset - 2;
        (listAllElements[shiftElement] as HTMLElement).style.transform = '';
        xNew = shift;
        offsetElement.css('transform', `translate(${xNew}px,0)`);
    }
}
