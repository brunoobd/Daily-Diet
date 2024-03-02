import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Icon,
  PercentTypeStyleProps,
  Subtitle,
  Title,
} from "./style";

type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
  variant?: PercentTypeStyleProps;
};

export const Percent = ({
  title,
  subtitle,
  variant = "PRIMARY",
  ...props
}: Props) => {
  return (
    <Container variant={variant} {...props}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Icon variant={variant} />
    </Container>
  );
};
