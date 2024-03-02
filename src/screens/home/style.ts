import styled, { css } from "styled-components/native";
import { UserCircle } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  padding: 0 32px;

  gap: 30px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image``;

export const ProfilePicture = styled(UserCircle).attrs(() => ({
  size: 40,
  weight: "duotone",
}))``;

export const MealsContainer = styled.View`
  flex: 1;
  align-items: start;
  gap: 10px;
`;

export const MealsTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const MealDayListTitle = styled.Text`
  margin: 20px 0 10px 0;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;
