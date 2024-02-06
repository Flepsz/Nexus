import { AppStateStatus, Platform } from "react-native";
import { QueryClientProvider, focusManager } from "@tanstack/react-query";
import queryClient from "./src/services/queryClient";
import { useAppState } from "./src/hooks/useAppState";
import { useOnlineManager } from "./src/hooks/useOnlineManager";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import RootNavigator from "./src/navigation/rootNavigator";
import Toast from "react-native-toast-message";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
	default: "native",
});

function onAppStateChange(status: AppStateStatus) {
	if (Platform.OS !== "web") {
		focusManager.setFocused(status === "active");
	}
}

export default function App() {
	useOnlineManager();
	useAppState(onAppStateChange);

	const MyTheme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: "#F4F4F4",
		},
	};

	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer theme={MyTheme}>
				<RootNavigator />
			</NavigationContainer>
			<Toast />
		</QueryClientProvider>
	);
}
