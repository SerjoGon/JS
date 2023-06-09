button = document.querySelector('button');
blocks = [];
function buttonClick(){
   span = document.createElement('span'); 
   span.style.width = '50px'; 
   span.style.height = '50px';
   span.style.display = 'inline-block'; 
   span.style.background = 'rgb('+String(Math.floor(Math.random()*255))+','+String(Math.floor(Math.random()*255))+','+String(Math.floor(Math.random()*255))+')'; //'#'+String(Math.floor(Math.random()*999999)); 
    document.body.appendChild(span);
    blocks = document.querySelectorAll('span');
    blocks.forEach(block => {
    block.addEventListener('click', removeBlock);
});
}
removeBlock = (event) =>{
// console.log(event.target);
event.target.remove();
}

button.addEventListener('click', buttonClick);