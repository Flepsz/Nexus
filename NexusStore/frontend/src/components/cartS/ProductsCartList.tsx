import { Text, View } from "react-native";
import ProductCart from "./ProductCart";

interface Props {
	order: ItemOrder[];
}

export default function ProductsCartList({ order }: Props) {
  return (
    <View className="flex flex-col mt-5 mb-44" style={{gap: 20}}>
      {order.map((item) => (
        <ProductCart key={item.id} item={item} />
      ))}
      {order.length == 0 && (
        <Text className="m-auto font-medium text-base">Não Há Nenhum Item Adicionado ao Carrinho...</Text>
      )}
    </View>
  )
}