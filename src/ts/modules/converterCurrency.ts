import { urlRequest } from "../api/exchange.api";
import { getRecurce } from "../services/services";
import {
	isForm,
	isFormDataEntryValue,
	isInput,
	type FormOrNull,
} from "../types/htmlElement.types";
import { changeIconsNearCurrency } from "./changeIconsNearCurrency";

// Алгоритм
// 1. Ввод в инпут число
// 2. Выбор вводной валюты
// 3. Выбор выходной валюты
// 4. Конвертация валюты
// 5. Вывод выходной валюты

export function converterCurrency(formSelector: string, convertdInput: string) {
	const form: FormOrNull = document.querySelector(formSelector);

	function convert<T extends FormDataEntryValue | null>(
		amount: T,
		currencyInput: T,
		currencyOutput: T,
		outputSelector: string
	) {
		const outputResult: HTMLInputElement | null =
			document.querySelector(outputSelector);

		if (
			isInput(outputResult) &&
			isFormDataEntryValue(amount) &&
			isFormDataEntryValue(currencyInput) &&
			isFormDataEntryValue(currencyOutput)
		) {
			getRecurce(urlRequest + currencyInput.toString().toUpperCase()).then(
				(data) => {
					let currency: number =
						data["conversion_rates"][currencyOutput.toString().toUpperCase()];
						outputResult.value = (+amount * currency).toString();
				}
			);
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

			convert(
				amountValue,
				amountCurrency,
				convertCurrency,
				"[name='currency-converted-to']"
			);
		});
	}
}
