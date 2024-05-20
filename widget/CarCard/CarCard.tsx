import {
  StyleSheet,
  View,
  Image,
  Text,
  Linking,
  ImageBackground,
} from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { ICar } from "@/model/ICar";
import { Button } from "@/shared/components/Button";
import { Colors, Fonts, height, width } from "@/shared/config/theme";

import NumberCarIcon from "@/assets/icons/numberCarUaIcon";
import { Link } from "expo-router";

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
    <Link style={styles.card} href={`/(app)/car/${carNumber}`}>
      <ImageBackground
        source={require("@/assets/images/car.png")}
        style={styles.card}
        resizeMode="contain"
      >
        <Text style={styles.title}>
          {brand} {model}
        </Text>

        <View style={styles.carNumber}>
          <Image
            style={styles.image}
            source={require("@/assets/images/carNumberUA.png")}
            resizeMode="stretch"
          />
          <Text style={styles.textNumberCar}>{carNumber}</Text>
        </View>
      </ImageBackground>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width,
    height: height / 4 + 40,
    flexDirection: "column",
    borderRadius: 10,
    padding: 10,
  },
  car: {},
  title: {
    fontSize: 42,
    marginTop: 60,
    paddingVertical:10,
    textAlign: "center",
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: Colors.violetDark,
    ...Fonts.beer,
    alignItems: "center",
    justifyContent: "center",   
    borderRadius:20,
  
  },
  image: { width: 20, height: 40 },
  carNumber: {
    flexDirection: "row",
    borderWidth: 3,
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
  },

  textNumberCar: {
    fontSize: 14,
    marginLeft: 10,
    borderRadius: 10,
    color: Colors.blackLight,
    ...Fonts.semibold,
  },
});
