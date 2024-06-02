import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { Image } from '../App/App.types';
import { AppModalProps } from './ImageModal.types';

Modal.setAppElement('#root');

const ImageModal: React.FC<AppModalProps> = ({
  isOpen,
  onRequestClose,
  style,
  imageUrl,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.container}
      style={{
        ...style,
        overlay: {
          ...style.overlay,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          ...style.content,
          color: 'lightsteelblue',
          overflow: 'hidden',
          border: 'none',
          background: 'none',
        },
      }}
    >
      {imageUrl && <img src={imageUrl} alt="Large" className={css.img} />}
    </Modal>
  );
};

export default ImageModal;
