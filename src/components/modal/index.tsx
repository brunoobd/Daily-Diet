import { Modal as RNModal, ModalProps } from "react-native";
import { Container, Content } from "./style";

type Props = ModalProps & {
  isOpen: boolean;
  onCloseModal: () => void;
};

export const Modal = ({ isOpen, onCloseModal, children, ...props }: Props) => {
  return (
    <RNModal
      visible={isOpen}
      transparent
      animationType={"fade"}
      statusBarTranslucent
      {...props}
    >
      <Container onPress={onCloseModal}>
        <Content>{children}</Content>
      </Container>
    </RNModal>
  );
};
