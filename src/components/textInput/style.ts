import styled, { css } from "styled-components/native";

export type InputStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  variant: InputStyleProps;
  errorStyle: boolean;
};

export const Container = styled.TextInput.attrs<Props>(({ variant }) => ({
  multiline: variant === "SECONDARY",
  numberOfLines: variant === "PRIMARY" ? 1 : 4,
  textAlignVertical: variant === "SECONDARY" ? "top" : "auto",
}))`
  width: 100%;
  padding: 14px;

  border: 1px solid
    ${({ theme, errorStyle }) =>
      errorStyle ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_300};
  border-radius: 6px;

  ${({ theme, variant }) => css`
    ${variant === "SECONDARY" && { height: 120 }};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;
