import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabStackParamList } from "../../navigation/tabNavigator";


export default function CartSquare() {
	const navigation = useNavigation<NavigationProp<TabStackParamList>>()
	return (
		<TouchableOpacity
			className="flex items-center justify-center w-12 p-2 rounded-lg bg-secondary/10"
			onPress={() => navigation.navigate("Cart")}
		>
			<Ionicons name="cart-outline" size={30} />
		</TouchableOpacity>
	);
}
