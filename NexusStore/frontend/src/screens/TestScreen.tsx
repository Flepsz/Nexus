import { useCallback } from "react";
import { FlatList, RefreshControl } from "react-native";
import useFetchProducts from "../queries/productsList";
import { LoadingIndicator } from "../components/utils/LoadingIndicator";
import Toast from "react-native-toast-message";
import { Divider } from "react-native-paper";
import { useRefreshByUser } from "../hooks/useRefreshByUser";
import { useRefreshOnFocus } from "../hooks/useRefreshOnFocus";
import { StackNavigationProp } from "@react-navigation/stack";
import { NexusStackNavigator } from "../navigation/rootNavigator";
import { Product } from "../components/Product";
import { Result } from "../queries/types";

type ProductsScreenNavigationProp = StackNavigationProp<
	NexusStackNavigator,
	"Main"
>;

interface Props {
	navigation: ProductsScreenNavigationProp;
}

export default function TestScreen({ navigation }: Props) {
	const { data, isPending, error, refetch } = useFetchProducts("Tenis Nike");

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

	const renderItem = useCallback(
		({ item }: { item: Result }) => {
			return <Product item={item} onPress={onListItemPress} />;
		},
		[onListItemPress]
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
		<FlatList
			data={data?.results}
			renderItem={renderItem}
			keyExtractor={(item) => item.title}
			ItemSeparatorComponent={() => <Divider />}
			refreshControl={
				<RefreshControl
					refreshing={isRefetchingByUser}
					onRefresh={refetchByUser}
				/>
			}
		></FlatList>
	);
}
