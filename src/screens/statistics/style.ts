import { EdgeInsets, SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  inDiet: boolean;
};

type SafeAreaViewProps = {
  insets: EdgeInsets;
};

export const Container = styled.View<SafeAreaViewProps & Props>`
  flex: 1;

  ${({ insets, theme, inDiet }) => css`
    padding: ${insets.top}px ${insets.right}px 0 ${insets.left}px;

    background-color: ${inDiet
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}
`;

export const StatisticsHeader = styled.View`
  width: 100%;
  padding: 10px 32px 30px 32px;

  align-items: center;
  justify-content: center;
`;

export const StatisticsHeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const StatisticsHeaderSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const Content = styled.View<SafeAreaViewProps>`
  flex: 1;
  align-items: center;
  justify-content: top;
  gap: 20px;

  border-radius: 20px 20px 0 0;

  ${({ insets, theme }) => css`
    padding: 20px 32px ${insets.bottom}px 32px;

    background-color: ${theme.COLORS.GRAY_100};
  `}
`;

export const ContentTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const CardContainer = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
