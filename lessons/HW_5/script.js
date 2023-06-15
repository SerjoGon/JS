window.addEventListener("DOMContentLoaded", (event) => {
 //1. Написать функцию возведения числа в степень.
        //console.log( NumberPow(2,3));
//  2. Написать функцию поиска наибольшего общего делителя.
        //console.log(MaxDivider(5, 10));
//  3. Написатьфункцию для поискамаксимальной цифрыв числе.
        //console.log(FindMaxDigit(12));
//  4. Написать функцию, которая определяет простое ли переданное число.
//console.log(simpleNum(191));

//  5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
//  Например: число 18 – множители 2 * 3 * 3.
 //console.log(GetMassivePrimeMultiply(5577));

//  6. Написать функцию, которая возвращает число Фибоначчи
//  по переданному порядковому номеру.
//  Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на
//  том, что каждое число равно сумме двух предыдущих чисел.
//  Например: порядковый номер 3 – число 2, порядковый
//  номер 6 – число 8.


});
//task1
function NumberPow(number, pow)
{
    if(pow ==1)
         return number;
return number * (NumberPow(number, pow-1));
}
//task2
function MaxDivider(number1, number2, start = 1, limit = 0, divider = 1)
{
    if(number1 == 0 || number2 == 0) return 0;
    
    if(limit == 0){
        if(number1 < number2)
        {
             limit = number1;
        } else{
            limit = number2;
        }
    }
    if(start > limit) return divider;
    if (number1 % start == 0 && number2 % start == 0) divider = start;
    return  MaxDivider(number1, number2, ++start,limit, divider);
}
//task3
function FindMaxDigit(number)
{
    if(number == 0) return 0;
    let digit = number % 10;
    let recDigit = FindMaxDigit(Math.trunc(number/10));
    if(recDigit > digit){
        return recDigit;
    }else{
       return digit;
    }  
}

//task4
function simpleNum(number, divider = 2) {
    if (divider > number / 2) return true;
    return number % divider ? simpleNum(number, ++divider) : false;      
}
//task5
function GetMassivePrimeMultiply(number) 
 {
    prime = true;
    for(let i =2; i <= number; i++)
    {
        
        if(number % i == 0)
        {
            prime = false;
            return i + " * " + GetMassivePrimeMultiply(number / i);
        } 
    }
    if(prime)
       return number;
 }