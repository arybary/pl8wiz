import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useActions } from "@/hooks/storeHooks";
import { GasInfo } from "@/store/model/GasInfo";
import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";
import { Colors } from "@/shared/config/theme";


export default function CarRefuelingForm() {
	const { carNumber } = useLocalSearchParams();
	const dateForRefuelGas = new Date();
	const { addGas } = useActions();
	const [refuel, setRefuel] = useState<GasInfo>({
		id: "",
		car: "",
		date: dateForRefuelGas,
		mileage: 0,
		fuelVolume: 0,
		amount: 0,
		note: "",
		photo: "",
	});

	const handleChange = (key: keyof GasInfo, value: string | number) => {
		setRefuel({ ...refuel, [key]: value });
	};

	const handleCreateCar = () => {
		console.log("додання інфи по заправці:", refuel);
		addGas(refuel);
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<View style={styles.row}>
				<Input
					style={styles.input}
					text="Пробіг"
					value={String(refuel.mileage)}
					onChangeText={(text) => handleChange("mileage", text)}
				/>
				<Input
					style={styles.input}
					text="Oб'єм палива"
					value={String(refuel.fuelVolume)}
					onChangeText={(text) => handleChange("fuelVolume", text)}
				/>
			</View>
			<View style={styles.row}>
				<Input
					style={styles.input}
					text="Сума"
					value={String(refuel.amount)}
					onChangeText={(text) => handleChange("amount", text)}
				/>
				<Input
					style={styles.input}
					text="Примітка"
					value={refuel.note}
					onChangeText={(text) => handleChange("note", text)}
				/>
			</View>
			<Button text="Додати заправку" onPress={handleCreateCar} />
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
		backgroundColor: Colors.yellowLight,
	},
	row: {
		flexDirection: "row",
		marginBottom: 10,
	},
	input: {
		flex: 1,
		marginRight: 10,
	},
});
