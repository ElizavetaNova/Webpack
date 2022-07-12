import { Album } from './model/model-album-item';
import $ from 'jquery';
import { getInlineSvg } from './getInlineSvg';

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

    const actionLike = $('<button>').addClass(['action-block__btn', `btn-svg`]);    
    const svgElementLike = getInlineSvg('like_icon.svg');
    svgElementLike.then(svg => {
        svg.classList.add('btn-svg');
        actionLike.append(svg);
    });

    const actionPlay = $('<button>').addClass(['action-block__btn', `btn-svg`]);
    const svgElementPlay = getInlineSvg('play-arrow.svg');
    svgElementPlay.then(svg => {
        svg.classList.add('btn-svg');
        actionPlay.append(svg);
    })

    const actionShare = $('<button>').addClass(['action-block__btn', `btn-svg`]);
    const svgElementShare = getInlineSvg('share_arrow.svg');
    svgElementShare.then(svg => {
        svg.classList.add('btn-svg');
        actionShare.append(svg);
    })

    return [actionLike, actionPlay, actionShare];
}