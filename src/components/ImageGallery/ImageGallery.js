import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem'
import s from './ImageGallery.module.css'

const ImageGallery = ({ gallery }) => {
    return (
        <ul className={s.ImageGallery}>
            {gallery.map(picture => {
                const { id, webformatURL, largeImageURL } = picture 
                return (
                    <li key={id} className={s.ImageGalleryItem}>
                        <ImageGalleryItem
                            webformatURL={webformatURL}
                            largeImageURL={largeImageURL} />
                    </li>)})}  
        </ul>)}

export default ImageGallery;

ImageGallery.propTypes = {
    gallery: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        webformatURL: PropTypes.string,
        largeImageURL: PropTypes.string
    }))}
