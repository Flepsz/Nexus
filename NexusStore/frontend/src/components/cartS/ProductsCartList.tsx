import { View } from "react-native";
import ProductCart from "./ProductCart";

interface Props {
	order: ItemOrder[];
}

export default function ProductsCartList({ order }: Props) {
  return (
    <View>
      {order?.map((item) => (
        <ProductCart key={item.id} item={item} />
      ))}
    </View>
  )
}