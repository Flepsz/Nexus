import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { TouchableRipple, Paragraph } from "react-native-paper";
import { Result } from "../queries/types";

type Props = {
	item: Result;
	onPress: (item: Result) => void;
};

export function Product({ item, onPress }: Props) {
	return (
		<TouchableOpacity onPress={() => onPress(item)} className="bg-white w-[50%]">
			<View>
				<View className="">
					<Image style={{ width: 200, height: 150, resizeMode: 'contain'}} source={{uri: item.thumbnail}} />
				</View>
				<View>
					<Text className="text-base">{item.title}</Text>
					<Text className="text-base font-bold">{item.price}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
