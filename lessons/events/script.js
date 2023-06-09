// button = document.querySelector('.btn');
// buttonTwo = document.querySelector('.btnTwo');
// function f(){
//     alert('pressed button1');
// }
// function f2(){
//     alert('pressed button1');
// }
// button.addEventListener('click',f);
// buttonTwo.addEventListener('click',f2);
buttons = document.querySelectorAll('button');
f=(event)=>{
        console.log(event.target);
        console.log(event.target.dataset);
        console.log(event.target.textContent);
        console.log(event.currentTarget);
    }
buttons.forEach(button => {
        button.addEventListener('click',f);        
    });