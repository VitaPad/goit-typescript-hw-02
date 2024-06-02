import css from './ImageCard.module.css';
import { Image } from '../App/App.types';
interface ImageCardProps {
  image: Image; // Використовуємо інтерфейс Image з App.types.ts
  openModal: (url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image.urls.regular);
  };
  return (
    <div className={css.container}>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.alt}
        onClick={handleClick}
      />
    </div>
  );
};
export default ImageCard;
