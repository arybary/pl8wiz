import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useActions, useTypedSelector } from "@/hooks/storeHooks";
import { IGas } from "@/model/IGas";
import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";
import { Colors } from "@/shared/config/theme";
import uuid from "react-native-uuid";
import { IUser } from "@/model/IUser";
import { selectUser } from "@/store/selectors/index.";
import moment from "moment";

export default function CarRefuelingForm() {
  const user = useTypedSelector(selectUser);
  const { uid } = user as IUser;
  const { carNumber } = useLocalSearchParams<{ carNumber: string }>();
  const dateForRefuelGas = moment().format("MMM Do YY");
  const { addGasAction } = useActions();
  const [gas, setGas] = useState<IGas>({
    id: "",
    car: carNumber,
    date: dateForRefuelGas,
    mileage: 0,
    fuelVolume: 0,
    amount: 0,
    note: "",
    photo: "",
  });

  const handleChange = (key: keyof IGas, value: string | number) => {
    setGas({ ...gas, [key]: value });
  };

  const handleCreateGas = () => {
    console.log("додання інфи по заправці:", gas);
    if (carNumber !== undefined) {
      gas.id = uuid.v4() as string;
      console.log("id", id);
      addGasAction({ uid, id: gas.id, gas });
      setGas({
        id: "",
        car: carNumber,
        date: dateForRefuelGas,
        mileage: 0,
        fuelVolume: 0,
        amount: 0,
        note: "",
        photo: "",
      });

      router.replace(`/`);
    }
  };
  const { id, car, mileage, fuelVolume, amount, note } = gas;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.row}>
        <Input
          style={styles.input}
          text="Пробіг"
          value={String(mileage)}
          onChangeText={(text) => handleChange("mileage", text)}
        />
        <Input
          style={styles.input}
          text="Oб'єм палива"
          value={String(fuelVolume)}
          onChangeText={(text) => handleChange("fuelVolume", text)}
        />
      </View>
      <View style={styles.row}>
        <Input
          style={styles.input}
          text="Сума"
          value={String(amount)}
          onChangeText={(text) => handleChange("amount", text)}
        />
        <Input
          style={styles.input}
          text="Примітка"
          value={note}
          onChangeText={(text) => handleChange("note", text)}
        />
      </View>
      <Button text="Додати заправку" onPress={handleCreateGas} />
      <Text
        style={{ color: Colors.black }}
      >{`для автомобіля з номером ${carNumber}`}</Text>
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
  },
});
