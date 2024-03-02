import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type HeaderStyleProps = "DEFAULT" | "PRIMARY" | "SECONDARY";

type Props = {
  variant: HeaderStyleProps;
};

export const Container = styled.View`
  width: 100%;
  height: 25px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`;

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, variant }) => ({
  size: 24,
  color:
    variant === "DEFAULT"
      ? theme.COLORS.GRAY_600
      : variant === "PRIMARY"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;
