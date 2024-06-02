import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { Image } from '../App/App.types';

interface ImageGalleryProps {
  items: Image[];
  openModal: (imageUrl: string) => void;
}

export default function ImageGallery({ items, openModal }: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id}>
          <div>
            <ImageCard
              urls={item.urls}
              alt={item.title}
              openModal={() => openModal(item.urls)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

/* openModal={() => openModal(item.urls.regular)} */
