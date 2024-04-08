import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    const { images, openModal } = this.props;

    return (
      <ul className={s.imageGallery}>
        {images.map((image, id) => {
          return (
            <ImageGalleryItem
              key={`${image.id}_${id}`}
              image={image}
              openModal={openModal}
            ></ImageGalleryItem>
          );
        })}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};
