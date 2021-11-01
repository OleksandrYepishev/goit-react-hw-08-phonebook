import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { SpinnerContainer } from './Loader.styled';

export const Spinner = () => (
  <SpinnerContainer>
    <Loader
      type="Plane"
      color="#18547c"
      height={150}
      width={150}
      timeout={3000}
    />
  </SpinnerContainer>
);
