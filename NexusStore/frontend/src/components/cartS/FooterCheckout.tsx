import { View, Text, Button, TouchableOpacity } from "react-native";
import formatCurrency from "../utils/formatCurrency";
import useMutateShipping, { getShipping } from "../../queries/calcShipping";

interface Props {
	order: ItemOrder[];
}

export default function FooterCheckout({ order }: Props) {
	const totalPriceSum = order.reduce((accumulator, currentOrder) => {
		return accumulator + currentOrder.totalPrice;
	}, 0);

	const mutateShipping = useMutateShipping();

	const handleShippingMutation = async () => {
		try {
			const result = await mutateShipping.mutateAsync({
				from: "13036210",
				to: "13272514",
			});
			console.log("Shipping result:", result);
		} catch (error) {
			console.log(mutateShipping.error);
			
			console.error("Error mutating shipping:", error);
		}
	};

	const test = async () => {
		try {
			const result = await getShipping(
				"13036210",
				"13272514",
			);
			console.log("Shipping result:", result);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<View className="absolute bottom-14 w-full h-32 bg-white rounded-t-2xl px-5 py-5">
			<View className="flex flex-col justify-between h-full">
				<View className="flex flex-row justify-between">
					<Text className="font-medium text-base">
						Itens Selecionados ({order.length})
					</Text>
					<Text className="font-black text-base">
						Total: {formatCurrency(totalPriceSum, "BRL")}
					</Text>
				</View>
				<TouchableOpacity onPress={handleShippingMutation} className="w-full bg-secondary flex rounded-lg py-2.5">
					<Text className="text-white font-medium text-base text-center">
						Checkout
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
