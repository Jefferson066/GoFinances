import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;

  padding-bottom: 19px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Category = styled.View`

`;

export const Icon = styled(Feather)`

`;

export const Name = styled.Text`

`;
