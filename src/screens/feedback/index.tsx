import { ButtonIcon } from "@components/buttonIcon";
import {
  Bold,
  Container,
  Image,
  Subtitle,
  Title,
  TitleContainer,
} from "./style";
import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";

type RouteParams = {
  inDiet: boolean;
};

export const Feedback = () => {

  const { inDiet } = useRoute().params as RouteParams;
  const { navigate } = useNavigation();

  return (
    <Container>
      <TitleContainer>
        {inDiet ? (
          <>
            <Title inDiet={true}>Continue assim!</Title>
            <Subtitle>
              Você continua {<Bold>dentro da dieta</Bold>}. Muito bem!
            </Subtitle>
          </>
        ) : (
          <>
            <Title inDiet={false}>Que pena!</Title>
            <Subtitle>
              Você {<Bold>saiu da dieta</Bold>} dessa vez, mas continue se
              esforçando e não desista!
            </Subtitle>
          </>
        )}
      </TitleContainer>

      <Image inDiet={inDiet} />

      <ButtonIcon
        title={"Ir para a página inicial"}
        onPress={() => navigate("home")}
        style={{ width: 200 }}
      />
    </Container>
  );
};
