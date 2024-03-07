import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { Category } from "../types";
import { apiML } from "../../services/api";

async function getProductCategory(ctx: QueryFunctionContext) {
	const [, categId] = ctx.queryKey;
	const { data } = await apiML.get<Category>(`categories/${categId}`);

	return data.name;
}

export default function useFetchProductCategory(categId: string) {
	return useQuery<string, Error>({
		queryKey: ["productCategory", categId],
		queryFn: getProductCategory,
	});
}
