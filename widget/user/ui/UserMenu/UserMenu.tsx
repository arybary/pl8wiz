import { Colors, Fonts } from '@/shared/config/theme';
import { User } from '@/store/model/User';
import { View, StyleSheet, Text } from 'react-native';



export function UserMenu({ user }: { user: User | null }) {
	if (!user) {
		return;
	}
	return (
		<View style={styles.container}>			
			<Text style={styles.name}>
				{user.displayName}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		gap:8,
		marginTop: 30,
		marginBottom: 40,
	},
	name: {
		fontSize: 16,
		...Fonts.regular,
		color: Colors.white,
	},
});
