import { useNavigation } from "@react-navigation/native";
import { ButtonIcon, Container, HeaderStyleProps, Icon, Title } from "./style";

type Props = {
  title?: string;
  variant?: HeaderStyleProps;
};

export const Header = ({ title, variant = "DEFAULT" }: Props) => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <ButtonIcon onPress={goBack}>
        <Icon variant={variant} />
      </ButtonIcon>
      <Title>{title ?? ""}</Title>
    </Container>
  );
};
