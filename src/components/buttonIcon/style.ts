import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  variant: ButtonIconTypeStyleProps;
  halfSize: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 6px;

  ${({ theme, variant, halfSize }) => css`
    width: ${halfSize ? "48%" : "100%"};

    background-color: ${
      variant === "PRIMARY" ? theme.COLORS.GRAY_600 : "transparent"
    };

    ${
      variant === "SECONDARY" &&
      css`
        border: 1px solid ${theme.COLORS.GRAY_700};
      `
    }
  `}
`;

export const Title = styled.Text<{ variant: Props["variant"] }>`
  ${({ theme, variant }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${variant === "PRIMARY"
      ? theme.COLORS.WHITE
      : theme.COLORS.GRAY_700};
  `}
`;
