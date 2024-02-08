import { StackNavigationProp } from "@react-navigation/stack";
import { NexusStackNavigator } from "../navigation/rootNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductsList from "../components/ProductsList";
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
			<TopHeader />
			<ProductsList navigation={navigation} search="Tenis nike" />
		</SafeAreaView>
	);
}
