import { View, Text } from "react-native";
import useCartStore from "../../store/useCartStore";
import { useCallback } from "react";

export default function AddCart() {
	const addToCart = useCartStore((state) => state.addToCart);
	const removeFromCart = useCartStore((state) => state.removeFromCart);

	const handleAddToFavorites = useCallback((item: ItemOrder) => {
		addToCart(item);
	}, []);

	const handleRemoveFromFavorites = useCallback((item: ItemOrder) => {
		removeFromCart(item);
	}, []);

	return (
		<View className="w-full h-full">
			<Text>AddCart</Text>
		</View>
	);
}
