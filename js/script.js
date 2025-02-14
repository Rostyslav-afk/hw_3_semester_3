"use strict";
function showText() {
    let button = document.getElementById("button-answers")
    let text1 = document.getElementById("showtext1")
    let text2 = document.getElementById("showtext2")
    let text3 = document.getElementById("showtext3")


    text1.style.opacity = 1;
    text1.textContent = `Відповідь до задачі 1: ${result}`;

    text2.style.opacity = 1;
    text2.textContent = `Відповідь до задачі 2:  ${answers}`;

    text3.style.opacity = 1;
    text3.textContent = `Відповідь до задачі 3: ${fullName}`;

}
// #1 Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
const firstNumber = 5;
const secondNumber = 5;
const thirdNumber = `5`;
const result = firstNumber + secondNumber + thirdNumber;
console.log(result);

// #2 Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.
const myEmail = "myemail@gmail.com";
const length = myEmail.length; 
const isGood = myEmail.includes("@");
const answers = `Довжина: ${length}, Чи містить символ @: ${isGood}`;
console.log(answers);

// #3 Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
const myName = "Ростислав";
const mySubname = "Скрипин";
const fullName = "Моє повне ім'я:" + " " + myName + " " + mySubname;
console.log(fullName);

//4 Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»

const userName = "Олег";
const payment = 1000;
const allPayment = alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
console.log(allPayment);
