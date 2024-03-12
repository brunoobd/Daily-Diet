import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { css } from "styled-components/native";

type Props = {
  inDiet: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;

  align-items: center;
  justify-content: center;
  gap: 40px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const TitleContainer = styled.View`
  width: 80%;

  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, inDiet }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}

  text-align: center;
`;

export const Bold = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Image = styled.Image.attrs<Props>(({ inDiet }) => ({
  source: inDiet
    ? require("@assets/success-illustration.png")
    : require("@assets/bad-illustration.png"),
}))``;
