import styled from "styled-components/native";

export const Container = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.View`
  width: 90%;
  padding: 20px;

  align-items: center;
  justify-content: center;
  gap: 20px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
`;
