import { Stack, SplashScreen } from "expo-router";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";
import { Notificaiton } from "@/shared/components/Notification";
import { Colors } from "@/shared/config/theme";
import { Provider } from "react-redux";
import store from "@/store";

SplashScreen.preventAutoHideAsync();

export default function RootRayout() {
	const [loaded, error] = useFonts({
		"FiraSans-Regular": require("../assets/fonts/FiraSans-Regular.ttf"),
		"FiraSans-SemiBold": require("../assets/fonts/FiraSans-SemiBold.ttf"),
	});

	useEffect(() => {
		if (error) {
			throw error;
		}
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<Notificaiton />
				<StatusBar style="light" />
				<Stack
					screenOptions={{
						statusBarColor: Colors.black,
						contentStyle: {
							backgroundColor: Colors.white,
						},
						headerShown: false,
					}}
				>
					<Stack.Screen name="login" />
					<Stack.Screen
						name="Singup"
						
					/>
				</Stack>
			</SafeAreaProvider>
		</Provider>
	);
}
