import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import s from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({webformatURL, largeImageURL}) => {

    const [showModal, setShowModal] = useState(false);

   const toggleModal = () => {
        setShowModal(showModal => !showModal)
    }
      
       return (
            <>
               <img className={s.ImageGalleryImage}
                   onClick={toggleModal}
                   src={webformatURL}
                   alt={largeImageURL} />

               {showModal && <Modal onClose={toggleModal}>
                       <img className={s.ImageGalleryLargeImage}
                       src={largeImageURL}
                       alt={largeImageURL} />
               </Modal>}   
            </>)
    
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string
}