/*Задание 1*/
const myName = "Таня";
const language = "python";
const creator = "Никита Михайлович";
const reason = "Хочу кушать";
const month = "-3";

console.log(`Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования
    ${language} на курсе по ${language} y ${creator}.
    Я хочу стать веб-разработчиком, потому что ${reason}. До этого я изучал(а)
    ${language} ${month} месяцев. Я уверен(а), что пройду данный курс дo
    концa`)
/*Задание 2*/
let text = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования
    ${language} на курсе по ${language} y ${creator}.
    Я хочу стать веб-разработчиком, потому что ${reason}. До этого я изучал(а)
    ${language} ${month} месяцев. Я уверен(а), что пройду данный курс дo
    концa`
text = text.replaceAll('python', 'python'.toUpperCase())
console.log(text);
console.log(text[0]);
console.log(text.length);
const posledny = text.length - 1;
console.log(text[posledny]);

/*Задание 3*/
let username = prompt("Введите имя:")

alert( `Вас зовут ${username.toLowerCase().trim()}`)

/*Задание 4*/
let userage = prompt("Введите возраст:")

alert( `Вас зовут ${username.toLowerCase().trim()}, Вам лет: ${Number(userage.trim())}`)
/*Задание 5*/
let string = prompt("Введите строку").trim()
let first_index = prompt("Введите начальный индекс")
let last_index = prompt("Введите последний индекс")
let res = string.slice(first_index,last_index)
alert(res)
/*Задание 6*/
let userText = prompt("Введите текст");
if (userText !== null) {
    userText = userText.trim();

let wordFromText = prompt("Введите слово из текста");
if (wordFromText !== null) {
    wordFromText = wordFromText.trim();

let indexOfWord = userText.indexOf(wordFromText);

    if (indexOfWord !== -1) {
        let result = userText.slice(0, indexOfWord + wordFromText.length);

        alert(`Результат: ${result}`);
    } else {
        alert(`Слово "${wordFromText}" не найдено в тексте`);
    }
}
}

