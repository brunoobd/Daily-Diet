import { EdgeInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { css } from "styled-components/native";

type ContainerProps = {
  insets: EdgeInsets;
  inDiet: boolean;
};

export const Container = styled.KeyboardAvoidingView<{
  insets: ContainerProps["insets"];
  inDiet: ContainerProps["inDiet"] | undefined;
}>`
  flex: 1;

  ${({ insets, theme, inDiet }) => css`
    padding-top: ${insets.top}px;

    background-color: ${inDiet === undefined
      ? theme.COLORS.GRAY_300
      : inDiet
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}
`;

export const Content = styled.View<{ insets: ContainerProps["insets"] }>`
  margin-top: 30px;

  flex: 1;
  align-items: left;
  justify-content: top;
  gap: 24px;

  border-radius: 20px 20px 0 0;

  ${({ insets, theme }) => css`
    padding: 40px 32px ${insets.bottom}px 32px;

    background-color: ${theme.COLORS.GRAY_100};
  `}
`;

export const TextContainer = styled.View`
  width: 50%;

  align-items: left;
  justify-content: center;
  gap: 5px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const DateAndTimeTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const DateAndTimeDescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const InDietTag = styled.View<{ inDiet: ContainerProps["inDiet"] }>`
  width: ${({ inDiet }) => (inDiet ? 150 : 130)}px;
  max-width: 150px;
  padding: 8px 16px;

  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 10px;

  border-radius: 50px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const InDietStatus = styled.View<{ inDiet: ContainerProps["inDiet"] }>`
  width: 8px;
  height: 8px;

  border-radius: 8px;

  background-color: ${({ theme, inDiet }) =>
    inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const InDietText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const ButtonContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;

  flex: 1;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const ModalContent = styled.View`
  width: 100%;
  padding: 20px 10px 10px 10px;

  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

export const ModalTitle = styled.Text`
  max-width: 80%;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const ModalContainerButtons = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
