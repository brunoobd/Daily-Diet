import { TouchableOpacityProps } from "react-native";
import { Meal } from "src/model";
import { Container, Hour, Name, Separator, Status } from "./style";

type Props = TouchableOpacityProps & {
  meal: Meal;
};

export const MealItem = ({ meal, ...props }: Props) => {
  return (
    <Container {...props}>
      <Hour>{meal.hour}</Hour>
      <Separator />
      <Name numberOfLines={1}>{meal.name}</Name>
      <Status inDiet={meal.inDiet} />
    </Container>
  );
};
