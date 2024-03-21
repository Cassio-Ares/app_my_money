import styled, { css } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons"

export type BannerType = "up" | "down" ;

export type BannerProps ={
    type: BannerType;
}

export const Container = styled.View<BannerProps>`
  justify-content: center;
  background-color: ${({ theme, type }) => type === "up" ? theme.COLORS.PRIMARY : theme.COLORS.DOWN};
  padding: 16px;
  border-radius: 16px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`

export const Icon = styled(AntDesign).attrs<BannerProps>(({ theme, type})=>({
    name: type === "up" ? "arrowup" : "arrowdown",
    size: 24,
    color: theme.COLORS.LIGHT
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.LIGHT};
  `}
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.LIGHT};
  `}
`;



