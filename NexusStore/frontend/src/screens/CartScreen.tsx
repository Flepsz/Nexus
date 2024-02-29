import { ScrollView } from "react-native";
import TopHeader from "../components/common/TopHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp } from "@react-navigation/native";
import { TabStackParamList } from "../navigation/tabNavigator";
import FooterCheckout from "../components/cartS/FooterCheckout";
import useCartStore from "../store/useCartStore";
import ProductsCartList from "../components/cartS/ProductsCartList";

type CartScreenNavigationProp = NavigationProp<TabStackParamList, "Cart">;


export default function CartScreen() {
	const order = useCartStore((state) => state.order);
	return (
		<SafeAreaView>
			<ScrollView className="flex flex-col w-screen h-screen px-5">
				<TopHeader title="CARRINHO" />
				<ProductsCartList order={order} />
			</ScrollView>
			{order.length > 0 && <FooterCheckout order={order} />}
		</SafeAreaView>
	);
}
