export type ImgOrNull = HTMLImageElement | null;

export function isImage(img: ImgOrNull): img is HTMLImageElement {
	return img !== null;
}

export function isFormData(formData: FormData | null): formData is FormData {
	return formData !== null;
}