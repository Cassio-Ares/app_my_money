import styled , { css }from "styled-components/native";

export type ButtonType= {
  type: "up" | "down" ;
} 

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 0 24px;
`;

export const FormContainer = styled.View`
 padding-top: 24px;
`;

export const Title = styled.Text`
  ${({ theme })=> css`
    color: ${({ theme }) => theme.COLORS.DARK_TEXT};
    font-size: ${({ theme})=> theme.FONT_SIZE.LG}px;
    font-family: ${({ theme})=> theme.FONT_FAMILY.BOLD};
  `}
`;

export const ContainerButton = styled.View`
   justify-content: center;
   align-items: center;
   flex-direction: row;
   margin-bottom: 24px;
   `;

export const ContentButton = styled.View`
  justify-content: center;
   align-items: center;
   padding-bottom: 24px;
`;

export const Button = styled.TouchableOpacity<ButtonType>`
   width: 100%;
   padding: 16px;
   justify-content: center;
   align-items: center;
   border-radius: 4px;
   background-color: ${({theme, type})=> type === "up" ? theme.COLORS.PRIMARY : theme.COLORS.DOWN}
`;

export const ButtonTitle = styled.Text`
   ${({ theme })=> css`
    color: ${({ theme }) => theme.COLORS.LIGHT};
    font-size: ${({ theme})=> theme.FONT_SIZE.LG}px;
    font-family: ${({ theme})=> theme.FONT_FAMILY.BOLD};
  `}
`;

