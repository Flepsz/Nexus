import { View, Text } from "react-native";
import { LoadingIndicator } from "../utils/LoadingIndicator";

export default function ProductDescription({
	description,
}: {
	description?: string;
}) {
	return (
		<View>
			<Text className="text-lg font-semibold">Descrição</Text>
			<View className="ml-2 mb-52">
				<Text className="text-base font-normal text-justify">
					{description ? description : <LoadingIndicator size="large" />}
				</Text>
			</View>
		</View>
	);
}
