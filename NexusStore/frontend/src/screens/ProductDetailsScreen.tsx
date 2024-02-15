import { StackNavigationProp } from "@react-navigation/stack";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NexusStackNavigator } from "../navigation/rootNavigator";
import useFetchProductsDesc from "../queries/productsDesc";
import { LoadingIndicator } from "../components/utils/LoadingIndicator";
import { useRefreshByUser } from "../hooks/useRefreshByUser";
import Toast from "react-native-toast-message";
import TopHeader from "../components/common/TopHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import CartSquare from "../components/common/CartSquare";
import { Entypo } from "@expo/vector-icons";
import useFetchProductCategory from "../queries/productCategory";
import { ProductDetail } from "../components/productDetailS/ProductDetail";
import ProductDescription from "../components/productDetailS/ProductDescription";
import ProductDetailFooter from "../components/productDetailS/ProductDetailFooter";

type ProductDetailsScreenNavigationProp = StackNavigationProp<
	NexusStackNavigator,
	"ProductDetails"
>;

interface Props {
	navigation: ProductDetailsScreenNavigationProp;
	route: RouteProp<NexusStackNavigator, "ProductDetails">;
}

export default function ProductDetailsScreen({ route, navigation }: Props) {
	const product = route.params.product;

	const {
		isPending,
		error,
		data: ProdDescData,
		refetch,
	} = useFetchProductsDesc(route.params.product.id);

	const Description = ProdDescData?.plain_text;

	const { data: Category } = useFetchProductCategory(
		route.params.product.category_id
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

	if (!ProdDescData) return null;

	return (
		<SafeAreaView>
			<ScrollView
				className="w-screen h-screen px-5 flex flex-col"
				refreshControl={
					<RefreshControl
						refreshing={isRefetchingByUser}
						onRefresh={refetchByUser}
					/>
				}
			>
				<TopHeader title="PRODUTO" navigation={navigation} />
				<ProductDetail item={product} category={Category} />
				<ProductDescription description={Description} />
			</ScrollView>
			<ProductDetailFooter price={product.price} />
		</SafeAreaView>
	);
}
