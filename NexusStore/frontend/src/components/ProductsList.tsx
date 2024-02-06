import { View, Text, RefreshControl, ScrollView } from "react-native";
import React, { useCallback } from "react";
import { Product } from "./Product";
import Toast from "react-native-toast-message";
import { useRefreshByUser } from "../hooks/useRefreshByUser";
import { useRefreshOnFocus } from "../hooks/useRefreshOnFocus";
import useFetchProducts from "../queries/productsList";
import { LoadingIndicator } from "./utils/LoadingIndicator";
import { Result } from "../queries/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { NexusStackNavigator } from "../navigation/rootNavigator";

interface Props {
  search: string;
	navigation: StackNavigationProp<NexusStackNavigator, keyof NexusStackNavigator>;
}

export default function ProductsList({ search, navigation }: Props) {
	const { data, isPending, error, refetch } = useFetchProducts(search);

	const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);
	useRefreshOnFocus(refetch);

	const onListItemPress = useCallback(
		(product: Result) => {
			navigation.navigate("ProductDetails", {
				product,
			});
		},
		[navigation]
	);

	if (isPending) return <LoadingIndicator size="large" />;

	if (error) {
		Toast.show({
			type: "error",
			text1: error.message,
		});
		console.log(error);
	}
	return (
		<ScrollView
			className="m-3 h-screen mb-10"
			refreshControl={
				<RefreshControl refreshing={isRefetchingByUser} onRefresh={refetchByUser} />
			}
			showsHorizontalScrollIndicator={false}
		>
			<View style={{ gap: 10 }}>
				<Text className="text-xl font-bold">Produtos</Text>
				<View
					className="flex flex-wrap flex-row justify-center items-center h-full"
					style={{ gap: 10 }}
				>
					{data &&
						data.results.map((item: Result) => (
							<Product key={item.id} item={item} onPress={onListItemPress} />
						))}
				</View>
			</View>
		</ScrollView>
	);
}
