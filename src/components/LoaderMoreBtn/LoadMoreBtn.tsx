import css from './LoadMoreBtn.module.css';
interface LoadMoreBtnProps {
  onClick: () => void;
  openButton: (totalPages: number, page: number) => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick, openButton }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={onClick}>
        Load More
      </button>
    </div>
  );
};
export default LoadMoreBtn;
