import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { Image } from '../App/App.types';

interface ImageGalleryProps {
  items: Image[];
  openModal: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  items,
  openModal,
}: ImageGalleryProps) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id}>
          <div>
            <ImageCard
              image={item}
              openModal={imageUrl => openModal(imageUrl)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
