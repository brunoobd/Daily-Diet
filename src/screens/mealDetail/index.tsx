import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ButtonContainer,
  Container,
  Content,
  DateAndTimeDescription,
  DateAndTimeTitle,
  Description,
  InDietStatus,
  InDietTag,
  InDietText,
  ModalContainerButtons,
  ModalContent,
  ModalTitle,
  Name,
  TextContainer,
} from "./style";
import { Header } from "@components/header";
import { ButtonIcon } from "@components/buttonIcon";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { Modal } from "@components/modal";
import { useCallback, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Meal } from "src/model";
import { getMealById } from "@storage/meal/get-meal-by-id";
import { Loading } from "@components/loading";
import { formatDateToString, formatHourToString } from "@utils/formatters";
import { deleteMeal } from "@storage/meal/delete-meal";

type RouteParams = {
  mealId: number;
};

export const MealDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meal, setMeal] = useState<Meal>();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { mealId } = useRoute().params as RouteParams;
  const { navigate } = useNavigation();
  const insets = useSafeAreaInsets();

  const handleEditMeal = async () => navigate("editMeal", { mealId });

  const handleDeleteMeal = async () => {
    try {
      await deleteMeal(mealId);
      setShowDeleteModal(false);
      navigate("home");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMealById = async () => {
    try {
      setIsLoading(true);

      const mealById = await getMealById(mealId);

      setMeal(mealById);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMealById();
    }, [])
  );

  return (
    <>
      <Container insets={insets} inDiet={meal?.inDiet}>
        <Header title={"Refeição"} />
        <Content insets={insets}>
          {!isLoading && meal ? (
            <>
              <TextContainer>
                <Name>{meal.name}</Name>
                <Description>{meal.description}</Description>
              </TextContainer>

              <TextContainer>
                <DateAndTimeTitle>Data e hora</DateAndTimeTitle>
                <DateAndTimeDescription>
                  {`${formatDateToString(
                    meal.dateAndHour
                  )} às ${formatHourToString(meal.dateAndHour)}`}
                </DateAndTimeDescription>
              </TextContainer>

              <InDietTag inDiet={meal.inDiet}>
                <InDietStatus inDiet={meal.inDiet} />
                <InDietText>{`${
                  meal.inDiet ? "dentro" : "fora"
                } da dieta`}</InDietText>
              </InDietTag>

              <ButtonContainer>
                <ButtonIcon title={"Editar refeição"} onPress={handleEditMeal}>
                  <PencilSimpleLine size={18} color={"white"} />
                </ButtonIcon>

                <ButtonIcon
                  title={"Excluir refeição"}
                  variant={"SECONDARY"}
                  onPress={() => setShowDeleteModal(true)}
                >
                  <Trash size={18} color={"black"} />
                </ButtonIcon>
              </ButtonContainer>
            </>
          ) : (
            <Loading />
          )}
        </Content>
      </Container>

      <Modal
        isOpen={showDeleteModal}
        onCloseModal={() => setShowDeleteModal(false)}
      >
        <ModalContent>
          <ModalTitle>
            Deseja realmente excluir o registro da refeição?
          </ModalTitle>

          <ModalContainerButtons>
            <ButtonIcon
              title={"Cancelar"}
              variant={"SECONDARY"}
              halfSize
              onPress={() => setShowDeleteModal(false)}
            />
            <ButtonIcon
              title={"Sim, exluir"}
              halfSize
              onPress={handleDeleteMeal}
            />
          </ModalContainerButtons>
        </ModalContent>
      </Modal>
    </>
  );
};
