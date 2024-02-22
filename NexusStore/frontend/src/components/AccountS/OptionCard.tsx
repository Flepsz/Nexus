import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity } from "react-native";
import { NexusStackNavigator } from "../../navigation/rootNavigator";

interface Props {
	options: {
		icon: string;
		title: string;
		screen: string;
	};
}

export default function OptionCard({ options }: Props) {
	const navigation = useNavigation<StackNavigationProp<NexusStackNavigator>>();
	return (
		<TouchableOpacity
			className="flex flex-row items-center bg-white p-3.5 rounded-lg"
			style={{ gap: 20 }}
			//@ts-ignore
			onPress={() => navigation.navigate(options.screen)}
		>
			<AntDesign
				//@ts-ignore
				name={options.icon}
				size={25}
				color="#5A00CD"
			/>
			<Text className="font-semibold">{options.title}</Text>
		</TouchableOpacity>
	);
}
