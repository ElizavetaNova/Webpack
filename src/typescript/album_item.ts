import { Album } from './model/model-album-item';
import $ from 'jquery';

//import './custom.d';
import like from '../asset/like_icon.svg';
import play from '../asset/play-arrow.svg';
import share from '../asset/share_arrow.svg';

export function playlistCarouselItem(album: Album) {
    

    const imageElement = $(`<img>`).addClass('cover-background__img');
    import(`/src/asset/${album.imgSrc}`)
        .then((imgSrc) => {
            imageElement.attr('src', imgSrc.default);
        });

    const infoElement = $(`        
                    <div class="item-block__info block-info">
                        <span class="block-info__title info-title">
                            <span class="info-title__text">${album.title}</span>
                            <span class="info-title__point"></span>
                        </span>
                        <p class="block-info__description">${album.description}</p>
                    </div>
                </div>
            </div>        
    `);

    

    const actions = getActions();
    const coverWrapper = $('<div class="item-block__cover cover-action cover-background">')
        .append(imageElement)
        .append($('<div class="cover-action__block action-block">')
            .append(actions));
        

    return $(`<div class="main-slider__item slider-item">`)
        .append(coverWrapper)
        .append(infoElement);
}

function getActions() {
    //function createAction(svgName: string) {
    //    const control = $('<button>').addClass(['action-block__btn', `btn-svg`]);
    //    getInlineSvg(svgName).then(svg => {
    //        svg.classList.add('icon');
    //        control.append(svg);
    //    });
    //    return control;
    //}
    const svgElementLike = new DOMParser().parseFromString(like, 'image/svg+xml').documentElement;
    svgElementLike.classList.add('btn-svg');

    const svgElementPlay = new DOMParser().parseFromString(play, 'image/svg+xml').documentElement;
    svgElementPlay.classList.add('btn-svg');

    const svgElementShare = new DOMParser().parseFromString(share, 'image/svg+xml').documentElement;
    svgElementShare.classList.add('btn-svg');
    //play.addClass('btn-svg');
    //share.addClass('btn-svg');

    const actionLike = $('<button>').addClass(['action-block__btn', `btn-svg`]);
    actionLike.append(svgElementLike);

    const actionPlay = $('<button>').addClass(['action-block__btn', `btn-svg`]);
    actionPlay.append(svgElementPlay);

    const actionShare = $('<button>').addClass(['action-block__btn', `btn-svg`]);
    actionShare.append(svgElementShare);
    

    //const likeElement = createAction('like.svg');
    //const shareElement = createAction('share.svg');
    //const playElement = createAction('play.svg');

    return [actionLike, actionPlay, actionShare];
}