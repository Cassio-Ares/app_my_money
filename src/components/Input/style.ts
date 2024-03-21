import { TextInput } from "react-native";
import styled from "styled-components/native";

export const InputElement = styled(TextInput)`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme})=> theme.COLORS.LIGHT};
  font-size: ${({ theme})=> theme.FONT_SIZE.SM}px;
  font-family: ${({ theme})=> theme.FONT_FAMILY.REGULAR};
  justify-content: center;
  border-radius: 6px;
  margin-bottom: 8px;
`;
  
