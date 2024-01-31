import axios from "axios";
import { ProductDescription, ProductsSearch } from "../queries/types";

const api = axios.create({
	baseURL: "https://api.mercadolibre.com/",
});

export default api;

export async function getProducts(search: string) {
	try {
		const response = await api.get(`sites/MLB/search?q=${search}`);
    const data: ProductsSearch = response.data
		console.log(data)
	} catch (err) {
		console.log(err);
	}
}

export async function getProductsDescription(itemId: string) {
	try {
		const response = await api.get(`items/${itemId}/description`);
    const data: ProductDescription = response.data
		console.log(data)
	} catch (err) {
		console.log(err);
	}
}