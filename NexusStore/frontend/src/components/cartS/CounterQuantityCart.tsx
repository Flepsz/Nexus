import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import useCartStore from "../../store/useCartStore";

type Props = {
	quantity: number;
	onIncrease: () => void;
	onDecrease: () => void;
};

export default function CounterQuantityCart({
	quantity,
	onDecrease,
	onIncrease,
}: Props) {
	const formattedQuantity = quantity < 10 ? `0${quantity}` : `${quantity}`;

	return (
		<View className="flex flex-row gap-2 items-center">
			<TouchableOpacity
				className="p-1 rounded-full bg-secondary/10"
				onPress={onDecrease}
			>
				<AntDesign name="minus" size={15} color="#5A00CD" />
			</TouchableOpacity>
			<Text className="font-semibold text-base">{formattedQuantity}</Text>
			<TouchableOpacity
				className="p-1 rounded-full bg-secondary/10"
				onPress={onIncrease}
			>
				<AntDesign name="plus" size={15} color="#5A00CD" />
			</TouchableOpacity>
		</View>
	);
}
