import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type PercentTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  variant?: PercentTypeStyleProps;
};

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  padding: 20px 16px;

  align-items: center;
  justify-content: center;

  position: relative;

  border-radius: 5px;

  background-color: ${({ theme, variant }) =>
    variant === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, variant }) => ({
  size: 24,
  color:
    variant === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  position: absolute; 
  top: 10px;
  right: 10px;
`;
