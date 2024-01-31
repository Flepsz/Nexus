import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./tabNavigator";
import "../../globals.css";
import DetailsScreen from "../screens/ProductDetailsScreen";
import { Result } from "../queries/types";

export type NexusStackNavigator = {
	Main: undefined;
	ProductDetails: { product: Result };
}

const RootStack = createNativeStackNavigator<NexusStackNavigator>();

export default function RootNavigator() {
	return (
		<RootStack.Navigator>
			<RootStack.Group>
				<RootStack.Screen name="Main" component={TabNavigator} />
			</RootStack.Group>
			<RootStack.Group>
				<RootStack.Screen name="ProductDetails" component={DetailsScreen} />
			</RootStack.Group>
		</RootStack.Navigator>
	);
}
