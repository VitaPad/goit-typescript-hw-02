import { useEffect, useState } from 'react';
import { fetchPhotos } from '../../articles-api';
import ImageGallery from '../ImageGallery/ImageGallery';

import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoaderMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Image } from './App.types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function App() {
  const [photos, setPhotos] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [showBtn, setShowBtn] = useState<boolean>(false);

  const openButton = (totalPages: number, page: number) => {
    setShowBtn(totalPages !== 0 && totalPages !== page);
  };

  const openModal = (imageUrl: string) => {
    setIsOpen(true);
    setSelectedImageUrl(imageUrl);
  };

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getPhotos(): Promise<void> {
      try {
        setLoading(true);
        const data: Image[] = await fetchPhotos(query, page);
        setPhotos(prevPhotos => {
          return [...prevPhotos, ...data];
        });
        setShowBtn(true);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getPhotos();
  }, [page, query]);

  return (
    <>
      <SearchBar query={query} onSubmit={handleSubmit} setQuery={setQuery} />
      {isLoading && <Loader />}
      {photos.length > 0 && (
        <ImageGallery items={photos} openModal={openModal} />
      )}
      {error && (
        <ErrorMessage
          message={'Failed to fetch photos. Please try again later.'}
        />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImageUrl}
        style={customStyles}
      />
      {showBtn && (
        <LoadMoreBtn onClick={handleLoadMore} openButton={openButton} />
      )}
    </>
  );
}

export default App;
