/* Напишите программу, которая запрашивает у пользователя строку, проверяет,
является ли она числом, и определяет, больше это число, меньше или равно 100. */

let number = prompt("Введите число")

if (number !== null && number.trim() !== "" && !isNaN(number)) {
    let num = Number(number);

    if (num > 100) {
        console.log(`Число больше ста`);
    } else if (num < 100) {
        console.log(`Число меньше ста`)
    } else if (num == 100) {
        console.log(`Число равно ста`)
    }
}