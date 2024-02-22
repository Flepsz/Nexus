import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import User from "../components/AccountS/User";
import { DataScreens } from "../components/api/Data";
import OptionCard from "../components/AccountS/OptionCard";

export default function AccountScreen() {
	const data = DataScreens.configAccount;
	return (
		<SafeAreaView>
			<View className="px-5 flex flex-col" style={{ gap: 40 }}>
				<User user={data.user} />
				<View className="flex flex-col" style={{ gap: 10 }}>
					{data.options.map((option) => (
						<OptionCard options={option} key={option.title} />
					))}
				</View>
			</View>
		</SafeAreaView>
	);
}
