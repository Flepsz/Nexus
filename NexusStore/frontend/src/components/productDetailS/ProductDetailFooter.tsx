import { View, Text, TouchableOpacity } from "react-native";
import CounterQuantity from "./CounterQuantity";
import formatCurrency from "../utils/formatCurrency";

interface Props {
	price: number;
}

export default function ProductDetailFooter({ price }: Props) {
	return (
		<View className="absolute bottom-0 w-full h-32 bg-white rounded-t-2xl p-5">
			<View>
				<View className="flex flex-row justify-between">
					<CounterQuantity quantity={0} />
					<Text className="font-bold text-lg">
						Total: {formatCurrency(price, "BRL")}
					</Text>
				</View>
        <TouchableOpacity>
          
        </TouchableOpacity>
			</View>
		</View>
	);
}
