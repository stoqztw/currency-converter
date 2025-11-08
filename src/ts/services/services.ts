import type { Exchange } from "../types/exchange.types";

export const getRecurce = async (url: string): Promise<Exchange> => {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}

	return await res.json();
};

// export function getCurrencies(
// 	exchangeRatesName: FormDataEntryValue,
// 	url: string
// ) {
// 	const responce: Promise<Exchange> = getRecurce(
// 		url + exchangeRatesName.toString().toUpperCase()
// 	);

// 	const exchangeRate = responce.then((data) => {
// 		const result = data["conversion_rates"];
// 		return result;
// 	});
// 	return exchangeRate;
// }
