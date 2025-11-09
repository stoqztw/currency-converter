export function modalWindowError() {
	const body: HTMLBodyElement | null = document.querySelector("body"),
		modalWindow: HTMLElement = document.createElement("div"),
		timeId = setTimeout(() => {
			modalWindow.innerHTML = "";
		}, 9999);

	modalWindow.classList.add("Modal");
	modalWindow.innerHTML = `
	<div class="absolute w-full h-full top-0 left-0 bg-[#0000009a] overflow-hidden">
			<div
				class="modal__wrapper absolute top-1/2 left-1/2 -translate-1/2 w-96 h-36 bg-red-400 rounded-2xl border-2 border-gray-400"
			>
				<div class="flex justify-center items-center h-full flex-col gap-1.5">
					<p class="text-3xl">ERROR 404</p>
					<p>Server error or missing free requests</p>
				</div>
				<div
					class="progress-bar mt-3 border-2 border-gray-300 w-96 h-3 bg-gray-200 rounded-full mb-4 dark:bg-gray-700"
				>
					<div
						class="progress bg-red-600 h-full rounded-full dark:bg-red-500"
					></div>
				</div>
			</div>
		</div>
	`;

	if (body) {
		body.append(modalWindow);
	}
}

export function blockFunctionTenSeconds<T extends (...args: any[]) => void>(
	fn: T,
	delayMs: number
) {
	let isBLocked = false;

	return function (...args: Parameters<T>) {
		if (isBLocked) return;

		fn(...args);
		isBLocked = true;
		setTimeout(() => {
			isBLocked = false;
		}, delayMs);
	};
}
