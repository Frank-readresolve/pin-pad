const screen = document.getElementById('screen');

const buttons = document.getElementsByTagName('button');
for (const button of buttons) {
    button.addEventListener('click', displayValue);
}

function displayValue(event) {
    const pinCode = screen.value;
    if (pinCode.length < 4) {
        const button = event.target;
        screen.value += button.value;
    }
}