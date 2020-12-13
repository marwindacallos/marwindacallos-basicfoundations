// DOM SELECTION


 // SINGLE ELEMENT SELECTORS
 // console.log(window);
 // const form = document.getElementById('my-form');
 // const container = document.querySelector('.container');

 // console.log(container);


 // MULTIPLE ELEMENT SELECTORS
 // console.log(document.querySelector('.item'));
 // console.log(document.getElementsByClassName('item')); // use queryselector instead

 const items = document.querySelectorAll('.item');
 items.forEach((item) => console.log(item));

// DOM MANIPULATION user interface

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove()
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn');
btn.style.background = 'red';

// EVENTLISTENER  (mouseover)(mouseout)
btn.addEventListener('click', (e) =>{
 e.preventDefault();
 console.log('click');
 console.log(e.target.className);
 document.querySelector('#my-form').style.background = '#ccc';
 document.querySelector('body').classList.add('bg-dark');
 document.querySelector('body').classList.remove('bg-dark');
 ul.lastElementChild.innerHTML = '<h1>Hellos</h1>'
})