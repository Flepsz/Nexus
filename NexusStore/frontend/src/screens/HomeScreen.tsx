import { StackNavigationProp } from "@react-navigation/stack";
import { NexusStackNavigator } from "../navigation/rootNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductsList from "../components/homeS/ProductsList";
import TopHeader from "../components/common/TopHeader";

type HomeScreenNavigationProp = StackNavigationProp<
	NexusStackNavigator,
	"Main"
>;

interface Props {
	navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: Props) {
	return (
		<SafeAreaView>
			<ProductsList navigation={navigation} search="Tenis nike" />
		</SafeAreaView>
	);
}
