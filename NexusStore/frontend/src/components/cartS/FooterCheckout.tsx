import { View, Text } from "react-native";

interface Props {
	order: ItemOrder[];
}

export default function FooterCheckout({ order }: Props) {
	return (
		<View className="absolute bottom-14 w-full h-28 bg-white rounded-t-2xl px-5 py-5">
			<Text className="font-semibold text-base">Itens Selecionados ({order.length})</Text>
		</View>
	);
}
