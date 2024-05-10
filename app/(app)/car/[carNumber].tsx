import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useTypedSelector } from "@/hooks/storeHooks";
import { CustomLink } from "@/shared/components/CustomLink";



export default function CarScreen() {
	const { carNumber } = useLocalSearchParams();

	return (
		<View>
			<Text style={{ color: Colors.black }}>{``}</Text>
			<CustomLink
				href={`/refual/${carNumber}`}
				text={"Додати інфу по заправці"}
				iconPath={require(`../../../assets/images/gas.png`)}
			/>
		</View>
	);
}
