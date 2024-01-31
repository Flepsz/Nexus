import { StyleSheet, Text, View, AppStateStatus, Platform } from "react-native";
import { QueryClientProvider, focusManager } from "@tanstack/react-query";
import queryClient from "./src/services/queryClient";
import { useAppState } from "./src/hooks/useAppState";
import { useOnlineManager } from "./src/hooks/useOnlineManager";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/rootNavigator";

function onAppStateChange(status: AppStateStatus) {
	if (Platform.OS !== "web") {
		focusManager.setFocused(status === "active");
	}
}

export default function App() {
	useOnlineManager();
	useAppState(onAppStateChange);

	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>
				<RootNavigator />
			</NavigationContainer>
		</QueryClientProvider>
	);
}

