// انتخاب نمایشگر
const display = document.getElementById('display');

// متغیرها برای ذخیره اطلاعات
let currentInput = '';
let previousInput = '';
let operator = '';

// افزودن اعداد و نقطه
function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

// تنظیم عملگر
function setOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// محاسبه نتیجه
function calculateResult() {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : 'خطا'; break;
        default: return;
    }

    display.value = result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}

// پاک کردن نمایشگر
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}
