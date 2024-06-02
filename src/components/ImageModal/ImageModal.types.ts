import { Image } from '../App/App.types';
export interface AppModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  style: {
    overlay?: React.CSSProperties;
    content?: React.CSSProperties;
  };
  imageUrl: string | null;
}
