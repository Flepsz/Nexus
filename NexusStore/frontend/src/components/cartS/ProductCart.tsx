import { View, Text, Image } from "react-native";
import formatCurrency from "../utils/formatCurrency";
import CounterQuantityCart from "./CounterQuantityCart";

type Props = {
	item: ItemOrder;
};

export default function ProductCart({ item }: Props) {
	return (
		<View className="bg-white rounded-xl">
			<View className="flex flex-row justify-between">
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
				<View className="m-3 flex flex-col">
					<Text className="text-sm font-semibold">
						{item.title.length > 18
							? `${item.title.slice(0, 18)}...`
							: item.title}
					</Text>
					<Text className="text-base font-bold">
						{formatCurrency(item.price, "BRL")}
					</Text>
				</View>
				<CounterQuantityCart />
			</View>
		</View>
	);
}
