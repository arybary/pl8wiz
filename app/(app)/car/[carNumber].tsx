import { Card, Title, Paragraph } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useTypedSelector } from "@/hooks/storeHooks";
import { CustomLink } from "@/shared/components/CustomLink";
import { selectCarById } from "@/store/selectors/index.";
import React from "react";

export default function CarScreen() {
  const { carNumber } = useLocalSearchParams();
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
	color
  } = car;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>
            {brand} {model}
          </Title>
          <Paragraph style={styles.info}>Car Number: {carNumber}</Paragraph>
          <Paragraph style={styles.info}>
            Second Car Number: {secondCarNumber}
          </Paragraph>
          <Paragraph style={styles.info}>Type: {type}</Paragraph>
          <Paragraph style={styles.info}>
            Registration Date: {registrationDate}
          </Paragraph>
          <Paragraph style={styles.info}>VIN: {vin}</Paragraph>
          <Paragraph style={styles.info}>
            Year: {year} Engine: {engine}
          </Paragraph>

          <Paragraph style={styles.info}>
            Registration Type: {registrationType} Color: {color}
          </Paragraph>
          <CustomLink
            href={`/gas/${carNumber}`}
            text={"Додати інфу по заправці"}
            iconPath={require(`../../../assets/images/gas.png`)}
          />
        </Card.Content>
      </Card>
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
});
