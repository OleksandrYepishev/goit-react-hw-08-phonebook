import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Greeting = styled.span`
  font-weight: 500;
  margin-right: 15px;
`;

export const AvatarStyled = styled(Avatar)`
  margin-right: 15px;
  color:yellow;
`;