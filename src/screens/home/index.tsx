import { Percent } from "@components/percent";
import { ButtonIcon } from "@components/buttonIcon";
import {
  Container,
  Header,
  Logo,
  MealDayListTitle,
  MealsContainer,
  MealsTitle,
  ProfilePicture,
} from "./style";
import { SectionList } from "react-native";
import { Meal, Statistics } from "src/model";
import { MealItem } from "@components/mealItem";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";
import { getMealsDateGroups } from "@storage/meal/get-meals-date-groups";
import { useCallback, useState } from "react";
import { Loading } from "@components/loading";
import { getStatistics } from "@storage/meal/get-statistics";

export const Home = () => {
  const [statistics, setStatistics] = useState<Statistics>();
  const [mealsDateGroups, setMealsDateGroups] =
    useState<Array<{ title: string; data: Array<Meal> }>>();
  const [isLoading, setIsLoading] = useState(true);
  const { navigate } = useNavigation();

  const renderItem = ({ item }: { item: Meal }) => {
    const onPressItem = () => {
      navigate("mealDetail", { mealId: item.id });
    };

    return <MealItem meal={item} onPress={onPressItem} />;
  };

  const fetchMealsDateGroups = async () => {
    try {
      setIsLoading(true);
      setMealsDateGroups(undefined);

      const data = await getMealsDateGroups();

      console.log(data);

      setMealsDateGroups(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchStatistics = async () => {
    const data = await getStatistics();
    setStatistics(data);
  };

  useFocusEffect(
    useCallback(() => {
      fetchMealsDateGroups();
      fetchStatistics();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Logo source={require("@assets/logo.png")} />
        <ProfilePicture />
      </Header>

      <Percent
        inDiet={statistics?.inDiet}
        title={`${statistics?.percentInDiet}%`}
        subtitle={"das refeições dentro da dieta"}
        onPress={() => navigate("statistics")}
      />

      <MealsContainer>
        <MealsTitle>Refeições</MealsTitle>
        <ButtonIcon title={"Nova refeição"} onPress={() => navigate("newMeal")}>
          <Plus size={18} color={"white"} />
        </ButtonIcon>

        {!isLoading && !!mealsDateGroups ? (
          <SectionList
            sections={mealsDateGroups}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title } }) => (
              <MealDayListTitle>{title}</MealDayListTitle>
            )}
            keyExtractor={(item: Meal) => `${item.id}`}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
            /* TODO: LIST EMPTY COMPONENT */
            ListEmptyComponent={<></>}
          />
        ) : (
          <Loading />
        )}
      </MealsContainer>
    </Container>
  );
};
