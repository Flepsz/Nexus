import { useMutation } from "@tanstack/react-query";
import { Shipping } from "../types";
import { apiME } from "../../services/api";

async function getShipping(from: string, to: string) {
	apiME.defaults.headers["Authorization"] = `Bearer ${process.env.EXPO_PUBLIC_TOKEN_ME}`;
	const { data } = await apiME.post<Shipping>("shipment/calculate", {
		from: { postal_code: from },
		to: { postal_code: to },
	});

	return data;
}

export default function useMutateShipping() {
	return useMutation<Shipping, unknown, { from: string; to: string }>({
		mutationKey: ["shippingCalc"],
		mutationFn: ({ from, to }) => getShipping(from, to),
	});
}
