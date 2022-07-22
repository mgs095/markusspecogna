console.log("Hello, how's it going?");

// set up variables
let darkMode = localStorage.getItem('darkMode');
const modeToggle = document.getElementById('toggle');

// enable dark mode
// add/remove dark/light class from body
// set localstorage darkMode === enabled
const enableDarkMode = () => {
	document.body.classList.add('dark');
	document.body.classList.remove('light');
	localStorage.setItem('darkMode', 'enabled');
};

// disable dark mode
// add/remove light/dark class from body
// set localstorage darkMode === null
const disableDarkMode = () => {
	document.body.classList.remove('dark');
	document.body.classList.add('light');
	localStorage.setItem('darkMode', null);
};

// Check if darkMode is equal to enabled, if so, do enableDarkMode()
if (darkMode === 'enabled') {
	enableDarkMode();
}

// When toggle is clicked, check/get localstorage darkMode, if it is not enabled, enable it, else, disable it
modeToggle.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');

	if (darkMode !== 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});

// Get current year for footer
let year = document.getElementById('year');

if (year) {
	year.innerHTML = new Date().getFullYear() + '.';
}
