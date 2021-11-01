import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/';
import { NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {!isLoggedIn ? (
        <NavLinkStyled exact to="/">
          Home page
        </NavLinkStyled>
      ) : (
        <NavLinkStyled exact to="/contacts">
          My phonebook
        </NavLinkStyled>
      )}
    </nav>
  );
};
