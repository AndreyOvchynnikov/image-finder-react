import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import s from './Modal.module.css'

const modalPortal = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
    

    useEffect(() => {

        const handleKeyDown = (event) => { 
        if (event.code === 'Escape') {
            onClose();
            }
        }
        
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown) 
        }
    }, [onClose])
    

    const handleClick = (event) => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    }
    
        return createPortal(
            <div className={s.Overlay} onClick={handleClick}> 
                <div className={s.Modal}>{children}</div>
           </div>, modalPortal
       ) 
}

export default Modal;

Modal.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.node
}