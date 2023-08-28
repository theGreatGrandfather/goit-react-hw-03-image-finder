import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

const ImageGallery = ({ images, getLargeImg, toggleModal }) => {

    return (
        <ImageList>
        {images &&
            images.map((img) => (
            <ImageGalleryItem
                key={img.id}
                id={img.id}
                src={img.webformatURL}
                alt={img.tags}
                largeImg={img.largeImageURL}
                getLargeImg={getLargeImg}
                toggleModal={toggleModal}
            />
            ))}
        </ImageList>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    })).isRequired,
    getLargeImg: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
