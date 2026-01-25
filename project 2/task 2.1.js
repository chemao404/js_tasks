/* Напишите программу, которая принимает число от пользователя
и определяет, положительное оно, отрицательное или равно нулю.*/

let number = prompt("Введите число:")

if (!isNaN(number) && number.trim() !== "") {
    let num = Number(number);

    if (num == 0) {
    console.log(`Число равно нулю`);
    } else if (num > 0) {
        console.log(`Число положительное`);
    } else if (num < 0) {
        console.log(`Число отрицательное`)
    }
}