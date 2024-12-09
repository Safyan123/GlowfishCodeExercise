
import React, { useState } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	useWindowDimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SceneRendererProps, TabView } from 'react-native-tab-view';

import HomeScreen from '../screens/HomeScreen';
import CustomSwitch from '../components/CustomSwitch';
import { useTheme } from '../context/ThemeContext';
import { TabRoute } from '../types';
import { DARK_MODE_TEXT } from '../constants';


export function Navigation(): React.JSX.Element {
	const layout = useWindowDimensions();
	const { isDarkMode, toggleTheme, themeStyle } = useTheme()

	const backgroundStyle = {
		backgroundColor: themeStyle?.generic,
		flex: 1
	};

	const [index, setIndex] = useState<number>(0);
	const [routes] = useState([
		{ key: 'featured', title: 'Featured' },
		{ key: 'latest', title: 'Latest' },
	]);

	const renderScene = ({
		route,
	}: SceneRendererProps & { route: TabRoute }) => {
		switch (route.key) {
			case 'featured':
				return <HomeScreen tab={route.key} />;
			case 'latest':
				return <HomeScreen tab={route.key} />;
			default:
				return null;
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				<CustomSwitch
					value={isDarkMode}
					onValueChange={toggleTheme}
					label={DARK_MODE_TEXT}
				/>

				<TabView
					navigationState={{ index, routes }}
					renderScene={renderScene}
					onIndexChange={setIndex}
					initialLayout={{ width: layout.width }}
					style={backgroundStyle}
				/>
			</NavigationContainer>
		</SafeAreaView>
	);
}


const styles = StyleSheet.create({
	container: { flex: 1 }
});