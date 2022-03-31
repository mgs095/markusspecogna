console.log('Hello, how\'s it going?')

/*
* World's most simple dark/light mode toggle
*/
const toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', function () {
    let body = document.getElementById('body')
    body.classList.toggle('dark');
    toggleButton.classList.toggle('dark');
})