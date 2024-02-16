import { View, Text, TouchableOpacity } from "react-native";
import CounterQuantity from "./CounterQuantity";
import formatCurrency from "../utils/formatCurrency";
import { Result } from "../../queries/types";
import { useState } from "react";
import AddCart from "./AddCart";

interface Props {
	product: Result;
}

export default function ProductDetailFooter({ product }: Props) {
	const [quantity, setQuantity] = useState<number>(1);

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const createItemOrder = () => {
		const ItemOrder: ItemOrder = {
			id: product.id,
			title: product.title,
			thumbnail: product.thumbnail,
			price: product.price,
			quantity: quantity,
		};

		return ItemOrder;
	};

	return (
		<View className="absolute bottom-0 w-full h-32 bg-white rounded-t-2xl px-5 py-4">
			<View className="flex flex-col justify-between h-full">
				<View className="flex flex-row justify-between">
					<CounterQuantity
						quantity={quantity}
						onIncrease={increaseQuantity}
						onDecrease={decreaseQuantity}
					/>
					<Text className="font-bold text-lg">
						Total: {formatCurrency(product.price, "BRL")}
					</Text>
				</View>
				<AddCart itemOrder={createItemOrder()} />
			</View>
		</View>
	);
}
