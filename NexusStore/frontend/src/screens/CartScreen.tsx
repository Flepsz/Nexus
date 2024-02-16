import { ScrollView } from "react-native";
import TopHeader from "../components/common/TopHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp } from "@react-navigation/native";
import { TabStackParamList } from "../navigation/tabNavigator";
import FooterCheckout from "../components/cartS/FooterCheckout";
import useCartStore from "../store/useCartStore";
import ProductsCartList from "../components/cartS/ProductsCartList";

type CartScreenNavigationProp = NavigationProp<TabStackParamList, "Cart">;

interface Props {
	navigation: CartScreenNavigationProp;
}

export default function CartScreen() {
	const order = useCartStore((state) => state.order);
	return (
		<SafeAreaView>
			<ScrollView className="w-screen h-screen px-5 flex flex-col">
				<TopHeader title="CARRINHO" cart />
				<ProductsCartList order={order} />
			</ScrollView>
			<FooterCheckout order={order} />
		</SafeAreaView>
	);
}
