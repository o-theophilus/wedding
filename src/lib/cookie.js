export const setCookie = (name, value, exdays) => {
	let date = new Date();
	date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

export const getCookie = (name) => {
	let cookies = document.cookie.split(';');
	for (let i = 0; i < cookies.length; i++) {
		let temp = cookies[i].split('=');
		if (temp[0].trim() === name) {
			return temp[1];
		}
	}
	return '';
};
