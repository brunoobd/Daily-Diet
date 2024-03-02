import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  variant: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 6px;

  ${({ theme, variant }) => css`
    background-color: ${variant === "PRIMARY"
      ? theme.COLORS.GRAY_600
      : theme.COLORS.GRAY_600};

    ${variant === "SECONDARY" &&
    css`
      border: 1px solid ${theme.COLORS.GRAY_700};
    `}
  `}
`;

export const Icon = styled(MaterialIcons).attrs<Props>(
  ({ theme, variant }) => ({
    size: 20,
    color: variant === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
  })
)``;

export const Title = styled.Text<Props>`
  ${({ theme, variant }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${variant === "PRIMARY"
      ? theme.COLORS.WHITE
      : theme.COLORS.GRAY_700};
  `}
`;
