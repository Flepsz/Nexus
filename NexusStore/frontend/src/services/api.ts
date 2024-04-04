import axios from "axios";

export const apiML = axios.create({
	baseURL: "https://api.mercadolibre.com/",
});

export const apiME = axios.create({
	baseURL: "https://www.melhorenvio.com.br/api/v2/me/",
})
