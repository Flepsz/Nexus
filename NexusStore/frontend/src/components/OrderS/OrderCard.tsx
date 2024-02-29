import { View, Text, Image, ScrollView, RefreshControl } from "react-native";
import OrderItemCard from "./OrderItemCard";
import formatCurrency from "../utils/formatCurrency";

interface Props {
	order: ItemOrder[];
}

export default function OrderCard({ order }: Props) {
	const totalPriceSum = order.reduce((accumulator, currentOrder) => {
		return accumulator + currentOrder.totalPrice;
	}, 0);

	return (
		<View className="bg-white rounded-xl">
			<ScrollView
				className="m-6 mb-3"
				// refreshControl={
				// 	<RefreshControl
				// 		refreshing={isRefetchingByUser}
				// 		onRefresh={refetchByUser}
				// 	/>
				// }
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			>
				{order?.map((item) => (
					<>
						<OrderItemCard item={item} key={item.id} />
						<View className="border-[0.2px] border-zinc-300 w-[80%] mx-auto my-2"></View>
					</>
				))}
			</ScrollView>
			<View className="flex flex-row justify-between h-11 border-t-[0.2px] border-zinc-300">
				<View className="flex justify-center items-center bg-secondary h-full w-[50%] rounded-bl-xl">
					<Text className="text-white font-medium text-base">Entregue</Text>
				</View>
				<View className="flex justify-center items-center h-full w-[50%]">
					<Text className="text-secondary font-black text-base">Total: {formatCurrency(totalPriceSum, "BRL")}</Text>
				</View>
			</View>
		</View>
	);
}
