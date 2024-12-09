import { Image, StyleSheet, Text, View } from 'react-native';
import { Product } from '../types';
import { useTheme } from "../context/ThemeContext";
import colors from '../constants/colors';

const ProductView = ({ item }: { item: Product }) => {
	const { themeStyle } = useTheme()

	const styles = StyleSheet.create({
		card: {
			flexDirection: 'column',
			backgroundColor: themeStyle?.background,
			borderRadius: 15,
			marginBottom: 20,
			shadowColor: colors.BLACK_ONE,
			shadowOffset: { width: 0, height: 4 },
			shadowOpacity: 0.1,
			shadowRadius: 6,
			elevation: 5,
			overflow: 'hidden',
		},
		image: {
			width: '100%',
			height: 250,
			borderTopLeftRadius: 15,
			borderTopRightRadius: 15,
			resizeMode: 'contain',
			backgroundColor: themeStyle?.imageBg
		},
		contentContainer: {
			padding: 20,
		},
		brandName: {
			fontSize: 14,
			fontWeight: '500',
			color: themeStyle?.primary,
			letterSpacing: 1,
			textTransform: 'uppercase',
			marginBottom: 8,
		},
		title: {
			fontSize: 20,
			fontWeight: 'bold',
			color: themeStyle?.text,
			marginBottom: 10,
		},
		description: {
			fontSize: 14,
			color: themeStyle?.description,
			lineHeight: 22,
			marginBottom: 15,
		},
		priceContainer: {
			marginTop: 10,
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		price: {
			fontSize: 16,
			fontWeight: 'bold',
			color: themeStyle?.price,
		},
	});

	return (
		<View style={styles.card}>
			<Image source={{ uri: item.thumbnail }} style={styles.image} />
			<View style={styles.contentContainer}>
				<Text style={styles.brandName}>{item.brand}</Text>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.description}>{item.description}</Text>
				<View style={styles.priceContainer}>
					<Text style={styles.price}>${item.price}</Text>
				</View>
			</View>
		</View>
	);
}

export default ProductView;