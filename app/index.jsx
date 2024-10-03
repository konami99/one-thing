import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import ScreenWrapper from '../components/ScreenWrapper';

export default index = () => {
	const router = useRouter();

	return (
		<ScreenWrapper>
			<Text>index!</Text>
			<Button title="welcome" onPress={() => router.push('welcome')} />
		</ScreenWrapper>
	)
}