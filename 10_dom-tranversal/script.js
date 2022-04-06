const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// Event Handling
// for(let i = 0; i < close.length; i++) {
// 	close[i].addEventListener('click', function() {
// 		card[i].style.display = 'none';
// 	});
// }

// DOM Traversal
// for(let i = 0; i < close.length; i++) {
// 	close[i].addEventListener('click', function(e) {
// 		// close[i].parentElement.style.display = 'none';
// 		e.target.parentElement.style.display = 'none';
	
// 	});
// }

close.forEach(function(el) {
	el.addEventListener('click', function(e) {
		e.target.parentElement.style.display = 'none';
	});
});