import { AntDesign } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

type Props = {
	quantity: number;
	onIncrease: () => void;
  onDecrease: () => void;
};

export default function CounterQuantity({ quantity, onDecrease, onIncrease }: Props) {
	const formattedQuantity = quantity < 10 ? `0${quantity}` : `${quantity}`;

	return (
		<View className="flex flex-row gap-2 items-center">
			<TouchableOpacity className="p-1.5 rounded-full bg-zinc-100" onPress={onDecrease}>
				<AntDesign name="minus" size={20} color="#000" />
			</TouchableOpacity>
			<Text className="font-semibold text-xl">{formattedQuantity}</Text>
			<TouchableOpacity className="p-1.5 rounded-full bg-secondary" onPress={onIncrease}>
				<AntDesign name="plus" size={20} color="#FFF" />
			</TouchableOpacity>
		</View>
	);
}
