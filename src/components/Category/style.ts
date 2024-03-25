import styled, { css } from "styled-components/native";

type ColorContainerType = {
  color: string;
};

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0 9px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ColorContainer = styled.View<ColorContainerType>`
  border-radius: 4px;
  width: 24px;
  height: 24px;
  background-color: ${({ color }) => color};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.DARK_TEXT};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
 `}
 margin-left: 8px;
`;

export const Value = styled.Text`
  ${({ theme }) => css`
  color: ${theme.COLORS.DARK_TEXT};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `}
`;
