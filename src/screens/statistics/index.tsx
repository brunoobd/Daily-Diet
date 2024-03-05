import { Header } from "@components/header";
import {
  CardContainer,
  Container,
  Content,
  ContentTitle,
  StatisticsHeader,
  StatisticsHeaderSubtitle,
  StatisticsHeaderTitle,
} from "./style";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatisticsCard } from "@components/statisticsCard";

export const Statistics = () => {
  const insets = useSafeAreaInsets();
  const inDiet = true;

  return (
    <Container inDiet={inDiet} insets={insets}>
      <Header variant={inDiet ? "PRIMARY" : "SECONDARY"} />
      <StatisticsHeader>
        <StatisticsHeaderTitle>90,86%</StatisticsHeaderTitle>
        <StatisticsHeaderSubtitle>
          das refeições dentro da dieta
        </StatisticsHeaderSubtitle>
      </StatisticsHeader>

      <Content insets={insets}>
        <ContentTitle>Estatísticas gerais</ContentTitle>

        <StatisticsCard
          title={"22"}
          subtitle={"melhor sequência de pratos dentro da dieta"}
        />

        <StatisticsCard title={"109"} subtitle={"refeições registradas"} />

        <CardContainer>
          <StatisticsCard
            title={"99"}
            subtitle={"refeições dentro da dieta"}
            variant={"PRIMARY"}
          />
          <StatisticsCard
            title={"10"}
            subtitle={"refeições fora da dieta"}
            variant={"SECONDARY"}
          />
        </CardContainer>
      </Content>
    </Container>
  );
};
