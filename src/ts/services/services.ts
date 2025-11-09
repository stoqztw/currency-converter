import { modalWindowError } from "../modules/modalWindowError";
import type { Exchange } from "../types/exchange.types";

export const getRecurce = async (url: string): Promise<Exchange> => {
	const res = await fetch(url);

	if (!res.ok) {
		modalWindowError();
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}

	return await res.json();
};