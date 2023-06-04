const ul = document.createElement('ul')
ul.classList.add('list')
console.log(ul);

const li = document.createElement('li')
li.textContent = 'Hello, world!'
console.log(li);
ul.append(li)
