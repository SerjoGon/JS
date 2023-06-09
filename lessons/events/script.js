button = document.querySelector('.btn');
buttonTwo = document.querySelector('.btnTwo');
function f(){
    alert('pressed button1');
}
function f2(){
    alert('pressed button1');
}
button.addEventListener('click',f);
buttonTwo.addEventListener('click',f2);