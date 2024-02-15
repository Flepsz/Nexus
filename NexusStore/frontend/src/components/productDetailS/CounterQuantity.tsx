import { AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";

type Props = {
	quantity: number;
};

export default function CounterQuantity({ quantity }: Props) {
	return (
		<View className="flex flex-row gap-2 items-center">
			<View className="p-1.5 rounded-full bg-zinc-100">
				<AntDesign name="minus" size={20} color="#000" />
			</View>
			<Text className="font-semibold text-xl">{quantity}</Text>
			<View className="p-1.5 rounded-full bg-secondary">
				<AntDesign name="plus" size={20} color="#FFF" />
			</View>
		</View>
	);
}
