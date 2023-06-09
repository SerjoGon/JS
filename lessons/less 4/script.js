window.addEventListener('DOMContentLoaded', (event) => {
console.log(LessNumber(17,3));
});

function LessNumber(number1, number2) {
    var numb3 = number1 / number2;
    var spliter = numb3.toString().split(".");
    return spliter[1];
}