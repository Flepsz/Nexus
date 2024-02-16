import { Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import CartSquare from "./CartSquare";
import { StackNavigationProp } from "@react-navigation/stack";
import { NexusStackNavigator } from "../../navigation/rootNavigator";
import { useNavigation } from "@react-navigation/native";

interface Props {
	title: string;
	cart?: boolean;
}

export default function TopHeader({ title, cart }: Props) {
	const navigation = useNavigation<StackNavigationProp<NexusStackNavigator>>();
	return (
		<View className="flex flex-row justify-between items-center">
			<TouchableOpacity>
				<Entypo
					name="chevron-thin-left"
					size={30}
					onPress={() => navigation.goBack()}
				/>
			</TouchableOpacity>

			<Text className="font-medium">{title}</Text>
			{!cart ? <CartSquare /> : <View className="w-8"></View>}
		</View>
	);
}
