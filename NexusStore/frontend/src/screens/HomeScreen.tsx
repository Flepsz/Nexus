import { StackNavigationProp } from "@react-navigation/stack";
import { NexusStackNavigator } from "../navigation/rootNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductsList from "../components/homeS/ProductsList";
import SearchBar from "../components/homeS/SearchBar";
import { useState } from "react";

type HomeScreenNavigationProp = StackNavigationProp<
	NexusStackNavigator,
	"Main"
>;

interface Props {
	navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: Props) {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<SafeAreaView>
			<SearchBar value={searchQuery} onChangeText={setSearchQuery} />
			<ProductsList navigation={navigation} search={searchQuery} />
		</SafeAreaView>
	);
}
