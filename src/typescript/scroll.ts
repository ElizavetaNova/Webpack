import $ from 'jquery';
const widthOffset = 220;
let globalCoordinateBlock: number;
export function srollElementsRight() {
    const listAllElements = document.querySelectorAll('#sliderListItems .main-slider__item');
    let lenghtList = listAllElements.length;
        
    const widthShiftElement = widthOffset * lenghtList;

    const offsetElement = $('#sliderListItems');
    //RegExp regex = new RegExp(@"^\d$");
    let transformX = offsetElement.css("transform").match(/-\d+/)?.[0];
    console.log(`transformX = ${transformX}`)
    let x2: number; // положение блока до смещения
    let shift: number;
    const hiddenElements = 2;
    if (transformX === undefined) {
        x2 = 0;
        shift = - widthOffset;
        offsetElement.css('transform', `translateX(${shift}px)`);
    }
    else {
        x2 = Number(transformX);
        shift = x2 - widthOffset; //искомое смещение 0,220,440...
        if ((shift == -widthShiftElement) || (shift == 0)) {
            console.log(`shift = ${shift}`)
            offsetElement.css({ 'transform': '' });
            listAllElements.forEach(element => (element as HTMLElement).style.transform = '')
        }
        else if (shift < 0) {
            const numberElement = Math.abs(shift) / widthOffset - hiddenElements;
            console.log(`shift = ${shift}<0 numberElement = ${numberElement}`);
            (listAllElements[numberElement] as HTMLElement).style.transform = `translateX(${widthShiftElement}px)`;
            offsetElement.css('transform', `translateX(${shift}px)`);
        }
        else if (shift > 0) {
            let shiftElement = lenghtList - (x2 / widthOffset);
            console.log(`shift = ${shift}<0 numberElement = ${shiftElement}`);
            (listAllElements[shiftElement] as HTMLElement).style.transform = '';
            offsetElement.css('transform', `translateX(${shift}px)`);
        }
    }   
    

    //if (shift == -220) {
    //    offsetElement.css('transform', `translateX(${shift}px)`);
    //}

    //else if (shift == -440) {
    //    (listAllElements[0] as HTMLElement).style.transform = `translate(${widthShiftElement}px,0)`;
    //    offsetElement.css('transform', `translateX(${shift}px)`);
    //}
    //else if (shift == -660) {
    //    (listAllElements[1] as HTMLElement).style.transform = `translate(1320px,0)`;
    //    offsetElement.css('transform', `translateX(${shift}px)`);
    //}
    //else if (shift == -880) {
    //    (listAllElements[2] as HTMLElement).style.transform = `translate(1320px,0)`;
    //    offsetElement.css('transform', `translateX(${shift}px)`);
    //}
    //else if (shift == -1100) {
    //    (listAllElements[3] as HTMLElement).style.transform = `translate(1320px,0)`;
    //    offsetElement.css('transform', `translateX(${shift}px)`);
    //}
    //else if ((shift == -1320) || (shift == 0)) {
    //    offsetElement.css({ 'transform': '' });
    //    listAllElements.forEach(element => (element as HTMLElement).style.transform = '')
    //}
    //else if (shift > 0) {
    //    let shiftElement = lenghtList - (x2 / widthOffset);
    //    (listAllElements[shiftElement] as HTMLElement).style.transform = '';
    //    offsetElement.css('transform', `translateX(${shift}px)`);
    //}
}

export function srollElementsLeft() {
    const listAllElements = document.querySelectorAll('#sliderListItems .main-slider__item');
    let lenghtList = listAllElements.length;
    const offsetElement = $('#sliderListItems');

    const widthShiftElement = widthOffset * lenghtList;
    //let transformMatrix = offsetElement.css("transform");
    
    //let matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
    //let x = matrix[12] || matrix[4]; // translate x
    const reg: RegExp = /-?\d+/
    let transformX = offsetElement.css("transform").match(reg)//?.[0];
    let x2: number;
    let shift: number;
    console.log(transformX);
    //if (transformX == undefined) {
    //    transformX = offsetElement.css("transform").match(/-\d+/)?.[0];
    //}
    if (transformX == undefined) {
        x2 = 0;
        shift = widthOffset;
        offsetElement.css('transform', `translateX(${-shift}px)`);
    }
    else {
        x2 = Number(transformX);
    }
        shift = x2 + widthOffset;
        console.log(x2);
        console.log(shift);
        if ((shift == widthShiftElement) || (shift == 0)) {
            offsetElement.css({ 'transform': '' });
            listAllElements.forEach(element => (element as HTMLElement).style.transform = '')
        }
        else if (shift > 0) {
            const numberElement = lenghtList - (shift / widthOffset);
            (listAllElements[numberElement] as HTMLElement).style.transform = `translateX(-1320px)`;
            offsetElement.css('transform', `translateX(${shift}px)`);

        }
        else if (shift < 0) {
            let shiftElement = Math.abs(x2) / widthOffset - 2;
            (listAllElements[shiftElement] as HTMLElement).style.transform = '';
            offsetElement.css('transform', `translateX(${shift}px)`);

            //(listAllElements[numberElement] as HTMLElement).style.transform = `translateX(${widthShiftElement}px)`;
            //offsetElement.css('transform', `translateX(${shift}px)`);



        }
    
    
    //if (shift == 220) {
    //    (listAllElements[5] as HTMLElement).style.transform = `translateX(-1320px)`;
    //    offsetElement.css('transform', `translateX(${shift}px)`);
    //}
    //else if (shift == 440) {
    //    (listAllElements[4] as HTMLElement).style.transform = `translateX(-1320px)`;
    //    offsetElement.css('transform', `translateX(${shift}px)`);
    //}
    //else if (shift == 660) {
    //    (listAllElements[3] as HTMLElement).style.transform = `translate(-1320px,0)`;
    //    offsetElement.css('transform', `translate(${shift}px,0)`);
    //}
    //else if (shift == 880) {
    //    (listAllElements[2] as HTMLElement).style.transform = `translate(-1320px,0)`;
    //    offsetElement.css('transform', `translate(${shift}px,0)`);
    //}
    //else if (shift == 1100) {
    //    (listAllElements[1] as HTMLElement).style.transform = `translate(-1320px,0)`;
    //    offsetElement.css('transform', `translate(${shift}px,0)`);
    //}
    //else if ((shift == 1320) || (shift == 0)) {
    //    offsetElement.css({ 'transform': '' });
    //    listAllElements.forEach(element => (element as HTMLElement).style.transform = '')
    //}
    //else if (shift < 0) {
    //    let shiftElement = Math.abs(x2) / widthOffset - 2;
    //    (listAllElements[shiftElement] as HTMLElement).style.transform = '';
    //    offsetElement.css('transform', `translate(${shift}px,0)`);
    //}
}
