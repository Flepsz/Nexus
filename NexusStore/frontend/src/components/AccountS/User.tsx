import { View, Text, Image } from "react-native";

interface Props {
	user: {
		name: string;
		email: string;
		img: string;
	};
}

export default function User({ user }: Props) {
	return (
		<View className="w-full flex flex-row items-center mt-10" style={{ gap: 10 }}>
			<Image
				style={{
					width: 50,
					height: 50,
					resizeMode: "contain",
				}}
				source={{ uri: user.img }}
			/>
			<View className="flex">
				<Text className="font-semibold text-base">{user.name}</Text>
				<Text className="opacity-40">{user.email}</Text>
			</View>
		</View>
	);
}
