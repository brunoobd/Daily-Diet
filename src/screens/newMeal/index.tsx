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
import { Keyboard, Platform, Text } from "react-native";
import { Modal } from "@components/modal";
import { useNavigation } from "@react-navigation/native";
import { DateTime, DateTimeOptions } from "luxon";

type FormData = {
  name: string;
  description: string;
  date: DateTime;
  hour: DateTime;
  inDiet: boolean;
};

type Props = {
  defaultValues?: FormData;
};

export const NewMeal = ({ defaultValues }: Props) => {
  const {
    control,
    getValues,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const { navigate } = useNavigation();
  const insets = useSafeAreaInsets();

  const onSubmit = (formData: FormData) => {
    const newFormData = { ...formData, date: getValues("date") };
    console.log(newFormData);
    navigate("feedback", { inDiet: formData.inDiet });
  };

  const requiredValidate = (value: string | DateTime): string | undefined => {
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
        <Header title={"Nova refeição"} />
        <Content insets={insets}>
          <Form>
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
                          {!!value
                            ? value.toLocaleString(DateTime.DATE_SHORT)
                            : ""}
                        </DateTimePickerButtonText>
                      </DateTimePickerButton>
                      {showDatePicker && Platform.OS === "android" && (
                        <DateTimePicker
                          value={value?.toJSDate() ?? new Date()}
                          mode={"date"}
                          onChange={(event, date) => {
                            console.log("onChange => ", date);
                            if (!!date) {
                              onChange(DateTime.fromJSDate(date));
                            }
                            setShowDatePicker(false);
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
                          {!!value
                            ? value.toLocaleString(DateTime.TIME_SIMPLE)
                            : ""}
                        </DateTimePickerButtonText>
                      </DateTimePickerButton>
                      {showTimePicker && Platform.OS === "android" && (
                        <DateTimePicker
                          value={value?.toJSDate() ?? new Date()}
                          mode={"time"}
                          is24Hour
                          onChange={(event, hour) => {
                            if (!!hour) {
                              onChange(DateTime.fromJSDate(hour));
                              setShowTimePicker(false);
                            }
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
            title={"Cadastrar refeição"}
            onPress={handleSubmit(onSubmit)}
            style={{ marginBottom: 20 }}
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
                value={getValues("date")?.toJSDate() ?? new Date()}
                mode={"date"}
                display={"inline"}
                themeVariant={"light"}
                accentColor={"#000"}
                onChange={(event, date) => {
                  if (!!date) {
                    setValue("date", DateTime.fromJSDate(date));
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
                value={getValues("hour")?.toJSDate() ?? new Date()}
                mode={"time"}
                display={"spinner"}
                themeVariant={"light"}
                accentColor={"#000"}
                locale="pt-br"
                onChange={(event, hour) => {
                  if (!!hour) {
                    setValue("hour", DateTime.fromJSDate(hour));
                    clearErrors("hour");
                  }
                }}
              />
              <ButtonIcon
                title="Definir hora"
                variant="SECONDARY"
                onPress={() => {
                  if (getValues("hour") === undefined) {
                    setValue("hour", DateTime.now());
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
