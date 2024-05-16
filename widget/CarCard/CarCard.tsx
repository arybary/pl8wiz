import { StyleSheet, View, Image, Text, Linking } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { ICar } from "@/model/ICar";
import { Button } from "@/shared/components/Button";
import { Colors, Fonts, width } from "@/shared/config/theme";

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
      <View style={styles.car}>
        <Text style={styles.title}>
          {brand} {model}
        </Text>
        </View>
        <View style={styles.carNumber}>
          <NumberCarIcon />
          <Text style={styles.textNumberCar}>{carNumber}</Text>
        </View>    
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
 
    flexDirection: "column",
    backgroundColor:Colors.violetDark,   
    borderRadius: 10,
    alignItems: "center",    
  },
  car:{
  
  },

  title: {
    fontSize: 21,
    textAlign:"center",
    color: Colors.green,
    ...Fonts.semibold,
    marginBottom: 12,
  },
  carNumber: {   
    flexDirection: "row",
    borderWidth: 3,
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderColor: Colors.black,
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  textNumberCar: {
    fontSize: 18,
    color: Colors.blackLight,
    ...Fonts.semibold,
  },
});
