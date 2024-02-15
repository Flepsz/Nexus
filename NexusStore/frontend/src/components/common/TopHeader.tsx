import { Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import CartSquare from "./CartSquare";
import { StackNavigationProp } from "@react-navigation/stack";
import { NexusStackNavigator } from "../../navigation/rootNavigator";

interface Props {
	title: string;
	navigation: StackNavigationProp<
		NexusStackNavigator,
		keyof NexusStackNavigator
	>;
}

export default function TopHeader({ title, navigation }: Props) {
	return (
		<View className="flex flex-row justify-between items-center">
			<Entypo
				name="chevron-thin-left"
				size={30}
				onPress={() => navigation.goBack()}
			/>
			<Text className="font-medium">{title}</Text>
			<CartSquare />
		</View>
	);
}
