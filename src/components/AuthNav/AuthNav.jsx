import React from 'react';
import { NavLinkStyled } from '../Navigation/Navigation.styled';
import { Container } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Container>
      <NavLinkStyled to="/register" exact>
        Registration
      </NavLinkStyled>
      <NavLinkStyled to="/login" exact>
        Login
      </NavLinkStyled>
    </Container>
  );
}
