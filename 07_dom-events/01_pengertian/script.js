// Event Handler
function ubahWarnaP2() {
	p2.style.backgroundColor = 'lightblue';
}

function ubahWarnaP3() {
	p3.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

const p3 = document.querySelector('.p3');

// addEventListener()
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
	const ul = document.querySelector('section#b ul');
	const li = document.createElement('li');
	teksLiBaru = document.createTextNode('item baru');
	liBaru.appendChild(teksLiBaru);
	ul.appendChild(liBaru);
});