import styled from 'styled-components/native';

export const Container = styled.View`
   width: 100%;
   justify-content: center;
   align-items: center;
   background-color: ${({theme})=> theme.COLORS.LIGHT};
   padding: 24px;
   border-radius: 12px;
`

export const Title = styled.Text`
   font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
   font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
   color: ${({theme})=> theme.COLORS.DARK_TEXT};
`