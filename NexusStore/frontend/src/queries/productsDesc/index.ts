import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { ProductDescription } from "../types";
import { apiML } from "../../services/api";

async function getProductsDescription(ctx: QueryFunctionContext) {
	const [, itemId] = ctx.queryKey;
	const { data } = await apiML.get<ProductDescription>(
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
