import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import api from "../../services/api";
import { Category, ProductDescription } from "../types";

async function getProductCategory(ctx: QueryFunctionContext) {
	const [, categId] = ctx.queryKey;
	const { data } = await api.get<Category>(
		`categories/${categId}`
	);

	return data.name;
}

export default function useFetchProductCategory(categId: string) {
	return useQuery<string, Error>({
		queryKey: ["productCategory", categId],
		queryFn: getProductCategory,
	});
}
