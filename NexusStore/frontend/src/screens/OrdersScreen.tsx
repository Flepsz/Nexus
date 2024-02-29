import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopHeader from "../components/common/TopHeader";
import useCartStore from "../store/useCartStore";
import OrderCard from "../components/OrderS/OrderCard";

export default function OrdersScreen() {
	const orderList = useCartStore((state) => state.order);

	return (
		<SafeAreaView>
			<ScrollView
				className="flex flex-col w-screen h-screen px-5"
				style={{ gap: 10 }}
			>
				<TopHeader title="Pedidos" />

				{/* {orderList?.map((order) => (
					<OrderCard order={order} />
				))} */}
				<View className="py-5 flex flex-col" style={{ gap: 25 }}>
					<OrderCard order={orderList} />
					<OrderCard order={orderList} />
					<OrderCard order={orderList} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
