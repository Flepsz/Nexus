import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CartSquare() {
	return (
		<View className="flex items-center justify-center w-12 p-2 rounded-lg bg-secondary/10">
			<Ionicons name="cart-outline" size={30} />
		</View>
	);
}
