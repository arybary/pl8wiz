import { StyleSheet, View, Image, Text, Linking } from "react-native";

import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

import { ICar } from "@/model/ICar";
import { Button } from "@/shared/components/Button";
import { Colors, Fonts } from "@/shared/config/theme";
import { CarProgress } from "@/entities/car/ui/CourseProgress/CarProgress";

export function CarCard({
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
}: ICar) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <CarProgress totalLessons={120} passedLessons={40} />
        <Text style={styles.title}>
          {brand} {model}
        </Text>
      
        <MaskedView
          maskElement={
            <Text style={styles.tariff}>
              { year}{ color}
            </Text>
          }
        >
          <LinearGradient
            colors={["#D77BE5", "#6C38CC"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={{ ...styles.tariff, ...styles.tariffWithOpacity }}>
			{ year}{ color}
            </Text>
          </LinearGradient>
        </MaskedView>
      </View>
      <View style={styles.footer}>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: Colors.blackLight,
  },
  tariff: {
    marginTop: 10,
    fontSize: 16,
    ...Fonts.regular,
  },
  tariffWithOpacity: {
    opacity: 0,
  },

  title: {
    fontSize: 21,
    color: Colors.white,
    ...Fonts.semibold,
    marginBottom: 12,
  },
  chips: {
    flexDirection: "row",
    gap:10,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  footer: {
    backgroundColor: Colors.violetDark,
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
