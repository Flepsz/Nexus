import axios, { AxiosResponse } from "axios";
import { ProductDescription, ProductsSearch } from "./typesApi";

const axiosInstance = axios.create({
	baseURL: "https://api.mercadolibre.com/",

});

export async function getProducts(search: string) {
	try {
		const response = await axiosInstance.get(`sites/MLB/search?q=${search}`);
    const data: ProductsSearch = response.data
		console.log(data)
	} catch (err) {
		console.log(err);
	}
}

export async function getProductsDescription(itemId: string) {
	try {
		const response = await axiosInstance.get(`items/${itemId}/description`);
    const data: ProductDescription = response.data
		console.log(data)
	} catch (err) {
		console.log(err);
	}
}