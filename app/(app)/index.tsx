import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  ImageBackground,  
} from "react-native";
import { useTypedSelector } from "@/hooks/storeHooks";
import { CustomLink } from "@/shared/components/CustomLink";
import { selectAllCars, selectUserLoading } from "@/store/selectors/index.";
import { CarCard } from "@/widget/CarCard/CarCard";
import { ICar } from "@/model/ICar";
import { Colors, Fonts, SPACING, height, width } from "@/shared/config/theme";
import { Loader } from "@/shared/components/Loader";
import { ReadNumberCar } from "@/features/car/ReadNumberCar";
import React from "react";


export const CELL_HEIGHT = height * 0.28;

export default function App() {
  const cars: ICar[] = useTypedSelector(selectAllCars);
  const loading = useTypedSelector(selectUserLoading);

  const renderCars = ({ item }: { item: ICar }) => {
    return <CarCard {...item} />;
  };

  console.log("head car", cars);
  return (
    <ImageBackground
      source={require("@/assets/images/road_1.png")}
      style={styles.background}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      ><ReadNumberCar />
        <CustomLink
          href={"/add_car"}
          text="cтворити автомобіль"
          iconPath={require("@/assets/images/create_car.png")}
        />
        <View style={styles.listContainer}>
      
          {cars.length === 0 ? (
            <Loader />
          ) : (
            <FlatList
              data={cars}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ padding: SPACING }}
              renderItem={renderCars}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  item: {
    padding: 20,
  },
  activity: {
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: Colors.violetDark,
  },
  name: {
    ...Fonts.beer,
    fontSize: 22,
    color: "#222",
    position: "absolute",
  },
  jobTitle: {
    ...Fonts.regular,
    fontSize: 10,
    color: "#222",
    width: width * 0.6,
    textTransform: "uppercase",
    marginTop: 32,
  },
  itemImage: {
    width: CELL_HEIGHT * 0.75,
    height: CELL_HEIGHT * 0.75,
    position: "absolute",
    bottom: 0,
    right: SPACING / 2,
  },
});
