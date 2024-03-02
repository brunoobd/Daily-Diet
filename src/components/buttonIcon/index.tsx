import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon, Title } from "./style";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  iconName?: keyof typeof MaterialIcons.glyphMap;
  title: string;
  variant?: ButtonIconTypeStyleProps;
};

export const ButtonIcon = ({
  iconName = undefined,
  title,
  variant = "PRIMARY",
  ...props
}: Props) => {
  return (
    <Container variant={variant} {...props}>
      {iconName && <Icon name={iconName} variant={variant} />}
      <Title variant={variant}>{title}</Title>
    </Container>
  );
};
