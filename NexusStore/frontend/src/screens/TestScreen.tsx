import { useCallback } from "react";
import { FlatList, Text, View, ScrollView
 } from "react-native";
import useFetchProducts from "../queries/productsList";
import { LoadingIndicator } from "../components/utils/LoadingIndicator";
import Toast from "react-native-toast-message";
import { useRefreshByUser } from "../hooks/useRefreshByUser";
import { useRefreshOnFocus } from "../hooks/useRefreshOnFocus";
import { StackNavigationProp } from "@react-navigation/stack";
import { NexusStackNavigator } from "../navigation/rootNavigator";
import { Product } from "../components/Product";
import { Result } from "../queries/types";
import { SafeAreaView } from "react-native-safe-area-context";

type ProductsScreenNavigationProp = StackNavigationProp<
	NexusStackNavigator,
	"Main"
>;

interface Props {
	navigation: ProductsScreenNavigationProp;
}

export default function TestScreen({ navigation }: Props) {
	const { data, isPending, error, refetch } = useFetchProducts("Tensi nike");

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
		<SafeAreaView>
			<ScrollView className="p-7">
			<View>
				<Text className="text-xl font-bold">Produtos</Text>
				<View className="flex gap-5 grid-cols-2">
				{data &&
					data.results.map((item: Result) => (
						<Product key={item.id} item={item} onPress={onListItemPress} />
					))}
				</View>
			</View>
		</ScrollView>
		</SafeAreaView>
		// <FlatList
		// 	data={data?.results}
		// 	renderItem={renderItem}
		// 	keyExtractor={(item) => item.id}
		// 	ItemSeparatorComponent={() => <Divider />}
		// 	refreshControl={
		// 		<RefreshControl
		// 			refreshing={isRefetchingByUser}
		// 			onRefresh={refetchByUser}
		// 		/>
		// 	}
		// ></FlatList>
	);
}
