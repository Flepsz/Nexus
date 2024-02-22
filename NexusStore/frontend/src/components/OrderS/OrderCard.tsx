import { View, Text, Image } from "react-native";
import formatCurrency from "../utils/formatCurrency";
import OrderItemCard from "./OrderItemCard";
import { Divider } from "react-native-paper";

interface Props {
	order: ItemOrder[];
}

export default function OrderCard({ order }: Props) {
	return (
		<View className="bg-white w-full">
			{order?.map((item) => (
        <OrderItemCard item={item} key={item.id} />
      ))}
      
		</View>
	);
}
