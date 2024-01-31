import React from "react";
import { View, Image } from "react-native";
import { TouchableRipple, Paragraph } from "react-native-paper";
import { Result } from "../queries/types";

type Props = {
	item: Result;
	onPress: (item: Result) => void;
};

export function Product({ item, onPress }: Props) {
	return (
		<TouchableRipple onPress={() => onPress(item)} accessibilityRole="button">
			<View className="w-44 bg-white">
				<Image source={{uri: item.thumbnail}} />
				<View>
					<Paragraph className="text-base">{item.title}</Paragraph>
					<Paragraph className="text-base font-bold">{item.price}</Paragraph>
				</View>
			</View>
		</TouchableRipple>
	);
}
