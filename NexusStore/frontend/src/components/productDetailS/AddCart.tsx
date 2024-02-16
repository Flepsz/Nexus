import { View, Text, TouchableOpacity } from "react-native";
import useCartStore from "../../store/useCartStore";
import { useCallback } from "react";
import Toast from "react-native-toast-message";

export default function AddCart({ itemOrder }: { itemOrder: ItemOrder }) {
	const addToCart = useCartStore((state) => state.addToCart);

	const handleAddToCart = useCallback(() => {
		addToCart(itemOrder);
		Toast.show({
			type: "success",
			text1: "Item Adicionado ao Carrinho!",
		});
	}, [addToCart, itemOrder]);

	return (
		<TouchableOpacity
			className="bg-secondary py-3 flex justify-center items-center rounded-xl"
			onPress={handleAddToCart}
		>
			<Text className="text-white font-semibold text-lg">
				Adicionar ao Carrinho
			</Text>
		</TouchableOpacity>
	);
}
