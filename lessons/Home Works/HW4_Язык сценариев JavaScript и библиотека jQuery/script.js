window.addEventListener("DOMContentLoaded", (event) => {
 //task1  
// console.log(my_Comparison(number1 = prompt("введите чило для сравнения "), number2 = prompt("введите второе чило для сравнения ")));    
//task2
//console.log(my_Factorial(number = prompt("ввведите чило")));
//task3
// console.log(to_String(number = prompt("введите цифру от 1 до 9"),
// number2 = prompt("введите цифру от 0 до 9"),
// number3 = prompt("введите цифру от 0 до 9")));
//task5
//console.log(isPerfectNumber(number = prompt("введите число")));
//task6
// perfectNumbers(min = prompt("Введите нижнюю границу диапазона"),max = prompt("Введите верхнюю границу диапазона"));
//task7
//console.log(timeConverter(hours = prompt("часы"), minutes = prompt("минуты"), seconds = prompt("секунды")));
//task8
console.log(timeConvertToSeconds(hours = prompt("часы"), minutes = prompt("минуты"), seconds = prompt("секунды")));



});
// Задание
// 1. Написать функцию, которая принимает 2 числа
// и возвращает -1, если первое меньше,чем второе; 
//1 – если первое больше, чем второе;
// и 0 – если числа равны.
function my_Comparison(number1, number2) {
    if(!number1 || !number2){return "Не хватает данных для сравнения!";}
    if (number1 < number2) {return -1;}
    else if(number1 > number2){return 1;}
    else {return 0;}
}
//2. Написать функцию, которая вычисляет факториал переданного ей числа.
function my_Factorial(number){
    return number ? number * my_Factorial(number - 1) : 1;
}
//. Написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число. Например: цифры
// 1, 4, 9 превратятся в число 149.
function to_String(number,number2,number3){
    return String(number) + String(number2) + String(number3);
}
// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
// Совершенное число – это число, равное сумме всех своих собственных делителей.
function isPerfectNumber( number) {
    let sum = 1;
    for(let i = 2; i <= (number/2); i++) {
        if(number % i == 0){sum += i;}
    }
    return sum == number;
}
//6 Написать функцию, которая принимает минимальное и
// те числа из диапазона, которые являются совершенными
// максимальное значения для диапазона, и выводит только

function perfectNumbers(min,max){
    if(min > max || !min || !max) return "Не верный диапазон !!!";
    for(let i = min; i < max; i++)
    {
        if(isPerfectNumber(i)) console.log("Совершенное число из вашего диапазона - " + i );
    }
}
// 7. Написать функцию, которая принимает время (часы, минуты, секунды)
//  и выводит его на экран в формате «чч:мм:сс». 
//  Если при вызове функции минуты и/или секунды не были
// переданы, то выводить их как 00

function timeConverter(hours, minutes, seconds) {
    if(!hours){hours = '00';}
    if(!minutes){minutes = '00';}
    if(!seconds ){seconds = '00';}
    return hours + ':' + minutes + ':' + seconds;
}
// 8. Написать функцию, которая принимает часы, минуты и
// секунды и возвращает это время в секундах.

function timeConvertToSeconds(hours, minutes, seconds){
    return (hours * 3600) + (minutes * 60) + (seconds*1);
}