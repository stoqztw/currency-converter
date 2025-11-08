export type FormOrNull = HTMLFormElement | null;
export type ImgOrNull = HTMLImageElement | null;

export function isForm(form: HTMLFormElement | null): form is HTMLFormElement {
	return form !== null;
}

export function isInput(
	form: HTMLInputElement | null
): form is HTMLInputElement {
	return form !== null;
}


export function isImage(img: ImgOrNull): img is HTMLImageElement {
	return img !== null;
}

// for forms

export function isFormData(formData: FormData | null): formData is FormData {
	return formData !== null;
}

export function isFormDataEntryValue(formDataValue: FormDataEntryValue | null): formDataValue is FormDataEntryValue {
	return formDataValue !== null;
}