import { TextInputProps } from "react-native";
import { Container, InputStyleProps } from "./style";

type Props = TextInputProps & {
  variant?: InputStyleProps;
  errorStyle: boolean;
};

export const TextInput = ({
  variant = "PRIMARY",
  errorStyle,
  ...props
}: Props) => <Container variant={variant} errorStyle={errorStyle} {...props} />;
