import { apiResponce, testObj } from "../api/exchange.api";
import {
	isForm,
	isInput,
	type FormOrNull,
} from "../types/converterCurrency.types";

export function converterCurrency(
	formSelector: string,
	currencyAmountSelector: string,
	currencyConvertedSelector: string
): void {
	const form: FormOrNull = document.querySelector(formSelector),
		currencyAmountInput: HTMLInputElement | null = document.querySelector(
			currencyAmountSelector
		),
		currencyConvertedInput: HTMLInputElement | null = document.querySelector(
			currencyConvertedSelector
		);

	if (
		isForm(form) &&
		isInput(currencyAmountInput) &&
		isInput(currencyConvertedInput)
	) {
		form.addEventListener("click", (e) => {
			e.preventDefault();
		});

		currencyAmountInput.addEventListener("input", (e) => {
			// let convertedValue
			// testObj.then(data => console.log(data["conversion_rates"]))
			// currencyConvertedInput.value = ;
		});
	}
}
