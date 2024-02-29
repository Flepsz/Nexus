import { ActivityIndicator, SafeAreaView } from "react-native";

interface Props {
	size: "small" | "large";
}

export function LoadingIndicator({ size }: Props) {
	return (
		<SafeAreaView className="m-auto h-screen w-screen flex justify-center items-center">
			<ActivityIndicator size={size} />
		</SafeAreaView>
	);
}
