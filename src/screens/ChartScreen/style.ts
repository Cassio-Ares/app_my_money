import styled from "styled-components/native";


export const Container = styled.View`
  flex:1;
  justify-content: center;
  background-color: ${({theme})=> theme.COLORS.BACKGROUND};

`;

export const Content = styled.ScrollView`
 flex:1;
  padding: 0 24px;
`;

export const ChartContainer = styled.View`
  width: 100%;
  justify-content: center;
align-items: center;
`
