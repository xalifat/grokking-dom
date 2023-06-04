const words = [
	{
	  name: 'Google',
	  url: 'https://google.com'
	},
	{
	  name: 'Instagram',
	  url: 'https://instagram.com'
	},
	{
	  name: 'intocode',
	  url: 'https://intocode.ru'
	},
 ]
render(words);
function render(words)  {
	const ul = document.createElement('ul')
	for ( let i = 0; i < words.length; i++) {
		const li = document.createElement('li')
		const a = document.createElement('a')
		a.href = words[i].url
		li.append(a)
		ul.append(li)
	}
	document.body.append(ul)
}
