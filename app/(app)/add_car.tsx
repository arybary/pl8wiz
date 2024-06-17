import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { useActions, useTypedSelector } from "@/hooks/storeHooks";
import { ICar } from "@/model/ICar";
import { Input } from "@/shared/components/Input";
import { Button } from "@/shared/components/Button";
import { selectUser } from "@/store/selectors/index.";
import { IUser } from "@/model/IUser";
import { Colors } from "@/shared/config/theme";
import { router } from "expo-router";
import { DatePicker } from "@/shared/components/DatePicker";

export default function CarCreateForm() {
  const user = useTypedSelector(selectUser);
  const { uid } = user as IUser;
  const { addCarAction } = useActions();
  const [car, setCar] = useState<ICar>({
    id: "",
    carNumber: "",
    secondCarNumber: "",
    brand: "",
    type: "",
    registrationDate: "",
    vin: "",
    model: "",
    year: "",
    engine: "",
    registrationType: "",
    color: "",
  });

  const handleChange = (key: keyof ICar, value: string) => {
    setCar({ ...car, [key]: value });
  };

  const handleCreateCar = async () => {
    console.log("Створення автомобіля:", car);
    car.id = car.carNumber;

    addCarAction({ car, uid });
    router.replace("/login");
  };

  const {
    id,
    carNumber,
    secondCarNumber,
    brand,
    type,
    registrationDate,
    vin,
    model,
    year,
    engine,
    color,
    registrationType,
  } = car;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.row}>
        <Input
          style={styles.input}
          text="Номер"
          value={carNumber}
          onChangeText={(text) => handleChange("carNumber", text)}
        />
        <Input
          style={styles.input}
          text="Другий номер"
          value={secondCarNumber}
          onChangeText={(text) => handleChange("secondCarNumber", text)}
        />
      </View>
      <View style={styles.row}>
        <Input
          style={styles.input}
          text="Марка"
          value={brand}
          onChangeText={(text) => handleChange("brand", text)}
        />
      </View>
      <View style={styles.row}>
        <Input
          style={styles.input}
          text="Вид"
          value={type}
          onChangeText={(text) => handleChange("type", text)}
        />
        <DatePicker
          mode="date"
          value={registrationDate}
          onChange={(date) => handleChange("registrationDate", date)}
          label="Оберіть дату"
        />
      </View>
      <View style={styles.row}>
        <Input
          style={styles.input}
          text="vin (Введення латинською)"
          value={vin}
          onChangeText={(text) => handleChange("vin", text)}
        />
      </View>
      <View style={styles.row}>
        <Input
          style={styles.input}
          text="Модель"
          value={model}
          onChangeText={(text) => handleChange("model", text)}
        />
      </View>
      <View style={styles.row}>
        <DatePicker
          mode="year"
          value={year}
          onChange={(year) => handleChange("year", year)}
          label="Оберіть рік"
        />
        <Input
          style={styles.input}
          text="Двигун"
          value={engine}
          onChangeText={(text) => handleChange("engine", text)}
        />
      </View>
      <View style={styles.row}>
        <Input
          style={styles.input}
          text="Тип реєстрації"
          value={registrationType}
          onChangeText={(text) => handleChange("registrationType", text)}
        />
        <Input
          style={styles.input}
          text="Колір"
          value={color}
          onChangeText={(text) => handleChange("color", text)}
        />
      </View>
      <Button text="Створити автомобіль" onPress={handleCreateCar} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: Colors.yellowLight,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    height: 75,
  },
});
