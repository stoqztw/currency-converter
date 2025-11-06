import {
	isFormData,
	isImage,
	type ImgOrNull,
} from "../types/changeIconNearCurrency.types";

export function changeIconsNearCurrency(
	formData: FormData,
	amountCurrencyIconSelector: string,
	convertCurrencyIconSelector: string
) {
	const amountCurrencyIcon: ImgOrNull = document.querySelector(
			amountCurrencyIconSelector
		),
		convertCurrencyIcon: ImgOrNull = document.querySelector(
			convertCurrencyIconSelector
		);

	if (
		isImage(amountCurrencyIcon) &&
		isImage(convertCurrencyIcon) &&
		isFormData(formData)
	) {
		let amountIconBuffer = formData.get("currency-in-amount"),
			convertIconBuffer = formData.get("currency-in-convert");

		if (
			typeof amountIconBuffer === "string" &&
			typeof convertIconBuffer === "string"
		) {
			amountIconBuffer = amountIconBuffer.toUpperCase();
			convertIconBuffer = convertIconBuffer.toUpperCase();

			amountCurrencyIcon.src = `public/icons/${amountIconBuffer}.svg`;
			convertCurrencyIcon.src = `public/icons/${convertIconBuffer}.svg`;
		}
	}
}
