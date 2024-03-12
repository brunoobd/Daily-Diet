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
import { SectionList, View } from "react-native";
import { Meal } from "src/model";
import { MealItem } from "@components/mealItem";
import { useNavigation } from "@react-navigation/native";
import { DateTime } from "luxon";
import { Plus } from "phosphor-react-native";

export const Home = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: Meal }) => {
    const onPressItem = () => {
      navigation.navigate("mealDetail", { id: item.id });
    };

    return <MealItem meal={item} onPress={onPressItem} />;
  };

  return (
    <Container>
      <Header>
        <Logo source={require("@assets/logo.png")} />
        <ProfilePicture />
      </Header>

      <Percent
        title={"90,86%"}
        subtitle={"das refeições dentro da dieta"}
        onPress={() => navigation.navigate("statistics")}
      />

      <MealsContainer>
        <MealsTitle>Refeições</MealsTitle>
        <ButtonIcon
          title={"Nova refeição"}
          onPress={() => navigation.navigate("newMeal")}
        >
          <Plus size={18} color={"white"} />
        </ButtonIcon>

        <SectionList
          sections={[
            {
              title: "teste",
              data: [
                {
                  id: 1,
                  name: "Sanduíche",
                  description: "teste",
                  hour: DateTime.now(),
                  date: DateTime.now(),
                  inDiet: true,
                },
              ],
            },
          ]}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title } }) => (
            <MealDayListTitle>{title}</MealDayListTitle>
          )}
          keyExtractor={(item: Meal) => `${item.id}`}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
        />
      </MealsContainer>
    </Container>
  );
};
