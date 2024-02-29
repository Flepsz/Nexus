import { View, Text, SafeAreaView, TextInput } from "react-native";
import { Searchbar } from "react-native-paper";
import CartSquare from "../common/CartSquare";

interface SearchBarProps {
	onChangeText:
		| (((text: string) => void) & ((query: string) => void))
		| undefined;
	value: string;
}

export default function SearchBar({ onChangeText, value }: SearchBarProps) {
	return (
		<SafeAreaView
			className="flex flex-row mx-6 w-full "
			style={{ gap: 20 }}
		>
			<Searchbar
				className="bg-white rounded-lg w-[70%]"
				placeholder="Pesquise Aqui"
				onChangeText={onChangeText}
				value={value}
			/>
			<CartSquare />
		</SafeAreaView>
	);
}
