// css
import "../css/base.css";
import "../css/style.css";

// ts
import { converterCurrency } from "./modules/converterCurrency";

window.addEventListener("DOMContentLoaded", () => {
	converterCurrency(
		"form",
		'input[name="currency-amount"]',
		'input[name="currency-converted-to"]'
	);
});
