import styled, { css } from "styled-components/native";

export type CardTypes = "up" | "down";

export type CardProps = {
  type: CardTypes;
};

export const Container = styled.View`
  justify-content: center;
  width: 100%;
  background-color: ${({ theme})=> theme.COLORS.LIGHT};
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 6px;
`;

export const ContentTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.DARK_TEXT};
  `}
`;

export const Tag = styled.View<CardProps>`
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  border-radius: 500px;
  background-color: ${({ theme, type }) => type === "up" ? theme.COLORS.PRIMARY : theme.COLORS.DOWN};
`;

export const TagTitle = styled.Text`
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.DARK_TEXT};
  `}
`;

export const Value = styled.Text<CardProps>`
   ${({ theme, type}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color:${type === "up" ? theme.COLORS.PRIMARY : theme.COLORS.DOWN};
  `}
`;

export const ContentBotton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`;

export const CategoryTitle = styled.Text`
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.DARK_TEXT};
  `}
`;

export const Date = styled.Text`
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.DARK_TEXT};
  `}
`;
