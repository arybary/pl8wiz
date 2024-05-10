import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { useTypedSelector } from "@/hooks/storeHooks";
import { CustomLink } from "@/shared/components/CustomLink";
import { selectAllCar } from "@/store/selectors/index.";

export default function App() {

    const cars = useTypedSelector(selectAllCar);

    console.log(cars);
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.content}
            >
                {cars && cars.map(({ brand, carNumber, model }) => {
                    const brandLogo = `https://kimuracars.com/ifiles/articles/046/hyundai-1.jpg`;
                    return (
                        <CustomLink
                            href={`/cars/${carNumber}`}
                            text={model}

                        />
                    );
                })}
                <CustomLink
                    href={"/car_create"}
                    text="cтворити автомобіль"
                    iconPath={require("@/assets/images/car.png")}
                />
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
    },
    content: {
        alignItems: "center",
    },
});
