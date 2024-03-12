import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Title } from "./style";

type Props = TouchableOpacityProps & {
  title: string;
  variant?: ButtonIconTypeStyleProps;
  halfSize?: boolean;
};

export const ButtonIcon = ({
  title,
  variant = "PRIMARY",
  halfSize = false,
  children,
  ...props
}: Props) => {
  return (
    <Container variant={variant} halfSize={halfSize} {...props}>
      {children}
      <Title variant={variant}>{title}</Title>
    </Container>
  );
};
