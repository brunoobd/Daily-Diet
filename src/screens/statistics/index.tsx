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
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getStatistics } from "@storage/meal/get-statistics";
import { Statistics as StatisticsType } from "src/model";

export const Statistics = () => {
  const [statistics, setStatistics] = useState<StatisticsType>();
  const [inDiet, setInDiet] = useState<boolean>(false);
  const insets = useSafeAreaInsets();

  const fetchStatistics = async () => {
    const data = await getStatistics();
    setStatistics(data);
    setInDiet(data.inDiet);
  };

  useFocusEffect(
    useCallback(() => {
      fetchStatistics();
    }, [])
  );

  return (
    <Container inDiet={inDiet} insets={insets}>
      <Header variant={inDiet ? "PRIMARY" : "SECONDARY"} />
      <StatisticsHeader>
        <StatisticsHeaderTitle>
          {statistics?.percentInDiet}%
        </StatisticsHeaderTitle>
        <StatisticsHeaderSubtitle>
          das refeições dentro da dieta
        </StatisticsHeaderSubtitle>
      </StatisticsHeader>

      <Content insets={insets}>
        <ContentTitle>Estatísticas gerais</ContentTitle>

        <StatisticsCard
          title={`${statistics?.greaterMealSequency}`}
          subtitle={"melhor sequência de pratos dentro da dieta"}
        />    

        <StatisticsCard
          title={`${statistics?.registeredMeals}`}
          subtitle={`${
            statistics?.registeredMeals === 1
              ? "refeição registrada"
              : "refeições registradas"
          }`}
        />

        <CardContainer>
          <StatisticsCard
            title={`${statistics?.mealsInDiet}`}
            subtitle={`${
              statistics?.mealsInDiet === 1 ? "refeição" : "refeições"
            } dentro da dieta`}
            variant={"PRIMARY"}
          />
          <StatisticsCard
            title={`${statistics?.mealsOutDiet}`}
            subtitle={`${
              statistics?.mealsOutDiet === 1 ? "refeição" : "refeições"
            } fora da dieta`}
            variant={"SECONDARY"}
          />
        </CardContainer>
      </Content>
    </Container>
  );
};
