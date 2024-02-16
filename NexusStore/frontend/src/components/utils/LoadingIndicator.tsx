import { View, ActivityIndicator } from "react-native";

interface Props {
	size: "small" | "large";
}

export function LoadingIndicator({ size }: Props) {
	return (
		<View className="m-auto h-screen">
			<ActivityIndicator size={size} />
		</View>
	);
}
