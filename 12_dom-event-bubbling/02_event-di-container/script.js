const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
	if(e.target.className == 'close'); {
		e.target.parentElement.style.display = 'none';
	 	e.preventDefault();
	}
});

// agar bisa ditambah elementnya saat realtime (melalui inspect element) dengan tombol close yang tetap berjalan