import styled, { css } from "styled-components/native";

export type CardStyleProps = "DEFAULT" | "PRIMARY" | "SECONDARY";

type Props = {
  variant: CardStyleProps;
};

export const Container = styled.View<Props>`
  width: ${({ variant }) => (variant === "DEFAULT" ? "100%" : "48%")};
  min-height: 110px;
  padding: 16px;

  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 8px;

  background-color: ${({ theme, variant }) =>
    variant === "DEFAULT"
      ? theme.COLORS.GRAY_200
      : variant === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;
