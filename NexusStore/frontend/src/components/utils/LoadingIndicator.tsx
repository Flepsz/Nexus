import { View, ActivityIndicator } from "react-native";

interface Props {
	size: "small" | "large";
}

export function LoadingIndicator({ size }: Props) {
	return (
		<View className="m-auto">
			<ActivityIndicator size={size} />
		</View>
	);
}
