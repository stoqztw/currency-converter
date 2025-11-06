import { isForm, type FormOrNull } from "../types/converterCurrency.types";
import { changeIconsNearCurrency } from "./changeIconsNearCurrency";

// Алгоритм
// 1. Ввод в инпут число
// 2. Выбор вводной валюты
// 3. Выбор выходной валюты
// 4. Конвертация валюты
// 5. Вывод выходной валюты

// data select (document.querrySelect(selector).value)

// FIXME: Нужно ли брать инпуты отдельно или достаточно диструктуризации?

export function converterCurrency(
	formSelector: string,
	currencyAmountSelector: string,
	currencyConvertedSelector: string
): void {
	const form: FormOrNull = document.querySelector(formSelector);

	if (isForm(form)) {
		form.addEventListener("input", (e) => {
			e.preventDefault();

			const formData = new FormData(form),
				amountValue = formData.get("currency-amount"),
				convertedValue = formData.get("currency-converted-to"),
				amountCurrency = formData.get("currency-in-amount"),
				convertCurrency = formData.get("currency-in-convert");

			// if (e.target !== null && "name" in e.target) {
			// 	const amountValue = e.target.name === "currency-amount" ? e.target
			// }

			changeIconsNearCurrency(
				formData,
				".amount-currency-flag",
				".convert-currency-flag"
			);
		});

		// currencyAmountInput.addEventListener("input", (e) => {
		// 	// let convertedValue
		// 	// testObj.then(data => console.log(data["conversion_rates"]))
		// 	// currencyConvertedInput.value = ;
		// });
	}
}
