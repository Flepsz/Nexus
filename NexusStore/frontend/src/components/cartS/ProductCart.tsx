import { View, Text, Image } from "react-native";
import formatCurrency from "../utils/formatCurrency";
import CounterQuantityCart from "./CounterQuantityCart";
import useCartStore from "../../store/useCartStore";

type Props = {
	item: ItemOrder;
};

export default function ProductCart({ item }: Props) {
	const { removeFromCart, decreaseQuantity, increaseQuantity } = useCartStore();

	const handleRemoveFromCart = () => {
		removeFromCart(item);
	};

	const handleDecreaseQuantity = () => {
		if (item.quantity < 1) {
			handleRemoveFromCart();
		} else {
			decreaseQuantity(item.id);
		}
	};

	const handleIncreaseQuantity = () => {
		increaseQuantity(item.id);
	};

	return (
		<View className="bg-white rounded-xl">
			<View className="flex flex-row items-center justify-between px-3">
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
				<View className="m-3 flex flex-col gap-1">
					<Text className="text-sm font-semibold">
						{item.title.length > 18
							? `${item.title.slice(0, 18)}...`
							: item.title}
					</Text>
					<Text className="text-base font-bold">
						{formatCurrency(item.totalPrice, "BRL")}
					</Text>
				</View>
				<CounterQuantityCart
					quantity={item.quantity}
					onDecrease={handleDecreaseQuantity}
					onIncrease={handleIncreaseQuantity}
					key={item.id}
				/>
			</View>
		</View>
	);
}
