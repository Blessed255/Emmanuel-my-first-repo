let display = document.getElementById('display');
let currentvalue = '';
let previousvalue = '';
let operation = '';
let thememode = 'light-mode';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (value === 'C') {
            currentvalue = '';
            previousvalue = '';
            operation = '';
            display.value = '';
        } else if (value === '&lt;') {
            currentvalue = currentvalue.slice(0, -1);
            display.value = currentvalue;
        } else if (['+', '-', '', '*', '/'].includes(value)) {
            previousvalue = currentvalue;
            operation = value;
            currentvalue = '';
        } else if (value === '=') {
            if (operation === '+') {
                currentvalue = parseFloat(previousvalue) + parseFloat(currentvalue);
            } else if (operation === '-') {
                currentvalue = parseFloat(previousvalue) - parseFloat(currentvalue);
            } else if (operation === '*') {
                currentvalue = parseFloat(previousvalue) * parseFloat(currentvalue);
            } else if (operation === '/') {
                currentvalue = parseFloat(previousvalue) / parseFloat(currentvalue);
            }
            display.value = currentvalue;
            previousvalue = '';
            operation = '';

        } else if (value === 'theme') {
            if (thememode === 'light-mode') {
                document.querySelector('.calculator').classList.remove('light-mode');
                document.querySelector('.calculator').classList.add('dark-mode');
            } else {
                document.querySelector('.calculator').classList.remove('dark-mode');
                document.querySelector('.calculator').classList.add('light-mode');
                thememode = 'light-mode'
            }
        } else {
            currentvalue += value;
            display.value = currentvalue;
        }


    });
});