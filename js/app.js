//single element selector
const list = document.getElementById('list');
console.log(list);

const listItems0 = document.querySelector('.list-item');
console.log(listItems0);

//multiple element selector
const listItems = document.querySelectorAll('.list-item');

listItems.forEach(item =>{
    console.log(item.textContent)
});
console.log(listItems);

list.firstElementChild.textContent = "New item";

// Events
const btn = document.getElementById('myBtn');
btn.addEventListener('click', (e) =>{
    console.log(e);
});