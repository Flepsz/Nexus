import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { ProductsSearch } from "../types";
import { apiML } from "../../services/api";

async function getProducts(ctx: QueryFunctionContext) {
	const [, search] = ctx.queryKey;
	const { data } = await apiML.get<ProductsSearch>(
		`sites/MLB/search?q=${search}`
	);

	return data;
}

export default function useFetchProducts(search: string) {
	return useQuery<ProductsSearch, Error>({
		queryKey: ["products", search],
		queryFn: getProducts,
	});
}
