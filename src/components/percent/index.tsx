import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Subtitle, Title } from "./style";

type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
  inDiet?: boolean;
};

export const Percent = ({
  title,
  subtitle,
  inDiet = false,
  ...props
}: Props) => {
  return (
    <Container inDiet={inDiet} {...props}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Icon inDiet={inDiet} />
    </Container>
  );
};
