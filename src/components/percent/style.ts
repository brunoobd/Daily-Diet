import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

type Props = {
  inDiet: boolean;
};

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  padding: 20px 16px;

  align-items: center;
  justify-content: center;

  position: relative;

  border-radius: 5px;

  background-color: ${({ theme, inDiet }) =>
    inDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, inDiet }) => ({
  size: 24,
  color: inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  position: absolute;
  top: 10px;
  right: 10px;
`;
