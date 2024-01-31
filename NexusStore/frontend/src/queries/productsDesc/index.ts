import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import api from "../../services/api";
import { ProductDescription } from "../types";

async function getProductsDescription(ctx: QueryFunctionContext) {
	const [, itemId] = ctx.queryKey;
	const { data } = await api.get<ProductDescription>(
		`items/${itemId}/description`
	);

	return data;
}

export default function useFetchProductsDesc(itemId: string) {
	return useQuery<ProductDescription, Error>({
		queryKey: ["productsDesc", itemId],
		queryFn: getProductsDescription,
	});
}
