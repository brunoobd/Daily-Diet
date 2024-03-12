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
import { useState } from "react";

export const MealDetail = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <>
      <Container insets={insets} inDiet={true}>
        <Header title={"Refeição"} />
        <Content insets={insets}>
          <TextContainer>
            <Name>Sanduíche</Name>
            <Description>
              Sanduíche de pão integral com atum e salada de alface e tomate
            </Description>
          </TextContainer>

          <TextContainer>
            <DateAndTimeTitle>Data e hora</DateAndTimeTitle>
            <DateAndTimeDescription>12/08/2022 às 16:00</DateAndTimeDescription>
          </TextContainer>

          <InDietTag>
            <InDietStatus inDiet={true} />
            <InDietText>dentro da dieta</InDietText>
          </InDietTag>

          <ButtonContainer>
            <ButtonIcon title={"Editar refeição"}>
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
              onPress={() => setShowDeleteModal(false)}
            />
          </ModalContainerButtons>
        </ModalContent>
      </Modal>
    </>
  );
};
