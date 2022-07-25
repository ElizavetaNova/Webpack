import $ from 'jquery';
const widthOffset = 220;

function getTransform(element: JQuery<HTMLElement>) {
    return element[0].style.transform.match(/-?\d+/)?.[0];    
}

export function srollElementsRight() {
    const listAllElements = document.querySelectorAll('#sliderListItems .main-slider__item');
    const lenghtList = listAllElements.length;        
    const widthShiftElement = widthOffset * lenghtList;

    const sliderList = $('#sliderListItems');
    const translateX = getTransform(sliderList);
    let translateXTypeNumber: number; // положение блока до смещения
    let shift: number;
    const hiddenElements = 2;
    if (translateX === undefined) {
        shift = -widthOffset;
        sliderList.css('transform', `translateX(${shift}px)`);
    }
    else {
        translateXTypeNumber = Number(translateX);
        shift = translateXTypeNumber - widthOffset; //искомое смещение 0,220,440...
        if (shift === -widthShiftElement || shift === 0) {
            sliderList.css({ 'transform': '' });
            listAllElements.forEach(element => (element as HTMLElement).style.transform = '')
        }
        else if (shift < 0) {
            const numberElement = Math.abs(shift) / widthOffset - hiddenElements;
            (listAllElements[numberElement] as HTMLElement).style.transform = `translateX(${widthShiftElement}px)`;
            sliderList.css('transform', `translateX(${shift}px)`);
        }
        else if (shift > 0) {
            const shiftElement = lenghtList - (translateXTypeNumber / widthOffset);
            (listAllElements[shiftElement] as HTMLElement).style.transform = '';
            sliderList.css('transform', `translateX(${shift}px)`);
        }
    }
}

export function srollElementsLeft() {
    const listAllElements = document.querySelectorAll('#sliderListItems .main-slider__item');
    const lenghtList = listAllElements.length;
    const sliderList = $('#sliderListItems');

    const widthShiftElement = widthOffset * lenghtList;    
    const translateX = getTransform(sliderList);
    let translateXTypeNumber: number;
    let shift: number;
    if (translateX == undefined) {
        translateXTypeNumber = 0;
        shift = widthOffset;
        sliderList.css('transform', `translateX(${shift}px)`);
    }
    else {
        translateXTypeNumber = Number(translateX);
    }
    shift = translateXTypeNumber + widthOffset;
    if ((shift == widthShiftElement) || (shift == 0)) {
        sliderList.css({ 'transform': '' });
        listAllElements.forEach(element => (element as HTMLElement).style.transform = '')
    }
    else if (shift > 0) {
        const numberElement = lenghtList - (shift / widthOffset);
        (listAllElements[numberElement] as HTMLElement).style.transform = `translateX(-1320px)`;
        sliderList.css('transform', `translateX(${shift}px)`);
    }
    else if (shift < 0) {
        let shiftElement = Math.abs(translateXTypeNumber) / widthOffset - 2;
        (listAllElements[shiftElement] as HTMLElement).style.transform = '';
        sliderList.css('transform', `translateX(${shift}px)`);
    }    
}
