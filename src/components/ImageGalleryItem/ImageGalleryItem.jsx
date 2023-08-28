import React from 'react'

import {Item, Img} from './ImageGalleryItem.styled'

const ImageGalleryItem = ({id, src, alt, largeImg, getLargeImg, toggleModal}) => {
    return (
        <Item
            id={id}
        >
            <Img
                src={src}
                alt={alt}
                onClick={() => {
                    getLargeImg(largeImg);
                    toggleModal();
                }}
            />
        </Item>
    )
}

export default ImageGalleryItem


