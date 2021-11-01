import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { authSelectors, authOperations } from '../../redux/auth';
import { Container, Greeting, AvatarStyled } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Container>
      <Greeting> Welcome, {name} </Greeting>
      <AvatarStyled alt="Remy Sharp">{name}</AvatarStyled>
      <Button
        type="button"
        variant="contained"
        color="secondary"
        onClick={() => dispatch(authOperations.logOut())}
      >
        log out
      </Button>
    </Container>
  );
};
