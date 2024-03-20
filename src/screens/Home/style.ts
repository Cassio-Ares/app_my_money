import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  flex: 1;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  flex: 1;
  width: 100%;
  padding: 24px;
`;

export const ContainerBanners = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0px;
`;


export const ContainerList = styled.View`
 flex: 1;
 width: 100%;
`;