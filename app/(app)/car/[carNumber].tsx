import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useActions, useTypedSelector } from "@/hooks/storeHooks";
import { CustomLink } from "@/shared/components/CustomLink";
import {
  selectAllGas,
  selectCarById,
  selectUser,
} from "@/store/selectors/index.";
import React, { useEffect } from "react";
import { IUser } from "@/model/IUser";
import { IGas } from "@/model/IGas";

export default function CarScreen() {
  const { carNumber } = useLocalSearchParams();
  const { getGasesAction, removeAllGases } = useActions();
  const user = useTypedSelector(selectUser);
  const { uid } = user as IUser;

  const car = useTypedSelector((state) =>
    selectCarById(state, carNumber as string),
  );

  const {
    brand,
    model,
    secondCarNumber,
    type,
    registrationDate,
    vin,
    year,
    engine,
    registrationType,
    color,
  } = car;

  useEffect(() => {
    removeAllGases();
    getGasesAction(carNumber as string);
  }, [carNumber]);
  const gases = useTypedSelector(selectAllGas);
  console.log("gases", gases);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {brand} {model}
      </Text>
      <Text style={styles.info}>Car Number: {carNumber}</Text>
      <Text style={styles.info}>Second Car Number: {secondCarNumber}</Text>
      <Text style={styles.info}>Type: {type}</Text>
      <Text style={styles.info}>Registration Date: {registrationDate}</Text>
      <Text style={styles.info}>VIN: {vin}</Text>
      <Text style={styles.info}>
        Year: {year} Engine: {engine}
      </Text>

      <Text style={styles.info}>
        Registration Type: {registrationType} Color: {color}
      </Text>
      {gases.length > 0 &&
        gases.map((item) => (
          <View style={styles.item} key={item.id}>
            <View>
              <Text>Сума: {item.amount}</Text>
              <Text>Дата: {item.date}</Text>
              <Text>Oб'єм палива: {item.fuelVolume},</Text>
              <Text>Пробіг: {item.mileage}</Text>
            </View>
            <Image
              source={{ uri: item.photo }}
              style={styles.icon}
              resizeMode="center"
            />
          </View>
        ))}
      <CustomLink
        href={`/gas/${carNumber}`}
        text={"Додати інфу по заправці"}
        iconPath={require(`../../../assets/images/gas.png`)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    padding: 15,
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    marginBottom: 5,
    fontSize: 16,
  },
  item: { flexDirection: "row" },
  icon: { borderRadius: 10, width: 150, height: 150 },
});
