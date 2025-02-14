"use strict";
function showText() {
    let button = document.getElementById("button-answers")
    let text1 = document.getElementById("showtext1")
    let text2 = document.getElementById("showtext2")
    let text3 = document.getElementById("showtext3")


    text1.style.opacity = 1;
    text1.textContent = `Відповідь до задачі 1:  `;

    text2.style.opacity = 1;
    text2.textContent = `Відповідь до задачі 2:  `;

    text3.style.opacity = 1;
    text3.textContent = `Відповідь до задачі 3: ${fullName}`;

}

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
