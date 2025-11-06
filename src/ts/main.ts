// css
import "../css/base.css";
import "../css/style.css";

// ts
import { changeIconsNearCurrency } from "./modules/changeIconsNearCurrency";
import { converterCurrency } from "./modules/converterCurrency";

window.addEventListener("DOMContentLoaded", () => {
	converterCurrency(
		"form",
		'input[name="currency-amount"]',
		'input[name="currency-converted-to"]'
	);

	// changeIconsNearCurrency("form", ".amount-currency-flag", ".convert-currency-flag");
});
