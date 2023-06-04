const div = document.createElement('div')
const ul = document.createElement('ul')


const firstLi = document.createElement('li')
const secondLi = document.createElement('li')



const firstLink = document.createElement('a')
const secondLink = document.createElement('a')


firstLink.href = 'https://instagram.com/intocode'
firstLink.textContent = 'Наш инстаграм'


secondLink.href = 'https://intocode.ru'
secondLink.textContent = 'Наш сайт'


firstLi.append(firstLink)
secondLi.append(secondLink)
ul.append(firstLi, secondLi)
div.append(ul)

document.body.append(div)





