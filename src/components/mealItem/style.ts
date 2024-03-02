import theme from "src/theme";
import styled, { css } from "styled-components/native";

type Props = { inDiet: boolean };

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  padding: 12px 14px 14px 16px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Separator = styled.View`
  width: 2px;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Name = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;

  border-radius: 14px;

  background-color: ${({ theme, inDiet }) =>
    inDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
