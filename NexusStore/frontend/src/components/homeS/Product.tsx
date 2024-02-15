import { View, Image, Text } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { Result } from "../../queries/types";
import formatCurrency from "../utils/formatCurrency";

type Props = {
	item: Result;
	onPress: (item: Result) => void;
};

export function Product({ item, onPress }: Props) {
	return (
		<TouchableRipple
			onPress={() => onPress(item)}
			className="bg-white w-[48%] rounded-xl"
		>
			<View>
				<View className="mx-3 mt-3">
					<Text className="font-bold text-base text-purple-900">30% OFF</Text>
				</View>
				<View className="overflow-hidden">
					<Image
						style={{
							width: 170,
							height: 100,
							resizeMode: "contain",
							margin: "auto",
						}}
						source={{ uri: item.thumbnail }}
					/>
				</View>
				<View className="m-3">
					<Text className="text-sm font-semibold">
						{item.title.length > 18
							? `${item.title.slice(0, 18)}...`
							: item.title}
					</Text>
					<Text className="text-base font-bold">
						{formatCurrency(item.price, "BRL")}
					</Text>
				</View>
			</View>
		</TouchableRipple>
	);
}
