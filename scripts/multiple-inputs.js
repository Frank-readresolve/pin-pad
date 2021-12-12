const inputs = document.getElementsByTagName('input');

const buttons = document.getElementsByTagName('button');
for (const button of buttons) {
    button.addEventListener('click', displayValue);
}

function displayValue(event) {
    for (const input of inputs) {
        if (input.value == '') {
            const button = event.target;
            input.value = button.value;
            break;
        }
    }
}