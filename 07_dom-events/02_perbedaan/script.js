// Event Handler -> ketimpa
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');

p2.onclick = function() {
	p2.style.backgroundColor = 'lightblue';
}
p2.onclick = function() {
	p2.style.color = 'red';
}

// addEventListener() -> double
p3.addEventListener('click', function() {
	p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('click', function() {
	p3.style.color = 'red';
});