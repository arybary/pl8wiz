import { StyleSheet, View, KeyboardAvoidingView, Platform, ActivityIndicator } from "react-native";
import { useTypedSelector } from "@/hooks/storeHooks";
import { CustomLink } from "@/shared/components/CustomLink";
import { selectAllCars, selectUserLoading } from "@/store/selectors/index.";
import { CarCard } from "@/widget/CarCard/CarCard";
import { ICar } from "@/model/ICar";
import * as Notificaitons from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  const cars = useTypedSelector(selectAllCars);
  const loading = useTypedSelector(selectUserLoading);

  const renderCourse = ({ item }: { item: ICar }) => {
		return (
			<View style={styles.item}>
				<CarCard {...item} />
			</View>
		);
	};

  const allowsNotification = async () => {
		const settings = await Notificaitons.getPermissionsAsync();
		return (
			settings.granted || settings.ios?.status == Notificaitons.IosAuthorizationStatus.PROVISIONAL
		);
	};

	const requestPermissions = async () => {
		return Notificaitons.requestPermissionsAsync({
			ios: {
				allowAlert: true,
				allowBadge: true,
				allowSound: true,
			},
		});
	};

	const scheduleNotification = async () => {
		const granted = await allowsNotification();
		if (!granted) {
			await requestPermissions();
		}
		if (Device.isDevice) {
			const token = await Notificaitons.getExpoPushTokenAsync({
				projectId: Constants.expoConfig?.extra?.eas.projectId,
			});
			console.log(token);
		}
	};

  console.log(cars);
  return (<>
    {loading && (
      <ActivityIndicator style={styles.activity} size="large" color={Colors.primary} />
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
        {cars &&
          cars.map(({ brand, carNumber, model }) => {
            const brandLogo = `https://kimuracars.com/ifiles/articles/046/hyundai-1.jpg`;
            return (
              <CustomLink href={`/(app)/car/${carNumber}`} text={model} />
            );
          })}
      </KeyboardAvoidingView>
    </View>
    </>
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
  item: {
		padding: 20,
	},
	activity: {
		marginTop: 30,
	},
});
