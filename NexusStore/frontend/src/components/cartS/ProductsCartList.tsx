import { Text, View } from "react-native";
import ProductCart from "./ProductCart";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NexusStackNavigator } from "../../navigation/rootNavigator";
import { Result } from "../../queries/types";

interface Props {
	order: ItemOrder[];
}

export default function ProductsCartList({ order }: Props) {
	const navigation = useNavigation<StackNavigationProp<NexusStackNavigator>>();

	const onListItemPress = useCallback(
		(product: Result) => {
			navigation.navigate("ProductDetails", {
				product,
			});
		},
		[navigation]
	);
	return (
		<View className="flex flex-col mt-5 mb-52" style={{ gap: 20 }}>
			{order.map((item) => (
				<ProductCart key={item.id} item={item} />
			))}
			{order.length == 0 && (
				<Text className="m-auto font-medium text-base">
					Não Há Nenhum Item Adicionado ao Carrinho...
				</Text>
			)}
		</View>
	);
}
