buttons = document.querySelectorAll('button');
button_add = document.querySelector('.create-news');


removeNews = (event) =>{
    rows_news = document.querySelectorAll('.'+event.target.dataset.name);
    console.log(rows_news);
    rows_news.forEach(el_new => {
    el_new.remove();        
    });
}
buttons.forEach(button => {
    button.addEventListener('click', removeNews);
});
function addNews(){
    tr = document.createElement('tr');
    th = document.createElement('th');
    td = document.createElement('td');
    button_del = document.createElement('button');
    p = document.createElement('p');
    document.querySelector('table').append(tr);
    document.querySelector('table').append(td);
}
button_add.addEventListener('click', addNews);
