import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./tabNavigator";
import "../../globals.css";
import DetailsScreen from "../screens/ProductDetailsScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import OrdersScreen from "../screens/OrdersScreen";
import { Result } from "../queries/types";
import { DataScreens } from "../components/api/Data";

export type NexusStackNavigator = {
	Main: undefined;
	OrdersScreen: undefined;
	MyAccountScreen: undefined;
	ProductDetails: { product: Result };
};

const RootStack = createNativeStackNavigator<NexusStackNavigator>();

export default function RootNavigator() {
	return (
		<RootStack.Navigator>
			<RootStack.Group>
				<RootStack.Screen name="Main" component={TabNavigator} />
			</RootStack.Group>
			<RootStack.Group>
				<RootStack.Screen
					name="ProductDetails"
					component={DetailsScreen}
					options={{ headerShown: false }}
				/>
			</RootStack.Group>
			<RootStack.Group>
				<RootStack.Screen
					name="OrdersScreen"
					component={OrdersScreen}
					options={{ headerShown: false }}
				/>
				<RootStack.Screen
					name="MyAccountScreen"
					component={MyAccountScreen}
					options={{ headerShown: false }}
				/>
			</RootStack.Group>
		</RootStack.Navigator>
	);
}
