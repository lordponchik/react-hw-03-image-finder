import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

function ImageGallery({ images, openModal }) {
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

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};
