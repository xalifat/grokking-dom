const words = ["html", "css", "js"];
render(words);
function render(words)  {
	const ul = document.createElement('ul')
	for( let i = 0; i < words.length; i++) {
		const li = document.createElement('li')
		li.textContent = words[i]
		ul.append(li)
	}
	document.body.append(ul)
}
