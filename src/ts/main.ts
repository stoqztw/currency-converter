// css
import "../css/base.css";
import "../css/style.css";

// ts
import { converterCurrency } from "./modules/converterCurrency";
import { modalWindowError } from "./modules/modalWindowError";

window.addEventListener("DOMContentLoaded", () => {
	converterCurrency("form");

	// apiResponce.then((data) => console.log(data["conversion_rates"]));

	modalWindowError();
});
