export function modalWindowError() {
	const body: HTMLBodyElement | null = document.querySelector("body"),
		modalWindow: HTMLElement = document.createElement("div");

	let progress = 0;

	for (let i = 0; i < 100; i++) {
		progress++;
	}

	modalWindow.classList.add("Modal");
	modalWindow.innerHTML = `
	<div class="absolute w-full h-full top-0 left-0 bg-[#0000009a]">
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
						style="width: ${progress}%;"
					></div>
				</div>
			</div>
		</div>
	`;



	if (body) {
		body.append(modalWindow);
	}
}
