import { useEffect, useState } from 'react';
import { Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { Colors, Fonts } from '../config/theme';
import React from 'react';

export interface ErrorNotificationProps {
	error?: string;
}

export function ErrorNotification({ error }: ErrorNotificationProps) {
	const [isShown, setIsShown] = useState<boolean>(false);
	const animatedValue = new Animated.Value(-100);

	const onEnter = () => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		}).start();
	};

	useEffect(() => {
		if (!error) {
			return;
		}
		setIsShown(true);
		const timerId = setTimeout(() => {
			setIsShown(false);
		}, 7000);
		return () => {
			clearTimeout(timerId);
		};
	}, [error]);

	if (!isShown) {
		return <></>;
	}

	return (
		<Animated.View
			style={{
				...styles.error,
				transform: [{ translateY: animatedValue }],
			}}
			onLayout={onEnter}
		>
			<Text style={styles.errorText}>{error}</Text>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	error: {
		position: 'absolute',
		width: Dimensions.get('screen').width,
		backgroundColor: Colors.red,
		padding: 15,
		top: 50,
		zIndex: 30
	},
	errorText: {
		fontSize: 16,
		color: Colors.white,
		textAlign: 'center',
		...Fonts.regular,
	},
});
