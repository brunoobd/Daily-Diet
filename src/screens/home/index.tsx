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

export const Home = () => {
  const navigation = useNavigation();

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
        <ButtonIcon iconName={"add"} title={"Nova refeição"} />
        <SectionList
          sections={[]}
          renderItem={({ item }: { item: Meal }) => <MealItem meal={item} />}
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
