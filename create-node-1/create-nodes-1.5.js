const div = document.createElement('div')
div.classList.add('red')
console.log(div);

const div2 = document.createElement('div')
div2.classList.add('green')
console.log(div2);

const div3 = document.createElement('div')
div3.classList.add('blue')
div3.textContent = 'Я вложен'
console.log(div3);

div.append(div2)
div2.append(div3)
