import $ from 'jquery';
const offsetElement = document.getElementById('sliderListItems');
//const widthListItems = offsetElement.clientWidth;
const listAllElements = document.querySelectorAll('#gallery .main-slider__item');
const widthOffset = 230;
//let x: Number = 0;

export function srollElementsRight(x: number) {
    //let x = 0;
        const shift: number = 230;
    const xNew: number | null = x - shift;
    if (xNew != null && offsetElement != null) {
        offsetElement.style.transform = `translate(${xNew}px,0)`;
    }
    
}
export function srollElementsLeft() {



}
