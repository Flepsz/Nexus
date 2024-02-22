import { View, Alert, Button } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountScreen() {
	const handleClearData = async () => {
		try {
			await AsyncStorage.clear();
			Alert.alert(
				"Dados Limpos",
				"Todos os dados armazenados foram removidos."
			);
		} catch (error) {
			console.error("Erro ao limpar dados:", error);
			Alert.alert("Erro", "Ocorreu um erro ao limpar os dados armazenados.");
		}
	};

	return (
		<SafeAreaView>
			<View>
				<Button title="Limpar Dados" onPress={handleClearData} />
			</View>
		</SafeAreaView>
	);
}
