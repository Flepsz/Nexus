import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartStoreProps {
	order: ItemOrder[];
	addToCart: (item: ItemOrder) => void;
	removeFromCart: (item: ItemOrder) => void;
}

const useCartStore = create(
	persist<CartStoreProps>(
		(set) => ({
			order: [],
			addToCart: (item: ItemOrder) => {
				set((state) => ({
					order: [...state.order, item],
				}));
			},
			removeFromCart: (item: ItemOrder) => {
				set((state) => ({
					order: state.order.filter((product) => product !== item),
				}));
			},
		}),
		{
			name: "cart-storage",
		}
	)
);

export default useCartStore;