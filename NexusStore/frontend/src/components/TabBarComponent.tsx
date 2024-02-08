import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

interface Props {
	nameIcon: string;
	focused: boolean;
	size: number;
	color: string;
	text: string;
}

export default function TabBarComponent({
	nameIcon,
	focused,
	color,
	size,
	text,
}: Props) {
	const nameIconC = nameIcon + "-outline";
	return (
		<View className={`flex flex-row items-center ${focused && "bg-secondary p-2 w-full rounded-xl"}`}>
			<Ionicons
				name={focused ? nameIcon : nameIconC}
				size={size}
				color={focused ? "#FFF" : color}
			/>
			{focused && <Text className={`text-white px-2`}>{text}</Text>}
		</View>
	);
}
