import css from './SearchBar.module.css';
import { FormEvent, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const queryInput = form.querySelector<HTMLInputElement>(
      'input[name="search"]'
    );
    if (!queryInput || queryInput.value.trim() === '') {
      toast.error('Please enter a search term!');
      return;
    }
    onSubmit(queryInput.value);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button className={css.button} type="submit">
          Search
        </button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </header>
  );
};

export default SearchBar;
