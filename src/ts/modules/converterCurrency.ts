import { urlRequest } from "../api/exchange.api";
import { getRecurce } from "../services/services";
import {
	isForm,
	isFormDataEntryValue,
	isInput,
	type FormOrNull,
} from "../types/htmlElement.types";
import { changeIconsNearCurrency } from "./changeIconsNearCurrency";
import {
	blockFunctionTenSeconds,
	modalWindowError,
	timeWorkModalWindow,
} from "./modalWindowError";

export function converterCurrency(formSelector: string) {
	const form: FormOrNull = document.querySelector(formSelector);
	const errorModal = blockFunctionTenSeconds(
		modalWindowError,
		timeWorkModalWindow
	);

	function convert<T extends FormDataEntryValue | null>(
		amount: T,
		currencyInput: T,
		currencyOutput: T,
		outputSelector: string
	) {
		const outputResult: HTMLInputElement | null =
				document.querySelector(outputSelector),
			inputElements = document.querySelectorAll("input");

		if (
			isInput(outputResult) &&
			isFormDataEntryValue(amount) &&
			isFormDataEntryValue(currencyInput) &&
			isFormDataEntryValue(currencyOutput)
		) {
			getRecurce(urlRequest + currencyInput.toString().toUpperCase())
				.then((data) => {
					let currency: number =
						data["conversion_rates"][currencyOutput.toString().toUpperCase()];
					outputResult.value = (+amount * currency).toFixed(2).toString();
				})
				.catch(() => {
					errorModal();
					inputElements.forEach((element) => {
						if (element) {
							element.disabled = true;
						}
					});
					setTimeout(() => {
						inputElements.forEach((element) => {
							if (element) {
								element.disabled = false;
							}
						});
					}, timeWorkModalWindow);
				});
		}

		return;
	}

	if (isForm(form)) {
		form.addEventListener("input", (e) => {
			e.preventDefault();

			const formData = new FormData(form),
				amountValue = formData.get("currency-amount"),
				convertedValue = formData.get("currency-converted-to"),
				amountCurrency = formData.get("currency-in-amount"),
				convertCurrency = formData.get("currency-in-convert");

			changeIconsNearCurrency(
				formData,
				".amount-currency-flag",
				".convert-currency-flag"
			);

			if (
				e.target instanceof HTMLInputElement &&
				e.target.name == "currency-amount"
			) {
				convert(
					amountValue,
					amountCurrency,
					convertCurrency,
					"[name='currency-converted-to']"
				);
			}

			if (
				e.target instanceof HTMLInputElement &&
				e.target.name == "currency-converted-to"
			) {
				convert(
					convertedValue,
					convertCurrency,
					amountCurrency,
					"[name='currency-amount']"
				);
			}
		});

		form.addEventListener("submit", (e) => {
			e.preventDefault();
		});
	}
}
