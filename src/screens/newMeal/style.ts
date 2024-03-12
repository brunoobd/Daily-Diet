import RNDateTimePicker from "@react-native-community/datetimepicker";
import { EdgeInsets } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  insets: EdgeInsets;
};

export const Container = styled.KeyboardAvoidingView<Props>`
  flex: 1;

  ${({ insets, theme }) => css`
    padding-top: ${insets.top}px;

    background-color: ${theme.COLORS.GRAY_300};
  `}
`;

export const Content = styled.View<Props>`
  margin-top: 30px;

  flex: 1;
  align-items: center;
  justify-content: top;

  border-radius: 20px 20px 0 0;

  ${({ insets, theme }) => css`
    padding: 40px 32px ${insets.bottom}px 32px;

    background-color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Form = styled.View`
  width: 100%;

  flex: 1;
  gap: 20px;
`;

export const DoubleInputContainer = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const InputContainer = styled.View<{ halfSize?: boolean }>`
  width: ${({ halfSize }) => (halfSize ? "47%" : "100%")};

  align-items: start;
  justify-content: center;
  gap: 5px;
`;

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const InputLabelError = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.RED_DARK};
  `}
`;

export const DateTimePickerButton = styled.Pressable<{ errorStyle: boolean }>`
  width: 100%;
  height: 50px;
  padding: 14px;

  border: 1px solid
    ${({ theme, errorStyle }) =>
      errorStyle ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_300};
  border-radius: 6px;
`;

export const DateTimePickerButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const DateTimePicker = styled(RNDateTimePicker).attrs(({ theme }) => ({
  accentColor: theme.COLORS.GRAY_500,
}))`
  width: 100%;
`;

export const ModalContent = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const CloseModalButton = styled.TouchableOpacity``;

export const InDietContainer = styled.View`
  width: 100%;

  align-items: start;
  justify-content: center;
  gap: 5px;
`;

export const InDietContent = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InDietButton = styled.TouchableOpacity<{ inDiet?: boolean }>`
  width: 48%;
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 6px;
  ${({ theme, inDiet }) => css`
    background-color: ${inDiet === undefined
      ? theme.COLORS.GRAY_200
      : inDiet
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};

    ${inDiet !== undefined && { border: 1 }}
    border-color: ${inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

export const InDietButtonStatus = styled.View<{ variant: "GREEN" | "RED" }>`
  width: 10px;
  height: 10px;

  border-radius: 10px;
  background-color: ${({ theme, variant }) =>
    variant === "GREEN" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const InDietButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;
