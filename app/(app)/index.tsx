import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import { useTypedSelector } from "@/hooks/storeHooks";
import { CustomLink } from "@/shared/components/CustomLink";
import { selectAllCars, selectUserLoading } from "@/store/selectors/index.";
import { CarCard } from "@/widget/CarCard/CarCard";
import { ICar } from "@/model/ICar";
import { Colors, width } from "@/shared/config/theme";

export default function App() {
  const cars = useTypedSelector(selectAllCars);
  const loading = useTypedSelector(selectUserLoading);

  const renderCars = ({ item }: { item: ICar }) => {
    return (
      <View style={styles.item}>
        <CarCard {...item} />
      </View>
    );
  };

  console.log("head car", cars);
  return (
    <>
      {loading && (
        <ActivityIndicator
          style={styles.activity}
          size="large"
          color={Colors.primary}
        />
      )}
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.content}
        >
          <CustomLink
            href={"/add_car"}
            text="cтворити автомобіль"
            iconPath={require("@/assets/images/car.png")}
          />

          {cars && (
            <FlatList
              ListHeaderComponent={<Text style={styles.title}>MY CARS</Text>}
              data={cars}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderCars}
            />
          )}
        </KeyboardAvoidingView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flex: 1,
    padding: 15,
  },
  content: {
    alignItems: "center",
    justifyContent: "space-between",
    gap: 50,
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
});
