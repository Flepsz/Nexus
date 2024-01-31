import { StackNavigationProp } from "@react-navigation/stack";
import { RefreshControl, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NexusStackNavigator } from "../navigation/rootNavigator";
import useFetchProductsDesc from "../queries/productsDesc";
import { LoadingIndicator } from "../components/utils/LoadingIndicator";
import { useRefreshByUser } from "../hooks/useRefreshByUser";
import Toast from "react-native-toast-message";

type ProductDetailsScreenNavigationProp = StackNavigationProp<
	NexusStackNavigator,
	"ProductDetails"
>;

interface Props {
	navigation: ProductDetailsScreenNavigationProp;
	route: RouteProp<NexusStackNavigator, "ProductDetails">;
}

export default function ProductDetailsScreen({ route }: Props) {
	const product = route.params.product;

	const { isPending, error, data, refetch } = useFetchProductsDesc(
		route.params.product.id
	);

	const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);

	if (isPending) return <LoadingIndicator size="large" />;

	if (error) {
		Toast.show({
			type: "error",
			text1: error.message,
		});
		console.log(error);
	}

	if (!data) return null;

	return (
		<ScrollView
			refreshControl={
				<RefreshControl
					refreshing={isRefetchingByUser}
					onRefresh={refetchByUser}
				/>
			}
		></ScrollView>
	);
}
