export type FormOrNull = HTMLFormElement | null;

export function isForm(form: HTMLFormElement | null): form is HTMLFormElement {
	return form !== null;
}

export function isInput(form: HTMLInputElement | null): form is HTMLInputElement {
	return form !== null;
}