import { View, Text } from "react-native";

export default function ProductDescription({
	description,
}: {
	description?: string;
}) {
	return (
		<View>
			<Text className="font-semibold text-lg">Descrição</Text>
			<View className="ml-2">
				<Text className="text-base text-justify font-normal">
					{description}
				</Text>
			</View>
		</View>
	);
}
