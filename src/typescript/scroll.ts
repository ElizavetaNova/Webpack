import $ from 'jquery';
const widthOffset = 220;

export function srollElementsRight() {
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

    else if (shift == -440) {
        (listAllElements[0] as HTMLElement).style.transform = `translate(1320px,0)`;
        xNew = shift;
        offsetElement.css('transform', `translate(${xNew}px,0)`);
    }
    else if (shift == -660) {
        (listAllElements[1] as HTMLElement).style.transform = `translate(1320px,0)`;
        xNew = shift;
        offsetElement.css('transform', `translate(${xNew}px,0)`);
    }
    else if (shift == -880) {
        (listAllElements[2] as HTMLElement).style.transform = `translate(1320px,0)`;
        xNew = shift;
        offsetElement.css('transform', `translate(${xNew}px,0)`);
    }
    else if (shift == -1100) {
        (listAllElements[3] as HTMLElement).style.transform = `translate(1320px,0)`;
        xNew = shift;
        offsetElement.css('transform', `translate(${xNew}px,0)`);
    }
    else if ((shift == -1320) || (shift == 0)) {
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

export function srollElementsLeft() {
    const listAllElements = document.querySelectorAll('#sliderListItems .main-slider__item');
    let xNew: any;
    const offsetElement = $('#sliderListItems');
    let transformMatrix = offsetElement.css("transform");

    let matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
    let x = matrix[12] || matrix[4]; // translate x
    let x2 = Number(x);
    let shift = x2 + widthOffset;
    let x3 = x2 % 6;
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
