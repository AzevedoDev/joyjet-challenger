import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Button = styled.button`
  background-color: ${({ color }) => theme.color[color]};
  color: ${({ color }) => (color === 'lightBlue' ? theme.color.white : '')};
  width: 123px;
  height: 51px;
  border-radius: 4.8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
`;
