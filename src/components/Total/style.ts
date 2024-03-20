import styled, { css } from 'styled-components/native';

export const Container = styled.View`
   width: 100%;
   justify-content: center;
   align-items: center;
   background-color: ${({theme})=> theme.COLORS.LIGHT};
   padding: 24px;
   border-radius: 12px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.DARK_TEXT};
  `}
`;
