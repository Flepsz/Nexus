import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import TabBarComponent from "../components/TabBarComponent";

export type TabStackParamList = {
	Home: undefined;
	Cart: undefined;
	Liked: undefined;
	Account: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

export default function TabNavigator() {
	const navigation = useNavigation();
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: "#5A00CD",
				tabBarShowLabel: false,

				tabBarStyle:{
          backgroundColor: '#FFF',
					paddingHorizontal: 10,
          height: 60,
          paddingBottom: 0, 
        }
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size, focused }) => {
						return <TabBarComponent nameIcon="home" text="Home" focused={focused} size={size} color={color} />

					},
				}}
			/>
			<Tab.Screen
				name="Cart"
				component={HomeScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size, focused }) => {
						return <TabBarComponent nameIcon="cart" text="Cart" focused={focused} size={size} color={color} />
					},
				}}
			/>
			<Tab.Screen
				name="Liked"
				component={HomeScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size, focused }) => {
						return <TabBarComponent nameIcon="heart" text="Liked" focused={focused} size={size} color={color} />
					},
				}}
			/>
			<Tab.Screen
				name="Account"
				component={HomeScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size, focused }) => {
						return <TabBarComponent nameIcon="person" text="Me" focused={focused} size={size} color={color} />
					},
				}}
			/>
		</Tab.Navigator>
	);
}
