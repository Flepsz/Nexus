import { View, Image, Text } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { Result } from "../../queries/types";
import formatCurrency from "../utils/formatCurrency";

type Props = {
	item: Result;
	category?: string;
};

export function ProductDetail({ item, category }: Props) {
	return (
		<View className="bg-white w-full rounded-xl my-7">
			<View>
				<View className="overflow-hidden">
					<Image
						style={{ height: 200, resizeMode: "contain", margin: "auto" }}
						source={{ uri: item.thumbnail }}
					/>
				</View>
				<View className="mx-3 mb-3">
					<Text className="text-sm font-medium text-secondary uppercase">
						{category}
					</Text>
					<View className="flex flex-row justify-between">
						<Text className="text-xl font-semibold">
							{item.title.length > 24
								? `${item.title.slice(0, 24)}...`
								: item.title}
						</Text>
						<Text className="text-xl font-bold text-secondary">
							{formatCurrency(item.price, "BRL")}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
