import { View, Text, Image } from "react-native";
import React from "react";
import formatCurrency from "../utils/formatCurrency";
import { Divider } from "react-native-paper";

type Props = {
	item: ItemOrder;
};

export default function OrderItemCard({ item }: Props) {
  const formattedQuantity = item.quantity < 10 ? `0${item.quantity}` : `${item.quantity}`;
	return (
		<View className="flex flex-row items-center">
			<View className="overflow-hidden">
				<Image
					style={{
						width: 100,
						height: 90,
						resizeMode: "contain",
					}}
					source={{ uri: item.thumbnail }}
				/>
			</View>
			<View className="flex flex-col gap-1">
				<Text className="text-sm font-semibold">
					{item.title.length > 30
						? `${item.title.slice(0, 30)}...`
						: item.title}
				</Text>
        <Text>x{formattedQuantity}</Text>
				<Text className="text-base font-bold text-secondary">
					{formatCurrency(item.totalPrice, "BRL")}
				</Text>
			</View>
		</View>
	);
}
