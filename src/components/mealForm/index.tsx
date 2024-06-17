import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Container,
  Content,
  DateTimePicker,
  DateTimePickerButton,
  DateTimePickerButtonText,
  DoubleInputContainer,
  Form,
  InDietButton,
  InDietButtonStatus,
  InDietButtonText,
  InDietContainer,
  InDietContent,
  InputContainer,
  InputLabel,
  InputLabelError,
  ModalContent,
} from "./style";
import { Header } from "@components/header";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "@components/textInput";
import { ButtonIcon } from "@components/buttonIcon";
import { useState } from "react";
import { Keyboard, Platform } from "react-native";
import { Modal } from "@components/modal";
import { formatDateToString, formatHourToString } from "@utils/formatters";
import { FormData } from "src/model";

type Props = {
  defaultValues?: FormData;
  onFormSubmit: (formData: FormData) => void;
};

export const MealForm = ({ defaultValues, onFormSubmit }: Props) => {
  const {
    control,
    getValues,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm(
    !!defaultValues
      ? {
          defaultValues: {
            ...defaultValues,
            date: new Date(defaultValues?.date),
            hour: new Date(defaultValues?.hour),
          },
        }
      : { defaultValues: undefined }
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isEditing, setIsEditing] = useState(!!defaultValues);
  const insets = useSafeAreaInsets();

  const requiredValidate = (value: string | Date): string | undefined => {
    if (!value) {
      return "O campo não pode ser vazio!";
    }
    return undefined;
  };

  const requiredValidateInDiet = (value: boolean): string | undefined => {
    if (value === undefined) {
      return "Selecione uma opção!";
    }
    return undefined;
  };

  return (
    <>
      <Container insets={insets}>
        <Header title={`${isEditing ? "Editar" : "Nova"} refeição`} />
        <Content insets={insets}>
          <Form showsVerticalScrollIndicator={false}>
            <InputContainer>
              <InputLabel>Nome</InputLabel>
              <Controller
                control={control}
                rules={{
                  maxLength: 40,
                  validate: requiredValidate,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    value={value}
                    maxLength={40}
                    onBlur={onBlur}
                    onChangeText={(text) => {
                      // FIX: make this conditional to function
                      if (text.trim() === "") {
                        onChange(text.trim());
                      } else if (
                        text === text.trim() + " " ||
                        text === text.trim()
                      ) {
                        onChange(text);
                      }
                    }}
                    errorStyle={!!errors.name}
                    enterKeyHint={"next"}
                  />
                )}
                name="name"
              />
              <InputLabelError>{errors.name?.message}</InputLabelError>
            </InputContainer>

            <InputContainer>
              <InputLabel>Descrição</InputLabel>
              <Controller
                control={control}
                rules={{
                  maxLength: 200,
                  validate: requiredValidate,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    variant={"SECONDARY"}
                    value={value}
                    maxLength={200}
                    onBlur={onBlur}
                    blurOnSubmit={true}
                    returnKeyType={"done"}
                    onChangeText={(text) => {
                      if (text.trim() === "") {
                        onChange(text.trim());
                      } else if (
                        text === text.trim() + " " ||
                        text === text.trim()
                      ) {
                        onChange(text);
                      }
                    }}
                    enterKeyHint={"next"}
                    errorStyle={!!errors.description}
                  />
                )}
                name="description"
              />
              <InputLabelError>{errors.description?.message}</InputLabelError>
            </InputContainer>

            <DoubleInputContainer>
              <InputContainer halfSize>
                <InputLabel>Data</InputLabel>
                <Controller
                  control={control}
                  rules={{
                    validate: requiredValidate,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <DateTimePickerButton
                        onPress={() => {
                          setShowDatePicker(true);
                          Keyboard.dismiss();
                        }}
                        errorStyle={!!errors.date}
                      >
                        <DateTimePickerButtonText>
                          {value ? formatDateToString(value) : ""}
                        </DateTimePickerButtonText>
                      </DateTimePickerButton>
                      {showDatePicker && Platform.OS === "android" && (
                        <DateTimePicker
                          value={value ?? new Date()}
                          onChange={(event, date) => {
                            setShowDatePicker(false);
                            onChange(date);
                          }}
                        />
                      )}
                    </>
                  )}
                  name="date"
                />
                <InputLabelError>{errors.date?.message}</InputLabelError>
              </InputContainer>

              <InputContainer halfSize>
                <InputLabel>Hora</InputLabel>
                <Controller
                  control={control}
                  rules={{
                    validate: requiredValidate,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <DateTimePickerButton
                        onPress={() => {
                          setShowTimePicker(true);
                          Keyboard.dismiss();
                        }}
                        errorStyle={!!errors.hour}
                      >
                        <DateTimePickerButtonText>
                          {value ? formatHourToString(value) : ""}
                        </DateTimePickerButtonText>
                      </DateTimePickerButton>
                      {showTimePicker && Platform.OS === "android" && (
                        <DateTimePicker
                          value={value ?? new Date()}
                          mode={"time"}
                          is24Hour
                          minuteInterval={10}
                          onChange={(event, hour) => {
                            setShowTimePicker(false);
                            onChange(hour);
                          }}
                        />
                      )}
                    </>
                  )}
                  name={"hour"}
                />
                <InputLabelError>{errors.hour?.message}</InputLabelError>
              </InputContainer>
            </DoubleInputContainer>

            <InDietContainer>
              <InputLabel>Está dentro da dieta?</InputLabel>
              <InDietContent>
                <Controller
                  control={control}
                  rules={{ validate: requiredValidateInDiet }}
                  render={({ field: { onChange, value } }) => (
                    <InDietButton
                      inDiet={
                        value === undefined
                          ? value
                          : value === true
                          ? true
                          : undefined
                      }
                      onPress={() => onChange(true)}
                    >
                      <InDietButtonStatus variant={"GREEN"} />
                      <InDietButtonText>Sim</InDietButtonText>
                    </InDietButton>
                  )}
                  name="inDiet"
                />

                <Controller
                  control={control}
                  rules={{ validate: requiredValidateInDiet }}
                  render={({ field: { onChange, value } }) => (
                    <InDietButton
                      inDiet={
                        value === undefined
                          ? value
                          : value === true
                          ? undefined
                          : false
                      }
                      onPress={() => onChange(false)}
                    >
                      <InDietButtonStatus variant={"RED"} />
                      <InDietButtonText>Não</InDietButtonText>
                    </InDietButton>
                  )}
                  name="inDiet"
                />
              </InDietContent>
              <InputLabelError>{errors.inDiet?.message}</InputLabelError>
            </InDietContainer>
          </Form>

          <ButtonIcon
            title={isEditing ? "Salvar alterações" : "Cadastrar refeição"}
            onPress={handleSubmit(onFormSubmit)}
            style={{ marginBottom: 20, marginTop: 20 }}
          />
        </Content>
      </Container>
      {Platform.OS === "ios" && (
        <>
          <Modal
            isOpen={showDatePicker}
            onCloseModal={() => setShowDatePicker(false)}
          >
            <ModalContent>
              <DateTimePicker
                value={getValues("date") ?? new Date()}
                display={"inline"}
                themeVariant={"light"}
                accentColor={"#000"}
                onChange={(event, date) => {
                  if (!!date) {
                    setValue("date", date);
                    clearErrors("date");
                    setShowDatePicker(false);
                  }
                }}
              />
            </ModalContent>
          </Modal>
          <Modal
            isOpen={showTimePicker}
            onCloseModal={() => {
              setShowTimePicker(false);
            }}
          >
            <ModalContent>
              <DateTimePicker
                value={getValues("hour") ?? new Date()}
                mode={"time"}
                display={"spinner"}
                themeVariant={"light"}
                accentColor={"#000"}
                locale="pt-br"
                onChange={(event, hour) => {
                  if (!!hour) {
                    setValue("hour", hour);
                    clearErrors("hour");
                  }
                }}
              />
              <ButtonIcon
                title="Definir hora"
                variant="SECONDARY"
                onPress={() => {
                  if (getValues("hour") === undefined) {
                    setValue("hour", new Date());
                    clearErrors("hour");
                  }
                  setShowTimePicker(false);
                }}
              />
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};
